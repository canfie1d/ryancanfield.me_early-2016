/* globals global, process, console */
'use strict';

global.__BACKEND__     = process.env.BACKEND;
global.__ENVIRONMENT__ = process.env.APP_ENV || 'development';
global.__HOSTNAME__    = process.env.HOST || 'localhost';

var path             = require('path');
var request          = require('request');
var WebpackDevServer = require('webpack-dev-server');
var webpack          = require('webpack');
var appConfig        = require('./application/config');
var config           = require('./webpack.config');
var proxy            = require('express-http-proxy');

var server = new WebpackDevServer(webpack(config), {
    contentBase : path.resolve(__dirname, 'build'),
    hot         : true,
    noInfo      : true
});

if (! appConfig.api.prefix) {
    throw new Error('API prefix not set in configuration');
}

if (! appConfig.proxy.hostname) {
    throw new Error('API proxy hostname not set in configuration');
}

server.use(appConfig.api.prefix, proxy('http://' + appConfig.proxy.hostname, {
        limit : '50mb'
}));

server.use(function (req, res, next) {
    var ext = path.extname(req.url);

    if ((ext === '' || ext === '.html') && req.url !== '/') {
        req.pipe(request('http://' + req.hostname + ':9000')).pipe(res);
    } else {
        next();
    }
});

server.listen(9000, function (err, result) {
    if (err) {
        console.log(err);
    }

    console.log('Listening at localhost:9000');
});
