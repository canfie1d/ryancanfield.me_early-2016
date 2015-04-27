global.__BACKEND__     = process.env.BACKEND || '';
global.__ENVIRONMENT__ = process.env.APP_ENV || 'development';
global.localStorage    = require('localStorage');
global.navigator       = require('navigator');

var Express   = require('express');
var Intl      = require('intl');
var proxy     = require('express-http-proxy');
var useragent = require('express-useragent');

var config = require('../application/config');
var render = require('./render-generated');

var app = new Express();

if (__ENVIRONMENT__ !== 'production') {
    app.use(config.api.prefix, proxy('http://' + config.proxy.hostname));
}

app.use(useragent.express());

app.get(/^([^.]+)$/, render);

if (__ENVIRONMENT__ !== 'production') {
    app.use(Express.static(process.cwd() + '/build'));
}

app.listen(9090, 10, function () {
    console.log('Listening on localhost:9090');
});
