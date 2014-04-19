'use strict';

module.exports = {
    /**
     * By default, we want the Live Reload to work for all tasks; this is
     * overridden in some tasks (like this file) where browser resources are
     * unaffected. It runs by default on port 35729.
     */
    options: {
        livereload: true
    },

    /**
     * When our source files change, we want to run most of our build tasks.
     */
    app: {
        files: [
            'application/**/*.{js,jsx}',
            'application/*.js'
        ],
        tasks: ['browserify:app'],
        options: {
            interrupt: true
        }
    },

    preproc : {
        files: [
            'application/_index.html'
        ],
        tasks: ['preprocess:development'],
        options: {
            interrupt: true
        }
    },

    sass: {
        files: [
            'application/scss/**'
        ],
        tasks: ['sass:dist'],
        options: {
            interrupt: true
        }
    }
};