'use strict';

var gulp    = require('gulp');
var connect = require('gulp-connect');

gulp.task('preprocess:app', function() {
    return gulp.src([
            './application/index.html'
        ])
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('preprocess:test', function() {
    return gulp.src([
            './__karma__/index.html',
            './__karma__/favicon.png',
            './node_modules/mocha/mocha.css',
            './node_modules/mocha/mocha.js'
        ])
        .pipe(gulp.dest('./test'))
        .pipe(connect.reload());
});
