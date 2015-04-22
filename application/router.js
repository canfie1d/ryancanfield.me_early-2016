'use strict';

var Router = require('react-router');

var routes = require('./routes');

module.exports = function (location, res) {
    if (typeof location === 'undefined') {
        location = Router.HistoryLocation;
    }

    var onAbort = res ? function (abortReason) {
        if (abortReason.constructor.name === 'Redirect') {
            return res.redirect(302, this.makePath(abortReason.to, abortReason.params, abortReason.query));
        }
    } : null;

    return Router.create({
        routes   : routes,
        location : location,
        onAbort  : onAbort
    });
};
