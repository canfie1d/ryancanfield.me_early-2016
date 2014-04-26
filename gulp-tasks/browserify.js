/* jshint node: true */
'use strict';

var gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    browserify = require('browserify'),
    reactify   = require('reactify'),
    envify     = require('envify/custom'),
    source     = require('vinyl-source-stream'),
    streamify  = require('gulp-streamify'),
    connect    = require('gulp-connect'),
    uglify     = require('gulp-uglify');

gulp.task('browserify:app', function() {
    return browserify({
            entries: ['./application/bootstrap.js'],
            extensions: ['.js', '.jsx']
        })
        .external('jquery')
        .external('underscore')
        .external('backbone')
        .external('react')
        .external('cortexjs')
        .external('store')
        .external('./bower_components/foundation/js/foundation.js')
        // Browsers will will never actually require jsdom, so externalize it
        .external('jsdom')
        .transform(reactify)
        // Generate source maps
        .bundle({debug: (gutil.env.build !== 'production')})
        // Turn it into a gulp stream with source, and name it
        .pipe(source('app.js'))
        // Uglify the code
        .pipe(gutil.env.build === 'production' ? streamify(uglify()) : gutil.noop())
        // Tell gulp to put this in ./build/js/app.js
        .pipe(gulp.dest('./build/js'))
        .pipe(connect.reload());
});

gulp.task('browserify:vendor', function() {
    return browserify()
        .require('./node_modules/jquery/dist/jquery.js', { expose : 'jquery' })
        .require('./node_modules/underscore/underscore.js', { expose : 'underscore' })
        .require('./node_modules/backbone/backbone.js', { expose : 'backbone' })
        .require('./node_modules/react/addons.js', { expose : 'react' })
        .require('./node_modules/cortexjs/src/cortex.js', { expose : 'cortexjs' })
        .require('./node_modules/store/store.js', { expose : 'store' })
        .require('./bower_components/foundation/js/foundation.js', { expose : 'foundation' })
        .transform('browserify-shim')
        .transform(envify({
            NODE_ENV: (gutil.env.build === 'production') ? 'production' : 'development'
        }))
        .bundle({debug: true})
        .pipe(source('vendor.js'))
        .pipe(gutil.env.build === 'production' ? streamify(uglify()) : gutil.noop())
        .pipe(gulp.dest('./build/js'))
        .pipe(connect.reload());
});