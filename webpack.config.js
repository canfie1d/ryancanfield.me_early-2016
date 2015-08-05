/* globals process, __dirname */
'use strict';

var __HOSTNAME__ = process.env.HOST ? process.env.HOST : 'localhost';

var autoprefixer = require('autoprefixer-core');
var Webpack      = require('webpack');
var WebpackError = require('webpack-error-notification');
var path         = require('path');

var environment = (process.env.APP_ENV || 'development');
var npmPath     = path.resolve(__dirname, 'node_modules');
var config      = {
    devtools : [],
    entries  : {
        app   : ['./application/bootstrap.js'],
        media : ['./application/media.js']
    },
    plugins  : [
        new Webpack.DefinePlugin({
            __BACKEND__     : process.env.BACKEND ? '\'' + process.env.BACKEND + '\'' : undefined,
            __ENVIRONMENT__ : '\'' + environment + '\'',
            __HOSTNAME__    : '\'' + __HOSTNAME__ + '\'',
            "process.env"   : {
                NODE_ENV : '\'' + environment + '\''
            }
        })
    ],
    reactLoaders : ['babel'],
    sassOptions  : (
        '?outputStyle=' + (environment === 'production' ? 'compressed' : 'nested') +
        '&includePaths[]=' + npmPath
    )
};

if (environment !== 'production') {
    config.devtools = '#inline-source-map';
    config.entries.app.unshift(
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://' + __HOSTNAME__ + ':9000'
    );
    config.entries.media.unshift(
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://' + __HOSTNAME__ + ':9000'
    );

    config.reactLoaders.unshift('react-hot');

    config.plugins.push(new Webpack.HotModuleReplacementPlugin());

    if (process.platform !== 'win32') {
        config.plugins.push(new WebpackError(process.platform));
    }
}

module.exports = [
    {
        name   : 'app bundle',
        entry  : config.entries.app,
        output : {
            filename   : 'app.js',
            path       : path.resolve(__dirname, 'build'),
            publicPath : '/'
        },
        module : {
            preLoaders : [
                {
                    test    : /\.js$/,
                    loader  : 'jshint-loader',
                    exclude : npmPath
                },
                {
                    test    : /\.jsx$/,
                    loader  : 'jsxhint-loader',
                    exclude : npmPath
                }
            ],
            loaders : [
                {
                    test   : /\.(eot|ico|ttf|woff|woff2|gif|jpe?g|png|svg)$/,
                    loader : 'file-loader'
                },
                {
                    test    : /\.jsx?$/,
                    loaders : config.reactLoaders,
                    exclude : npmPath
                },
                {
                    test   : /\.json$/,
                    loader : 'json-loader'
                },
                {
                    test   : /\.scss$/,
                    loader : 'style!css!postcss!sass' + config.sassOptions
                }
            ]
        },
        plugins : config.plugins,
        postcss : function() {
            return [autoprefixer];
        },
        resolve : {
            extensions : ['', '.css', '.js', '.json', '.jsx', '.scss', '.webpack.js', '.web.js']
        },
        devtool : config.devtools,
        jshint  : {
            esnext       : true,
            globalstrict : true,
            globals      : {
                __BACKEND__     : true,
                __ENVIRONMENT__ : true,
                __HOSTNAME__    : true,
                console         : true,
                window          : true,
                document        : true,
                setTimeout      : true
            }
        }
    },
    {
        name   : 'media bundle',
        entry  : config.entries.media,
        output : {
            filename   : 'media.js',
            path       : path.resolve(__dirname, 'build'),
            publicPath : '/'
        },
        module : {
            loaders : [
                {
                    test   : /\.(eot|ico|ttf|woff|woff2|gif|jpe?g|png|svg)$/,
                    loader : 'file-loader'
                },
                {
                    test    : /\.jsx?$/,
                    loaders : config.reactLoaders,
                    exclude : npmPath
                },
                {
                    test   : /\.scss$/,
                    loader : 'style!css!postcss!sass' + config.sassOptions
                }
            ]
        },
        plugins : config.plugins,
        postcss : function() {
            return [autoprefixer];
        },
        resolve : {
            extensions : ['', '.css', '.js', '.scss', '.webpack.js', '.web.js']
        },
        devtool : config.devtools
    },
    {
        name   : 'legacy bundle',
        entry  : './application/legacy.js',
        output : {
            filename : 'legacy.js',
            path     : path.resolve(__dirname, 'build')
        },
        module : {
            preLoaders : [
                {
                    test    : /\.js$/,
                    loader  : 'jshint-loader',
                    exclude : npmPath
                }
            ]
        },
        jshint  : {
            esnext       : true,
            globalstrict : true,
            globals      : {
                __BACKEND__     : true,
                __ENVIRONMENT__ : true,
                __HOSTNAME__    : true,
                console         : true,
                window          : true,
                document        : true,
                setTimeout      : true
            }
        }
    }
];
