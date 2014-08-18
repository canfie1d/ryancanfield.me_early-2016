'use strict';

var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    connect    = require('gulp-connect'),
    fallback   = require('connect-history-api-fallback');

gulp.task('connect', function() {
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
