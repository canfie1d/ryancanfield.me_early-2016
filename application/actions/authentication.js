'use strict';

var constants   = require('../constants');
var oauthClient = require('../client/oauth');
var userClient  = require('../client/user');

module.exports = {
    login : function(username, password)
    {
        var flux = this;

        flux.dispatch(constants.LOGGING_IN);

        oauthClient.login(username, password)
            .then(function(tokenData) {
                // Authenticated, but still need user data
                userClient.setToken(tokenData);
                userClient.getCurrentUser()
                    .then(function(userData) {
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
                flux.dispatch(constants.LOGIN_FAILED);
            });
    },

    logout : function()
    {
        // Assume the logout worked, since it doesn't make a difference to the user
        oauthClient.logout();

        this.dispatch(constants.LOGOUT);
    }
};
