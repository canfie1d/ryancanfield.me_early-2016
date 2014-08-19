'use strict';

var gulp    = require('gulp'),
    concat  = require('gulp-concat'),
    connect = require('gulp-connect');

gulp.task('concat', function() {
    gulp.src([
            // Add file paths here to include in vendor header
            // This task is has to be added back into the gulpfile runlist for 'build'
        ])
        .pipe(concat('vendor-header.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(connect.reload());
});
