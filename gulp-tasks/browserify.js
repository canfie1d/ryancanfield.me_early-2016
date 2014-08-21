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

gulp.task('browserify:app', ['browserify:config'], function() {
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
        var stream = bundler.bundle();

        stream.on('error', gutil.log);

        stream = stream.pipe(source('app.js'))
            .pipe(gutil.env.env === 'production' ? streamify(uglify()) : gutil.noop())
            .pipe(gulp.dest('./build/js'))
            .pipe(connect.reload());

        return stream;
    };

    bundler.on('log', gutil.log);
    bundler.on('update', rebundle);

    return rebundle();
});

gulp.task('browserify:config', function() {
    var env      = gutil.env.env || 'development',
        filepath = './application/config/config.' + env + '.js',
        backend  = gutil.env.backend || '';

    var bundler = browserify({
            debug        : (gutil.env.env !== 'production'),
            cache        : {},
            packageCache : {},
            fullPaths    : true
        })
        .require(filepath, { expose : 'config' });

    bundler.on('log', gutil.log);

    return bundler.bundle()
        .on('error', gutil.log)
        .pipe(source('config.js'))
        .pipe(streamify(
            preprocess({
                context : { BACKEND : backend }
            }))
        )
        .pipe((env === 'production' ? streamify(uglify()) : gutil.noop()))
        .pipe(gulp.dest('./build/js'))
        .pipe(connect.reload());
});
