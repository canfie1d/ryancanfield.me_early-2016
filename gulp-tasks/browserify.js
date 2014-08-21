/* jshint node: true */
'use strict';

var browserify = require('browserify');
var connect    = require('gulp-connect');
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var preprocess = require('gulp-preprocess');
var streamify  = require('gulp-streamify');
var uglify     = require('gulp-uglify');
var reactify   = require('reactify');
var source     = require('vinyl-source-stream');
var watchify   = require('watchify');

var error = require('./error');

gulp.task('browserify:app', function() {
    var bundler, rebundle;

    bundler = watchify(
        browserify({
            debug        : (gutil.env.env !== 'production'),
            entries      : ['./application/bootstrap.js'],
            extensions   : ['.js', '.jsx'],
            cache        : {},
            packageCache : {},
            fullPaths    : true
        })
        .external('config')
        .transform(reactify)
    );

    rebundle = function() {
        return bundler.bundle()
            .on('error', error('browserify:app'))
            .pipe(source('app.js'))
            .pipe(gutil.env.env === 'production' ? streamify(uglify()) : gutil.noop())
            .pipe(gulp.dest('./build/js'))
            .pipe(connect.reload());
    };

    bundler.on('log', gutil.log);
    bundler.on('update', rebundle);

    return rebundle();
});

gulp.task('browserify:config', function() {
    var backend, bundler, env, filepath, rebundle;

    backend  = gutil.env.backend || '';
    env      = gutil.env.env || 'development';
    filepath = './application/config/config.' + env + '.js';

    bundler = watchify(
        browserify({
            debug        : (gutil.env.env !== 'production'),
            cache        : {},
            packageCache : {},
            fullPaths    : true
        })
        .require(filepath, { expose : 'config' })
    );

    rebundle = function() {
        return bundler.bundle()
            .on('error', error('browserify:config'))
            .pipe(source('config.js'))
            .pipe(streamify(
                preprocess({
                    context : { BACKEND : backend }
                }))
            )
            .pipe((env === 'production' ? streamify(uglify()) : gutil.noop()))
            .pipe(gulp.dest('./build/js'))
            .pipe(connect.reload());
    };

    bundler.on('log', gutil.log);
    bundler.on('update', rebundle);

    return rebundle();
});

gulp.task('browserify:test', function () {
    var bundler, rebundler, path;

    filepath = gutil.env.path || './tests/index.js';
    bundler  = watchify(
        browserify({
            debug        : (gutil.env.env !== 'production'),
            entries      : [filepath],
            extensions   : ['.js', '.jsx'],
            cache        : {},
            packageCache : {},
            fullPaths    : true
        })
        .transform(reactify)
    );

    rebundle = function() {
        return bundler.bundle()
            .on('error', error('browserify:test'))
            .pipe(source('index.js'))
            .pipe(gulp.dest('./test-build'))
            .pipe(connect.reload());
    };

    bundler.on('log', gutil.log);
    bundler.on('update', rebundle);

    return rebundle();
});
