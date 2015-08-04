'use strict';

let constants = require('../constants');
let Fluxxor   = require('fluxxor');
let store     = require('store');

let TokenStore = Fluxxor.createStore({

    initialize()
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

    onLogin()
    {
        this.loading = true;

        this.emit('change');
    },

    onLoginSuccessful(payload)
    {
        this.token    = payload.tokenData;
        this.loggedIn = true;

        store.set('token', this.token);

        this.emit('change');
    },

    onLoginFailed()
    {
        this.loading = false;
        this.error   = true;

        this.emit('change');
    },

    onLogout()
    {
        store.remove('token');
        this.loggedIn = false;

        this.emit('change');
    },

    getTokenData()
    {
        return store.get('token');
    },

    fromObject(state)
    {
        this.loading  = state.loading;
        this.error    = state.error;
        this.loggedIn = state.loggedIn;
    },

    toObject()
    {
        return {
            loading  : this.loading,
            error    : this.error,
            loggedIn : this.loggedIn
        };
     }
});

module.exports = TokenStore;
