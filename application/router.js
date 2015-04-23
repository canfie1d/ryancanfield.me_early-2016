'use strict';

var Router = require('react-router');

var routes = require('./routes');

module.exports = function (location) {
    if (typeof location === 'undefined') {
        location = Router.HistoryLocation;
    }

    return Router.create({
        routes   : routes,
        location : location
    });
};
