'use strict';

var constants = require('../constants');
var store     = require('store');
var Fluxxor   = require('fluxxor');

var TokenStore = Fluxxor.createStore({

    initialize : function()
    {
        this.loading  = false;
        this.error    = false;
        this.loggedIn = !! store.get('token');

        this.bindActions(
            constants.LOGGING_IN, 'onLogin',
            constants.LOGIN_SUCCESSFUL, 'onLoginSuccessful',
            constants.LOGIN_FAILED, 'onLoginFailed',
            constants.LOGOUT, 'onLogout'
        );
    },

    onLogin : function()
    {
        this.loading = true;

        this.emit('change');
    },

    onLoginSuccessful : function(tokenData)
    {
        this.token    = tokenData;
        this.loggedIn = true;
        store.set('token', tokenData);

        this.emit('change');
    },

    onLoginFailed : function()
    {
        this.loading = false;
        this.error   = true;

        this.emit('change');
    },

    onLogout : function()
    {
        store.remove('token');
        this.loggedIn = false;

        this.emit('change');
    },

    clearToken : function()
    {
        this.setToken({});
    }
});

module.exports = TokenStore;
