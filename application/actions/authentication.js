'use strict';

var oauthClient = require('../client/oauth.js');

module.exports = {
    login : function(username, password) {
        var flux = this;

        flux.dispatch('LOGIN');

        oauthClient.login(username, password)
            .then(function(tokenData) {
                flux.dispatch('LOGIN_SUCCESSFUL', tokenData);
            })
            .fail(function() {
                flux.dispatch('LOGIN_FAILED');
            });
    }
};
