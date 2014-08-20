/* jshint node: true */
'use strict';

var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    path         = require('path'),
    sass         = require('gulp-sass'),
    minifyCss    = require('gulp-minify-css'),
    connect      = require('gulp-connect'),
    autoPrefixer = require('gulp-autoprefixer');

var isProduction = gutil.env.build === 'production',
    includePaths = [];

gulp.task('sass:legacy', function() {
    gulp.src('./application/ui/scss/legacy.scss')
        .on('data', function(file) {
            if (process.platform === 'win32') {
                file.path = path.relative('.', file.path);
                file.path = file.path.replace(/\\/g, '/');
            }
        })
        .pipe(sass({
            errLogToConsole : true,
            sourceComments : isProduction ? 'none' : 'map',
            sourceMap      : 'sass',
            outputStyle    : 'compressed',
            includePaths   : includePaths
        }))
        .pipe(autoPrefixer({
            cascade : true,
            to      : 'legacy.css',
            from    : './application/ui/scss'
        }))
        // production only because it breaks source maps
        .pipe(isProduction ? minifyCss({keepSpecialComments : '*'}) : gutil.noop())
        .pipe(gulp.dest('./build/css'))
        .pipe(connect.reload());
});


gulp.task('sass:app', function() {
    gulp.src('./application/ui/scss/app.scss')
        .on('data', function(file) {
            if (process.platform === 'win32') {
                file.path = path.relative('.', file.path);
                file.path = file.path.replace(/\\/g, '/');
            }
        })
        .pipe(sass({
            errLogToConsole : true,
            sourceComments : isProduction ? 'none' : 'none',
            sourceMap      : 'sass',
            outputStyle    : 'compressed',
            includePaths   : includePaths
        }))
        .pipe(autoPrefixer({
            cascade : true,
            to      : 'app.css',
            from    : './application/ui/scss'
        }))
        // production only because it breaks source maps
        .pipe(isProduction ? minifyCss({keepSpecialComments : '*'}) : gutil.noop())
        .pipe(gulp.dest('./build/css'))
        .pipe(connect.reload());
});

gulp.task('sass', [ 'sass:legacy', 'sass:app' ]);
