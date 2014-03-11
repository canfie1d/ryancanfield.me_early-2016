define([
    'base/model'
], function(
    Model
) {
    'use strict';

    return Model.extend({
        oauthTokenUrl : 'http://project.vm/oauth/token',

        url : function()
        {
            return 'http://project.vm/user/'+this.get('id');
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
                success : _.partial(this.loginSuccess, success),
                failure : failure
            });
        },

        loginSuccess : function(success, token)
        {
            // Run the other callback
            success(_.toArray(arguments).slice(1));

            window.token = token;
            window.sessionStorage.setItem('token', JSON.stringify(token));
        }
    });
});