module.exports = function(config) {
    config.set({

    basePath : '',

    frameworks : ['mocha', 'sinon-chai'],

    files : [
        // need to figure out how to get webpack to take a glob w/o duplicating
        // stuff everywhere
        '__tests__/tests.js'
    ],

    exclude : [],

    preprocessors : {
        '__tests__/tests.js': ['webpack', 'sourcemap']
    },

    webpack: {
        cache  : true,
        module : {
            loaders : [
                {
                    test   : /\.jsx$/,
                    loader : 'jsx?insertPragma=React.DOM'
                }
            ]
        },
        resolve : {
            extensions : ['', '.js', '.json', '.jsx', '.webpack.js', '.web.js']
        }
    },

    webpackServer : {
        stats : {
            colors : true
        }
    },

    reporters : ['progress'],

    port : 9876,

    colors : true,

    logLevel : config.LOG_INFO,

    autoWatch : true,

    browsers : ['Chrome', 'Firefox'],

    captureTimeout : 60000,

    singleRun : false,

    plugins: [
            require('karma-mocha'),
            require('karma-chrome-launcher'),
            require('karma-firefox-launcher'),
            require('karma-phantomjs-launcher'),
            require('karma-sinon-chai'),
            require('karma-sourcemap-loader'),
            require('karma-webpack')
        ]
    });
};