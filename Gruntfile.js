/* jshint node: true */
/* global require, module */

module.exports = function ( grunt ) {
    'use strict';

    /**
     * Load required Grunt tasks. These are installed based on the versions listed
     * in `package.json` when you do `npm install` in this directory.
     */
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    /**
     * This is the configuration object Grunt uses to give each plugin its
     * instructions.
     */
    grunt.initConfig({

        projectName : 'PROJECT_NAME',
        distdir     : 'build',

        preprocess : require('./grunt-tasks/preprocess'),
        sass       : require('./grunt-tasks/sass'),
        clean      : [ '<%= distdir %>' ],
        copy       : require('./grunt-tasks/copy'),
        concat     : require('./grunt-tasks/concat'),
        browserify : require('./grunt-tasks/browserify'),
        connect    : require('./grunt-tasks/connect'),
        delta      : require('./grunt-tasks/delta')
    });

    /**
     * In order to make it safe to just compile or copy *only* what was changed,
     * we need to ensure we are starting from a clean, fresh build. So we rename
     * the `watch` task to `delta` (that's why the configuration var above is
     * `delta`) and then add a new task called `watch` that does a clean build
     * before watching for changes.
     */
    grunt.renameTask( 'watch', 'delta' );
    grunt.registerTask( 'watch', [ 'development', 'delta' ] );

    /**
     * The default task is to build.
     */
    grunt.registerTask( 'default', [ 'qa' ] );
    grunt.registerTask( 'development', [ 'build', 'preprocess:development' ] );
    grunt.registerTask( 'qa', [ 'build', 'preprocess:qa' ] );
    grunt.registerTask( 'production', [ 'build', 'preprocess:production' ] );
    grunt.registerTask( 'build', ['clean', 'concat', 'browserify:vendor', 'browserify:app', 'sass', 'copy'] );

    grunt.registerTask( 'js', [ 'browserify:vendor', 'browserify:app'] );

    /**
     * A task to build the project, without some of the slower processes. This is
     * used during development and testing and is part of the `watch`.
     */
    grunt.registerTask( 'quick-build', ['clean', 'jshint', 'concat', 'index', 'copy'] );
};
