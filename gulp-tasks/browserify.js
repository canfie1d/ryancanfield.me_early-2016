/* jshint node: true */
'use strict';

var browserify = require('browserify');
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

var error = require('./error');

gulp.task('browserify:app', function() {
    var backend, bundler, env, rebundle;

    env     = gutil.env.env || 'development';
    backend = gutil.env.backend || '';

    bundler = watchify(
        browserify({
            debug        : (env !== 'production'),
            entries      : ['./application/bootstrap.js'],
            extensions   : ['.js', '.jsx'],
            cache        : {},
            packageCache : {},
            fullPaths    : true
        })
        .transform(reactify)
        .on('log', gutil.log)
    );

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
            .pipe(connect.reload());
    };

    bundler.on('update', rebundle);

    return rebundle();
});

gulp.task('browserify:test', function () {
    var backend, bundler, entries, env, path, rebundle;

    backend = gutil.env.backend || '';
    env     = gutil.env.env || 'development';
    path    = gutil.env.path || './__karma__/**/*.js';
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
        .ignore('./__karma__/globals.js')
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
            .pipe(connect.reload());
    };

    bundler.on('update', rebundle);

    return rebundle();
});
