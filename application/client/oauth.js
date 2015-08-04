'use strict';

let config      = require('../config');
let HttpGateway = require('synapse-common/http/auth-gateway');
let qs          = require('querystring');
let store       = require('store');

let OAuthClient = HttpGateway.extend({

    config : config.api,

    login(email, password)
    {
        return this.apiRequest(
            'POST',
            config.api.oauth.token,
            qs.stringify({
                username      : email,
                password      : password,
                grant_type    : 'password',
                client_id     : this.config.client_id,
                client_secret : this.config.client_secret
            })
        );
    },

    logout()
    {
        let token = store.get('token') || {};

        return this.apiRequest(
            'POST',
            config.api.oauth.logout,
            {
                refresh_token : token.refresh_token
            }
        );
    },

    refresh()
    {
        let token = store.get('token') || {};

        return this.apiRequest(
            'POST',
            config.api.oauth.token,
            qs.stringify({
                grant_type    : 'refresh_token',
                client_id     : this.config.client_id,
                refresh_token : token.refresh_token
            })
        );
    },

    getRequestOptions(method, path)
    {
        let options;

        options = HttpGateway.prototype.getRequestOptions.call(this, method, path);

        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';

        return options;
    }
});

module.exports = new OAuthClient();
