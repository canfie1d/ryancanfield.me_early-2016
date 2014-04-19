/* global window */
'use strict';

var _        = require('underscore');
var $        = require('jquery');
var Model    = require('base/model');

module.exports = Model.extend({
    oauthTokenUrl  : 'http://project.vm/oauth/token',
    oauthLogoutUrl : 'http://project.vm/oauth/logout',

    url : function()
    {
        var url = 'http://project.vm/users';

        if (this.get('id')) {
            url += '/'+this.get('id');
        }

        return url;
    },

    login : function(success, failure)
    {
        $.ajax({
            url      : this.oauthTokenUrl,
            dataType : 'json',
            type     : 'POST',
            data     : {
                username   : this.get('email'),
                password   : this.get('password'),
                grant_type : 'password',
                client_id  : '123'
            },
            xhrFields: {
               withCredentials: true
            },
            success : _.bind(this.loginSuccess, this, success),
            failure : failure
        });
    },

    refreshToken : function(token, success, failure)
    {
        $.ajax({
            url      : this.oauthTokenUrl,
            dataType : 'json',
            type     : 'POST',
            data     : {
                grant_type    : 'refresh_token',
                client_id     : '123',
                refresh_token : token
            },
            xhrFields : {
                withCredentials: true
            },
            success : _.bind(this.loginSuccess, this, success),
            failure : failure
        });
    },

    logout : function(success)
    {
        var headers      = this.defaultHeaders();
        var refreshToken = window.app.storage.get('token').refresh_token;

        $.ajax({
            url        : this.oauthLogoutUrl,
            headers    : headers,
            dataType   : 'json',
            type       : 'POST',
            data       : JSON.stringify({
                refresh_token: refreshToken
            }),
            xhrFields: {
               withCredentials: true
            },
            beforeSend : function(xhr) {
                for (var header in headers) {
                    xhr.setRequestHeader(header, headers[header]);
                }
            },
            success    : function () {
                window.app.clearAuth();

                if (success) {
                    success();
                }
            },
            error      : function () {
                window.app.clearAuth();

                if (success) {
                    success();
                }
            }
        });
    },

    loginSuccess : function(success, token)
    {
        // Run the other callback
        success(_.toArray(arguments).slice(1));

        window.app.setAuth(token, this);
    }
});
