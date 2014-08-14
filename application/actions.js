'use strict';

var authenticationActions = require('./actions/authentication');
var constants = require('./constants');

module.exports = {
    auth : authenticationActions,
    navigate : function(route, params, query) {
        this.dispatch(
            constants.NAVIGATE,
            {
                route  : route,
                params : params,
                query  : query
            }
        );
    },
    forward : function(route, params, query) {
        this.dispatch(
            constants.FORWARD,
            {
                route  : route,
                params : params,
                query  : query
            }
        );
    }
};
