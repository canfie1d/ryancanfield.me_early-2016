/* global requirejs */
requirejs.config({
    paths: {
        backbone                 : '../bower_components/backbone/backbone',
        underscore               : '../bower_components/underscore/underscore',
        'backbone-validation'    : '../bower_components/backbone.validation/dist/backbone-validation-amd',
        react                    : '../bower_components/react/react-with-addons',
        'react.backbone'         : '../bower_components/react.backbone/react.backbone',
        cortex                   : '../bower_components/cortexjs/build/cortex'
    },
    shim: {
        backbone : {
            deps    : ['underscore'],
            exports : 'Backbone'
        },
        'backbone-validation' : {
            deps : ['backbone']
        },
        underscore : {
            exports : '_'
        },
        cortex : {
            exports: 'Cortex'
        }
    }
});