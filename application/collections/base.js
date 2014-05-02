/* global window */
'use strict';

var _           = require('underscore');
var Backbone    = require('backbone');
var SyncMachine = require('synapse-common').lib.SyncMachine;

module.exports = Backbone.Collection.extend({
    initialize : function(models, options)
    {
        _.extend(Backbone.Collection.prototype, SyncMachine);

        Backbone.Collection.prototype.initialize.apply(this, arguments);

        this.options = options || {};
    },

    sync : function(method, model, options)
    {
        options.headers = options.headers || {};

        _.extend(options.headers, this.defaultHeaders());

        return Backbone.Collection.prototype.sync.call(this, method, model, options);
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
