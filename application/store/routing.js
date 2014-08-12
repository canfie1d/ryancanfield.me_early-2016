'use strict';

var Fluxxor     = require('fluxxor');
var ReactRouter = require('react-router');
var Router      = ReactRouter.Router;

var RoutingStore = Fluxxor.createStore({
    actions: {
        'NAVIGATE' : 'navigate',
        'FORWARD'  : 'forward'
    },

    initialize: function()
    {
        this.bindActions(
            'NAVIGATE', this.navigate,
            'FORWARD', this.forward
        );
    },

    navigate: function(payload)
    {
        Router.transitionTo(payload.route, payload.params || {}, payload.query || {});
    },

    forward: function(payload)
    {
        Router.replaceWith(payload.route, payload.params || {}, payload.query || {});
    }
});

module.exports = RoutingStore;
