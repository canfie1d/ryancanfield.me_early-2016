#!/usr/bin/env node

'use strict';

require('node-jsx').install({extension: '.jsx'});

var _                   = require('underscore'),
    Backbone            = require('backbone'),
    express             = require('express'),
    request             = require('request'),
    url                 = require('url'),
    Router              = require('synapse-common').lib.Router,
    routes              = require('./application/ui/routes'),
    SiteLayoutComponent = require('./application/ui/pages/layout/site'),
    React               = require('react/addons'),
    app                 = express();

var loggly = require('loggly'),
    logglyClient = loggly.createClient({
        token     : '@todo enter loggly token here',
        subdomain : '@todo enter loggly subdomain here',
        json      : true,
        tags      : ['renderer']
    });

var router = new Router();
require('synapse-common').lib.routedLink(React, router);

_.each(routes, function(data, name)
{
    var component = data.component,
        _route    = data.route,
        options   = data.options;

    options.useMediator = false;

    router.match(_route, name, component, options);
});

var handleAppRoute = function(route, params, options) {
    var component = route.target;

    return React.renderComponentToStaticMarkup(SiteLayoutComponent({
            routeData         : { route: route, params: params },
            disableTallHeader : false
        }, component({
            params: params
        }))
    );
};

// Static assets
app.get(/.*\.(css|js|png|svg|jpg|gif|woff|ttf|ico)/, function(req, res) {
    console.warn('serving static asset (this should not be happening)');
    var file = url.format({
        protocol : 'http',
        hostname : '127.0.0.1',
        port     : 9000,
        pathname : req.originalUrl
    });

    request(file).pipe(res);
});

// Routes
app.all('*', function(req, res) {
    var handlers = Backbone.history.handlers,
        url = req.url.slice(1);

    var handler = _.find(handlers, function(test) {
        if (test.route.test(url)) {
            return true;
        }
    });

    var routeArgs    = {},
        bodyHtml     = '',
        responseCode = 200;

    try {
        routeArgs = handler.callback(url);
        if (routeArgs[2].name === '*unknown') {
            responseCode = 404;
        }
        bodyHtml = handleAppRoute.apply(null, routeArgs);
    } catch (e) {
        var logData = {
            request : {
                url     : req.url,
                method  : req.method,
                headers : req.headers,
                ip      : req.ip
            },
            error : {
                message : e.message,
                stack   : e.stack
            }
        };

        logglyClient.log(logData);
    }

    var title = '@todo change the default page title';
    var meta  = '';
    if (routeArgs[2]) {
        if (routeArgs[2].title) {
            // Set the title, if we have one
            if (_.isFunction(routeArgs[2].title)) {
                // routeArgs[2] = params
                title = routeArgs[2].title(routeArgs[1]);
            } else if (_.isString(routeArgs[2].title)) {
                title = routeArgs[2].title;
            }
        }

        if (routeArgs[2].meta) {
            meta = '';

            var metaData = routeArgs[2].meta;
            if (_.isFunction(metaData)) {
                metaData = metaData(routeArgs[1]);
            }

            _.each(metaData, function(tag) {
                meta += '<meta ';
                _.each(tag, function(value, name) {
                    meta += name + '="'+value+'" ';
                });
                meta += ' />';
            });
        }
    }

    var responseHtml = '<!doctype html>' +
        '<!--[if IE 9]>    <html class="no-js lt-ie10" lang="en"> <![endif]-->' +
        '<!--[if gt IE 9]><!--> <html class="no-js" lang="en"> <!--<![endif]-->' +
        '<head>' +
        '<meta charset="utf-8">' +
        '<meta name="viewport" content="width=device-width, initial-scale=1.0, minimal-ui">' +
        '<meta name="msapplication-config" content="none" />' +
        meta +
        '<meta name="og:image" content="@todo enter image to use for facebook">' +
        '<meta name="og:site_name" content="@todo enter site name for facebook">' +
        '<title>'+title+'</title>' +
        '<link rel="icon" type="image/png" href="/images/favicons/favicon.png?v1">' +
        '<link rel="apple-touch-icon-precomposed" href="/images/favicons/apple-touch-iphone.png" />' +
        '<link rel="apple-touch-icon-precomposed" sizes="72x72" href="/images/favicons/apple-touch-ipad.png" />' +
        '<link rel="apple-touch-icon-precomposed" sizes="114x114" href="/images/favicons/apple-touch-iphone4.png" />' +
        '<link rel="apple-touch-icon-precomposed" sizes="144x144" href="/images/favicons/apple-touch-ipad-retina.png" />' +
        '<link rel="stylesheet" href="/css/app.css">' +
        '<script src="/js/vendor-header.js"></script>' +
        '</head><body>' + bodyHtml +
        '<script src="/js/vendor.js"></script><script src="/js/app.js"></script>' +
        '</body></html>';

    res.status(responseCode);
    res.write(responseHtml);
    res.end();
});

app.listen(8081);
