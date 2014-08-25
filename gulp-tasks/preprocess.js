'use strict';

var gulp       = require('gulp');
var gutil      = require('gulp-util');
var connect    = require('gulp-connect');
var preprocess = require('gulp-preprocess');

gulp.task('preprocess:app', function() {
    return gulp.src('./application/index.html')
        .pipe(preprocess({
            context: { ENVIRONMENT : gutil.env.env || 'development' }
        }))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('preprocess:test', function() {
    return gulp.src([
            './tests/index.html',
            './node_modules/mocha/mocha.css',
            './node_modules/mocha/mocha.js'
        ])
        .pipe(gulp.dest('./test-build'))
        .pipe(connect.reload());
});
