define([
    'base/model',
    'lib/mediator'
], function(
    Model,
    mediator
) {
    'use strict';

    return Model.extend({
        oauthTokenUrl : 'http://project.vm/oauth/token',

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
                success : _.bind(this.loginSuccess, this, success),
                failure : failure
            });
        },

        logout : function(success)
        {
            window.app.clearAuth();

            if (success) {
                success();
            }
        },

        loginSuccess : function(success, token)
        {
            // Run the other callback
            success(_.toArray(arguments).slice(1));

            window.app.setAuth(token, this);
        }
    });
});
