'use strict';

var authenticationActions = require('./actions/authentication');
var constants = require('./constants');

var oauthClient = require('./client/oauth');
var userClient = require('./client/user');

module.exports = {
    login : authenticationActions.login,
    logout : authenticationActions.logout,
    registerUser : function(email, password) {
        var flux = this;

        this.dispatch(constants.REGISTERING);

        userClient.createUser(
            {
                email    : email,
                password : password
            })
            .then(function(userData) {
                // User created, now log in
                oauthClient.login(email, password)
                    .then(function(tokenData) {
                        flux.dispatch(
                            constants.LOGIN_SUCCESSFUL,
                            {
                                tokenData : tokenData,
                                userData  : userData
                            }
                        );
                    })
                    .fail(function() {
                        flux.dispatch(constants.LOGIN_FAILED);
                    });
            })
            .fail(function() {
                flux.dispatch(constants.REGISTRATION_FAILED);
            });
    },
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
