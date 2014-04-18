define([
    'underscore',
    'backbone',
    'lib/sync-machine'
], function(
    _,
    Backbone,
    SyncMachine
) {
    'use strict';

    return Backbone.Model.extend({
        initialize : function(attributes, options)
        {
            _.extend(Backbone.Model.prototype, SyncMachine);

            Backbone.Model.prototype.initialize.apply(this, arguments);
            
            this.options = options || {};
        },

        sync : function(method, model, options)
        {
            var token = window.token;

            options.headers = options.headers || {};

            _.extend(options.headers, this.defaultHeaders());

            return Backbone.Model.prototype.sync.call(this, method, model, options);
        },

        defaultHeaders : function()
        {
            var token = window.app.storage.get('token');
            var headers;

            headers = {
                Accept         : 'application/json',
                'Content-Type' : 'application/json'
            };

            if (token)
            {
                headers = _.extend(headers, {
                    Authorization: 'Bearer '+token.access_token
                });
            }

            return headers;
        }
    });
});
