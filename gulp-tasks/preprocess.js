'use strict';

var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    connect    = require('gulp-connect'),
    preprocess = require('gulp-preprocess'),
    rename     = require('gulp-rename'),
    template   = require('gulp-template');

gulp.task('preprocess:html', function() {
    var env = gutil.env.env || 'development';

    gulp.src('./application/index.html')
        .pipe(preprocess({
            context: { ENVIRONMENT : env }
        }))
        .pipe(gulp.dest('./build'))
        .pipe(connect.reload());
});

gulp.task('preprocess:config', function() {
    var env      = gutil.env.env || 'development',
        filePath = './application/config/config.' + env + '.js',
        backend  = gutil.env.backend || '';

    gulp.src(filePath)
        .pipe(template({ BACKEND : backend }))
        .pipe(rename('config.js'))
        .pipe(gulp.dest('./build/js'));
});
