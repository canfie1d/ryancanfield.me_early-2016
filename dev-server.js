global.__BACKEND__ = process.env.BACKEND;
global.__ENVIRONMENT__ = process.env.APP_ENV || 'development';
global.__HOSTNAME__ = process.env.HOST || 'localhost';

var path          = require('path');
var request       = require('request');
var webpack       = require('webpack');
var appConfig     = require('./application/config');
var webpackConfig = require('./webpack.config');
var proxy         = require('express-http-proxy');
var express       = require('express');
var url           = require('url');

var app = express();
var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    contentBase: path.resolve(__dirname, 'build'),
    hot: true,
    quiet: false,
    noInfo: true,
    lazy: false,
    stats: true,
}));

app.use(require('webpack-hot-middleware')(compiler));

if (!appConfig.api.prefix) {
    throw new Error('API prefix not set in configuration');
}

if (!appConfig.proxy.hostname) {
    throw new Error('API proxy hostname not set in configuration');
}

app.use(appConfig.api.prefix, proxy('http://' + appConfig.proxy.hostname, {
    limit: '50mb',
}));

app.use(function (req, res, next) {
    var urlPath = url.parse(req.url).pathname;
    var ext = path.extname(urlPath);

    if ((ext === '' || ext === '.html') && req.url !== '/') {
        req.pipe(request('http://' + req.hostname + ':9000')).pipe(res);
    } else {
        next();
    }
});

app.listen(9000, function (err, result) {
    if (err) {
        console.log(err);
        return null;
    }

    console.log('Listening at localhost:9000');
});
