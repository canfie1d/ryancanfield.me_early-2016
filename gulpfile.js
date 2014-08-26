/* jshint node: true */
'use strict';

var gulp   = require('gulp');
var rimraf = require('rimraf');

// Require all our tasks
require('./gulp-tasks/browserify');
require('./gulp-tasks/concat');
require('./gulp-tasks/connect');
require('./gulp-tasks/media');
require('./gulp-tasks/preprocess');
require('./gulp-tasks/sass');

gulp.task('default', ['build', 'connect:app']);

// Task that builds our entire application
gulp.task('build', ['preprocess:app', 'media', 'sass', 'browserify:app']);

// Development mode (runs a web server and watches)
gulp.task('watch', ['build', 'connect:app', 'delta:app']);

// Run tests
gulp.task('test', ['preprocess:test', 'browserify:test', 'connect:test', 'delta:test']);

// Clean up the build dirs
gulp.task('clean', ['clean:app', 'clean:test']);

// Watch definitions
gulp.task('delta:app', function() {
    gulp.watch(['./application/ui/scss/**/*.scss'], ['sass']);
    gulp.watch(['./application/**/*.html'], ['preprocess:app']);
    gulp.watch(['./media/**/*.*'], ['media']);
});

gulp.task('delta:test', function() {
    gulp.watch(['./__karma__/index.html'], ['preprocess:test']);
});

// Clean definitions
gulp.task('clean:app', function(cb) {
    rimraf('./build', cb);
});

gulp.task('clean:test', function(cb) {
    rimraf('./test', cb);
});
