/** @jsx React.DOM */
'use strict';

var flux        = require('./flux');
var Route       = require('react-router').Route;

var SiteLayout   = require('./ui/layouts/site');
var HomePage     = require('./ui/pages/home');
var LoginPage    = require('./ui/pages/login');
var NotFoundPage = require('./ui/pages/404');

var props = function(name, path, handler, props)
{
    props         = props || {};
    props.flux    = flux;
    props.handler = handler;
    props.path    = path;
    props.name    = name;

    return props;
};

module.exports = Route(
    {handler : SiteLayout, location : 'history', flux : flux},
    Route(props('home', '/', HomePage)),
    Route(props('login', '/login', LoginPage)),
    Route(props('404', '*', NotFoundPage))
);
