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
        initialize : function()
        {
            _.extend(Backbone.Model.prototype, SyncMachine);

            Backbone.Model.prototype.initialize.apply(this, arguments);
        },

        sync : function(method, model, options)
        {
            var authToken = window.authToken;

            if (authToken)
            {
                options.headers = options.headers || {};

                _.extend(options.headers, {
                    Authorization: 'Bearer '+authToken
                });
            }

            return Backbone.Model.prototype.sync.call(this, method, model, options);
        }
    });
});