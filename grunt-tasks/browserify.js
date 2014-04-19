'use strict';

module.exports = {
    options: {
        debug: true
    },
    vendor: {
        src: [],
        dest: '<%= distdir %>/js/vendor.js',
        options: {
            bundleOptions : {
                debug : true
            },
            transform : ['browserify-shim'],
            alias     : [
                'react:react',
                'underscore:underscore',
                'jquery:jquery',
                'backbone:Backbone',
                'react:react',
                'cortexjs:cortex',
                'store:store',
                'backbone-validation:backbone-validation',
                'jquery-waypoints/waypoints:waypoints'
            ],
            shim: {
                jquery: {
                    exports: '$'
                }
            }
        }
    },
    app : {
        options: {
            bundleOptions : {
                debug : true
            },
            transform  : [ 'reactify' ],
            extensions : ['.jsx'],
            plugin    : [
                [
                    'mapify',
                    { entries: [
                        {
                            cwd : 'application/ui',
                            pattern: '**/*.{js,jsx}',
                            expose: 'ui'
                        },
                        {
                            cwd : 'application/models',
                            pattern: '**/*.{js,jsx}',
                            expose: 'models'
                        },
                        {
                            cwd : 'application/lib',
                            pattern: '**/*.{js,jsx}',
                            expose: 'lib'
                        },
                        {
                            cwd : 'application/collections',
                            pattern: '**/*.{js,jsx}',
                            expose: 'collections'
                        },
                        {
                            cwd : 'application/base',
                            pattern: '**/*.{js,jsx}',
                            expose: 'base'
                        }
                    ]}
                ]
            ],
            external   : [
                'underscore',
                'jquery',
                'backbone',
                'react',
                'cortex',
                'store',
                'backbone-validation',
                'waypoints'
            ]
        },
        src  : ['application/**/*.{js,jsx}'],
        dest : '<%= distdir %>/js/app.js'
    }
};