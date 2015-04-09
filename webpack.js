global.__BACKEND__     = process.env.BACKEND;
global.__ENVIRONMENT__ = process.env.APP_ENV || 'development';

var path             = require('path');
var proxy            = require('express-http-proxy');
var request          = require('request');
var WebpackDevServer = require('webpack-dev-server');
var webpack          = require('webpack');
var url              = require('url');
var appConfig        = require('./application/config');
var config           = require('./webpack.config');

var server = new WebpackDevServer(webpack(config), {
    contentBase : path.resolve(__dirname, 'build'),
    hot         : true,
    noInfo      : true
});

server.use('/api/', proxy('http://' + appConfig.api.url));

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
