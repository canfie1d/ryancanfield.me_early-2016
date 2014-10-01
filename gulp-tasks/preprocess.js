'use strict';

var gulp    = require('gulp');
var connect = require('gulp-connect');

gulp.task('preprocess:app', function() {
    return gulp.src([
            './application/index.html',
            './application/.htaccess'
        ])
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('preprocess:test', function() {
    return gulp.src([
            './__react-tests__/index.html',
            './__react-tests__/favicon.png',
            './node_modules/mocha/mocha.css',
            './node_modules/mocha/mocha.js'
        ])
        .pipe(gulp.dest('./test'))
        .pipe(connect.reload());
});
