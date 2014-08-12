'use strict';

var HttpGateway = require('synapse-common/http/gateway');
var config      = require('config');
var qs          = require('querystring');

var OAuthClient = HttpGateway.extend({

    config : config.api,

    login : function(email, password)
    {
        return this.apiRequest.call(
            this,
            'POST',
            '/oauth/token',
            qs.stringify({
                username      : email,
                password      : password,
                grant_type    : 'password',
                client_id     : this.config.client_id,
                client_secret : this.config.client_secret
            })
        );
    },

    refresh : function(tokenData)
    {
        return this.apiRequest.call(
            this,
            'POST',
            '/oauth/token',
            qs.stringify({
                grant_type    : 'refresh_token',
                client_id     : this.config.client_id,
                refresh_token : tokenData.refresh_token
            })
        );
    },

    _getRequestOptions : function(method, path)
    {
        var config = this.getConfig();

        return {
            hostname : config.hostname,
            port     : config.port,
            method   : method,
            path     : path,
            headers  : {
                'Content-Type' : 'application/x-www-form-urlencoded'
            }
        };
    }
});

module.exports = new OAuthClient();
