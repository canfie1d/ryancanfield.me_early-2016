global.__BACKEND__     = process.env.BACKEND;
global.__ENVIRONMENT__ = process.env.APP_ENV || 'development';
global.__HOSTNAME__    = process.env.HOST || 'localhost';

var path      = require('path');
var request   = require('request');
var webpack   = require('webpack');
var appConfig = require('./application/config');
var config    = require('./webpack.config');
var proxy     = require('express-http-proxy');
var express   = require('express');

var app           = express();
var appCompiler   = webpack(config[0]);
var mediaCompiler = webpack(config[1]);

app.use(require('webpack-dev-middleware')(appCompiler, {
    contentBase : path.resolve(__dirname, 'build'),
    noInfo: true,
    publicPath: '/'
}));

app.use(require('webpack-hot-middleware')(appCompiler));

if (! appConfig.api.prefix) {
    throw new Error('API prefix not set in configuration');
}

if (! appConfig.proxy.hostname) {
    throw new Error('API proxy hostname not set in configuration');
}

app.use(appConfig.api.prefix, proxy('http://' + appConfig.proxy.hostname, {
        limit : '50mb'
}));

app.listen(9000, function (err, result) {
    if (err) {
        console.log(err);
        return null;
    }

    console.log('Listening at localhost:9000');
});
