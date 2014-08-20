/* jshint node: true */
'use strict';

var connect    = require('gulp-connect'),
    gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    preprocess = require('gulp-preprocess'),
    streamify  = require('gulp-streamify'),
    uglify     = require('gulp-uglify'),
    reactify   = require('reactify'),
    source     = require('vinyl-source-stream'),
    watchify   = require('watchify');

gulp.task('browserify:app', function() {
    var bundler = watchify({
            entries    : ['./application/bootstrap.js'],
            extensions : ['.js', '.jsx']
        })
        .external('config')
        .transform(reactify);

    var rebundle = function() {
        var stream = bundler.bundle({
            debug : (gutil.env.env !== 'production')
        });

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

    var bundler = watchify({ entries : [filepath] });

    var rebundle = function() {
        var stream = bundler.bundle({
            debug : (gutil.env.env !== 'production')
        });

        stream.on('error', gutil.log);

        stream = stream.pipe(source('config.js'))
            .pipe(streamify(
                preprocess({
                    context : { BACKEND : backend }
                }))
            )
            .pipe((env === 'production' ? streamify(uglify()) : gutil.noop()))
            .pipe(gulp.dest('./build/js'))
            .pipe(connect.reload());

        return stream;
    };

    bundler.on('log', gutil.log);
    bundler.on('update', rebundle);

    return rebundle();
});
