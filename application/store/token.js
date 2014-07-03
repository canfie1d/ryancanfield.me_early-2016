'use strict';

var _         = require('underscore');
var HttpStore = require('synapse-common/store/http');
var store     = require('store');
var config    = require('config');
var qs        = require('querystring');
var http      = require('http');

var TokenStore = HttpStore.extend({

    clientId : '123',
    clientSecret : 'abc',

    constructor : function()
    {
        this.token  = {};
        this.config = config.api;
    },

    getTokenData : function() {
        var tokenData = store.get('token');
        if (tokenData) {
            return tokenData;
        }

        return false;
    },

    getAccessToken : function() {
        var tokenData = this.getTokenData();
        if (tokenData) {
            return this.getTokenData().access_token;
        }

        return false;
    },

    login : function(email, password)
    {
        this.beginSync();
        var options = this._getRequestOptions('POST', '/oauth/token');

        options.headers['Content-Type'] = 'application/x-www-form-urlencoded';

        var self = this;

        var req = http.request(options, function(response) {
            var responseText = '';

            response.on('data', function(chunk) {
                responseText += chunk;
            });

            response.on('end', function() {
                var data = JSON.parse(responseText);
                self.setToken(data);
                self.finishSync();
            });
        });

        req.on('error', function(e) {
            this.abortSync();
            self.emit('error', e);
        });

        req.write(qs.stringify({
            username      : email,
            password      : password,
            grant_type    : 'password',
            client_id     : this.clientId,
            client_secret : this.clientSecret
        }));

        req.end();
    },

    setToken : function(tokenData)
    {
        this.token = tokenData;
        store.set('token', tokenData);
        this.emit('change');
    },

    refreshToken : function(cb) {
        var tokenData = this.getTokenData();
        if (! tokenData) {
            return false;
        }

        this.apiRequest('POST', '/oauth/token', {
            grant_type    : 'refresh_token',
            client_id     : this.config.client_id,
            refresh_token : tokenData.refresh_token
        }, function(err, resp) {
            if (! err) {
                store.set('token');
            }

            if (_.isFunction(cb)) {
                cb(err, resp);
            }
        });
    }
});

module.exports = TokenStore;


// logout : function(success)
// {
//     var headers      = this.defaultHeaders();
//     var refreshToken = window.app.storage.get('token').refresh_token;

//     $.ajax({
//         url        : this.oauthLogoutUrl,
//         headers    : headers,
//         dataType   : 'json',
//         type       : 'POST',
//         data       : JSON.stringify({
//             refresh_token: refreshToken
//         }),
//         xhrFields: {
//            withCredentials: true
//         },
//         beforeSend : function(xhr) {
//             for (var header in headers) {
//                 xhr.setRequestHeader(header, headers[header]);
//             }
//         },
//         success    : function () {
//             window.app.clearAuth();

//             if (success) {
//                 success();
//             }
//         },
//         error      : function () {
//             window.app.clearAuth();

//             if (success) {
//                 success();
//             }
//         }
//     });
// },

// loginSuccess : function(success, token)
// {
//     // Run the other callback
//     success(_.toArray(arguments).slice(1));

//     window.app.setAuth(token, this);
// }
