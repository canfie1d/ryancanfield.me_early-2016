/* jshint node: true */
'use strict';

var gulp         = require('gulp'),
    gutil        = require('gulp-util'),
    sass         = require('gulp-sass'),
    minifyCss    = require('gulp-minify-css'),
    connect      = require('gulp-connect'),
    autoPrefixer = require('gulp-autoprefixer');

var isProduction = gutil.env.build === 'production',
    sourceComments,
    includePaths = [
        './bower_components/foundation/scss'
    ];

if (isProduction) {
    sourceComments = 'none';
} else if (process.platform === 'win32') {
    sourceComments = 'normal';
} else {
    sourceComments = 'map';
}

gulp.task('sass', function() {
    gulp.src('./application/ui/scss/app.scss')
        .pipe(sass({
            errLogToConsole : true,
            sourceComments  : sourceComments,
            outputStyle     : 'compressed',
            sourceMap       : 'sass',
            includePaths    : includePaths
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
