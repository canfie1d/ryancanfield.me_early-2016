'use strict';

var gulp    = require('gulp');
var concat  = require('gulp-concat');
var connect = require('gulp-connect');

gulp.task('concat', function() {
    return gulp.src([
            // Add file paths here to include in vendor header.
            // This task is has to be added back into the gulpfile runlist for 'build'
            // and the vendor-header line in index.js needs to be uncommented
        ])
        .pipe(concat('vendor-header.js'))
        .pipe(gulp.dest('./build/js'))
        .pipe(connect.reload());
});
