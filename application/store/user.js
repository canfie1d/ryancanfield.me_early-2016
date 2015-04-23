'use strict';

var constants = require('../constants');
var Fluxxor   = require('fluxxor');
var store     = require('store');

var UserStore = Fluxxor.createStore({
    initialize : function()
    {
        this.data = store.get('user') || {};
        this.error = false;

        this.bindActions(
            constants.LOGIN_SUCCESSFUL, 'onLogin',
            constants.LOGOUT, 'onLogout',
            constants.REGISTRATION_FAILED, 'onRegistrationFailed'
        );
    },

    onLogin : function(payload)
    {
        this.data = payload.userData;
        this.error = false;

        store.set('user', this.data);

        this.emit('change');
    },

    onLogout : function()
    {
        this.data = {};
        this.error = false;

        store.remove('user');

        this.emit('change');
    },

    onRegistrationFailed : function()
    {
        this.error = true;

        this.emit('change');
    },

    fromObject : function(state)
    {
        this.data              = state.data;
        this.pending           = state.pending;
        this.error             = state.error;
        this.isNewlyEditedUser = state.isNewlyEditedUser;
    },

    toObject : function()
    {
        return {
            data              : this.data,
            pending           : this.pending,
            error             : this.error,
            isNewlyEditedUser : this.isNewlyEditedUser
        };
    }
});

module.exports = UserStore;
