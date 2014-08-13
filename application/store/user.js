'use strict';

var constants = require('../constants');
var Fluxxor   = require('fluxxor');
var store     = require('store');

var UserStore = Fluxxor.createStore({
    initialize : function()
    {
        this.data = store.get('user') || {};

        this.bindActions(
            constants.LOGIN_SUCCESSFUL, 'onLogin',
            constants.LOGOUT, 'onLogout'
        );
    },

    onLogin : function(payload)
    {
        this.data = payload.userData;

        store.set('user', this.data);

        this.emit('change');
    },

    onLogout : function()
    {
        this.data = {};

        store.remove('user');

        this.emit('change');
    }
});

module.exports = UserStore;
