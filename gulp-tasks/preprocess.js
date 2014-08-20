'use strict';

var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    connect    = require('gulp-connect'),
    preprocess = require('gulp-preprocess'),
    rename     = require('gulp-rename');

gulp.task('preprocess', function() {
    var env = gutil.env.env || 'development';

    return gulp.src('./application/index.html')
        .pipe(preprocess({
            context: { ENVIRONMENT : env }
        }))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});
