/* jshint node: true */
'use strict';

var browserify = require('browserify'),
    connect    = require('gulp-connect'),
    gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    preprocess = require('gulp-preprocess'),
    streamify  = require('gulp-streamify'),
    uglify     = require('gulp-uglify'),
    reactify   = require('reactify'),
    source     = require('vinyl-source-stream'),
    watchify   = require('watchify');

var error = require('./error');

gulp.task('browserify:app', function() {
    var bundler = watchify(browserify({
            debug        : (gutil.env.env !== 'production'),
            entries      : ['./application/bootstrap.js'],
            extensions   : ['.js', '.jsx'],
            cache        : {},
            packageCache : {},
            fullPaths    : true
        })
        .external('config')
        .transform(reactify));

    var rebundle = function() {
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
    var env      = gutil.env.env || 'development',
        filepath = './application/config/config.' + env + '.js',
        backend  = gutil.env.backend || '';

    var bundler = watchify(
            browserify({
                debug        : (gutil.env.env !== 'production'),
                cache        : {},
                packageCache : {},
                fullPaths    : true
            }).require(filepath, { expose : 'config' })
        );

    var rebundle = function() {
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
    var testPath = gutil.env.path || './tests/index.js';
    var bundler = watchify(browserify({
            debug        : (gutil.env.env !== 'production'),
            entries      : [testPath],
            extensions   : ['.js', '.jsx'],
            cache        : {},
            packageCache : {},
            fullPaths    : true
        })
        .transform(reactify));

    var rebundle = function() {
        var stream = bundler.bundle()
            .on('error', error('browserify:test'))
            .pipe(source('index.js'))
            .pipe(gulp.dest('./test-build'))
            .pipe(connect.reload());
    };

    bundler.on('log', gutil.log);
    bundler.on('update', rebundle);

    return rebundle();
});
