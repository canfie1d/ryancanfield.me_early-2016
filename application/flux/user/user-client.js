'use strict';

let config      = require('../../config');
let HttpGateway = require('synapse-common/http/auth-gateway');
let store       = require('store');

let UserClient = HttpGateway.extend({

    config : config.api,

    getCurrentUser()
    {
        return this.apiRequest('GET', '/user');
    },

    createUser(userData)
    {
        return this.apiRequest('POST', '/users', userData);
    },

    setToken(tokenData)
    {
        this.token = tokenData;
    },

    getRequestOptions(method, path)
    {
        let options, token;

        options = HttpGateway.prototype.getRequestOptions.call(this, method, path);

        token = this.token || store.get('token');

        if (token) {
            options.headers.Authorization = 'Bearer' + ' ' + token.access_token;
        }

        return options;
    }
});

module.exports = new UserClient();
