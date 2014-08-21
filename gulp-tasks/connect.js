'use strict';

var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    connect    = require('gulp-connect'),
    fallback   = require('connect-history-api-fallback');

gulp.task('connect:app', function() {
    var env = gutil.env.env || 'development';

    connect.server({
        root       : 'build',
        port       : 9001,
        livereload : env === 'development',
        middleware : function (connect, options) {
            return [fallback];
        }
    });
});

gulp.task('connect:test', function() {
    connect.server({
        root       : 'test-build',
        port       : 9002,
        livereload : true,
        middleware : function (connect, options) {
            return [fallback];
        }
    });
});
