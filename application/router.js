'use strict';

let Router = require('react-router');
let routes = require('./routes');

module.exports = function(location, res) {
    if (typeof location === 'undefined') {
        location = Router.HistoryLocation;
    }

    let onAbort = res ? function(abortReason) {
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
