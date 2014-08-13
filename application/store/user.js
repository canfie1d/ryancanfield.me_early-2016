'use strict';

var constants = require('../constants');
var Fluxxor   = require('fluxxor');
var store     = require('store');

var UserStore = Fluxxor.createStore({
    initialize : function(tokenStore)
    {
        this.data = store.get('userData') || {};

        this.bindActions(
            constants.LOGIN_SUCCESSFUL, 'onLogin'
        );
    },

    onLogin : function(payload)
    {
        this.data = payload.userData;

        store.set('user', this.data);

        this.emit('change');
    }
});

module.exports = UserStore;
