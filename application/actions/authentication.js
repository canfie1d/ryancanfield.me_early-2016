'use strict';

var constants   = require('../constants');
var oauthClient = require('../client/oauth.js');

module.exports = {
    login : function(username, password) {
        var flux = this;

        flux.dispatch(constants.LOGGING_IN);

        oauthClient.login(username, password)
            .then(function(tokenData) {
                flux.dispatch(constants.LOGIN_SUCCESSFUL, tokenData);
            })
            .fail(function() {
                flux.dispatch(constants.LOGIN_FAILED);
            });
    }
};
