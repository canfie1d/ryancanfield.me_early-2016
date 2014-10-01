/* jshint node: true */
'use strict';

var _          = require('underscore');
var browserify = require('browserify');
var proxyquire = require('proxyquireify');
var connect    = require('gulp-connect');
var glob       = require('glob');
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var reactify   = require('reactify');
var replace    = require('gulp-replace-task');
var source     = require('vinyl-source-stream');
var streamify  = require('gulp-streamify');
var uglify     = require('gulp-uglify');
var watchify   = require('watchify');
var watchr     = require('watchr');

var error = require('./error');

var bundleApp = function(watch) {
    var backend, bundler, env, rebundle;

    env     = gutil.env.env;
    backend = gutil.env.backend || '';

    bundler = browserify({
            debug        : (env !== 'production'),
            entries      : ['./application/bootstrap.js'],
            extensions   : ['.js', '.jsx'],
            cache        : {},
            packageCache : {},
            fullPaths    : true
        })
        .transform(reactify)
        .on('log', gutil.log);

    if (watch) {
        watchify(bundler);
    }

    rebundle = function() {
        return bundler.bundle()
            .on('error', error('browserify:app'))
            .pipe(source('app.js'))
            .pipe(streamify(
                replace({
                    patterns : [{
                        match       : /__ENVIRONMENT__/g,
                        replacement : '\''+env+'\''
                    }, {
                        match       : /__BACKEND__/g,
                        replacement : '\''+backend+'\''
                    }]
                })
            ))
            .pipe(env === 'production' ? streamify(uglify()) : gutil.noop())
            .pipe(gulp.dest('./build/js'))
            .pipe(connect.reload(true));
    };

    bundler.on('update', rebundle);

    return rebundle();
};

gulp.task('browserify:app', function() {
    return bundleApp(false);
});

gulp.task('watchify:app', function() {
    return bundleApp(true);
});

gulp.task('watchify:test', function () {
    var backend, bundle, bundler, entries, env, path, rebundle;

    backend = gutil.env.backend || '';
    env     = gutil.env.env;
    path    = gutil.env.path || './__tests__/**/*.js*';

    bundle = function() {
        entries = glob.sync(path);

        bundler = watchify(
            browserify({
                debug        : (env !== 'production'),
                entries      : entries,
                extensions   : ['.js', '.jsx'],
                cache        : {},
                packageCache : {},
                fullPaths    : true
            })
            .plugin(proxyquire.plugin)
            .ignore('./__tests__/globals.js')
            .transform(reactify)
            .on('log', gutil.log)
        );

        rebundle = function() {
            return bundler.bundle()
                .on('error', error('browserify:test'))
                .pipe(source('tests.js'))
                .pipe(streamify(
                    replace({
                        patterns : [{
                            match       : /__ENVIRONMENT__/g,
                            replacement : '\''+env+'\''
                        }, {
                            match       : /__BACKEND__/g,
                            replacement : '\''+backend+'\''
                        }]
                    })
                ))
                .pipe(gulp.dest('./test'))
                .pipe(connect.reload(true));
        };

        bundler.on('update', function(paths) {
            // Prevent double reload. Watchify updates on new files but doesn't do anything
            if (_.intersection(entries, paths).length) {
                rebundle();
            }
        });

        return rebundle();
    };

    watchr.watch({
        path     : './__tests__',
        listener : function(changeType) {
            // Ignore changes to existing files
            if (changeType !== 'update') {
               bundle();
            }
        }
    });

    return bundle();
});
