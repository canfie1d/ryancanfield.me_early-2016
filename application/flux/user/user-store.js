'use strict';

let constants = require('../constants');
let Fluxxor   = require('fluxxor');
let store     = require('store');

let UserStore = Fluxxor.createStore({
    initialize()
    {
        this.data  = store.get('user') || {};
        this.error = false;

        this.bindActions(
            constants.LOGIN_SUCCESSFUL, 'onLogin',
            constants.LOGOUT, 'onLogout',
            constants.REGISTRATION_FAILED, 'onRegistrationFailed'
        );
    },

    onLogin(payload)
    {
        this.data  = payload.userData;
        this.error = false;

        store.set('user', this.data);

        this.emit('change');
    },

    onLogout()
    {
        this.data  = {};
        this.error = false;

        store.remove('user');

        this.emit('change');
    },

    onRegistrationFailed()
    {
        this.error = true;

        this.emit('change');
    },

    fromObject(state)
    {
        this.data              = state.data;
        this.pending           = state.pending;
        this.error             = state.error;
        this.isNewlyEditedUser = state.isNewlyEditedUser;
    },

    toObject()
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
