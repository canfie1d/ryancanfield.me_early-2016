'use strict';

var authenticationActions = require('./actions/authentication');

module.exports = {
    login : authenticationActions.login,
    navigate : function(route, params, query) {
        this.dispatch('NAVIGATE', arguments);
    },
    forward : function(route, params, query) {
        this.dispatch('FORWARD', arguments);
    }
};
