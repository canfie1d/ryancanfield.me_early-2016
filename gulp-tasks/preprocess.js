'use strict';

var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    connect    = require('gulp-connect'),
    preprocess = require('gulp-preprocess');

gulp.task('preprocess:app', function() {
    var env = gutil.env.env || 'development';

    return gulp.src('./application/index.html')
        .pipe(preprocess({
            context: { ENVIRONMENT : env }
        }))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('preprocess:test', function() {
    var env = gutil.env.env || 'development';

    return gulp.src([
            './tests/index.html',
            './node_modules/mocha/mocha.css',
            './node_modules/mocha/mocha.js'
        ])
        .pipe(gulp.dest('./test-build'))
        .pipe(connect.reload());
});
