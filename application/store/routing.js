'use strict';

var constants   = require('constants');
var Fluxxor     = require('fluxxor');
var ReactRouter = require('react-router');
var Router      = ReactRouter.Router;

var RoutingStore = Fluxxor.createStore({
    initialize: function()
    {
        this.bindActions(
            constants.NAVIGATE, 'navigate',
            constants.FORWARD, 'forward',
            constants.LOGOUT, 'onLogout'
        );
    },

    navigate: function(payload)
    {
        Router.transitionTo(payload.route, payload.params || {}, payload.query || {});
    },

    forward: function(payload)
    {
        Router.replaceWith(payload.route, payload.params || {}, payload.query || {});
    },

    onLogout : function()
    {
        Router.transitionTo('home');
    }
});

module.exports = RoutingStore;
