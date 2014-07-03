'use strict';

var _         = require('underscore');
var AuthStore = require('synapse-common/store/auth');
var config    = require('config');

var UserStore = AuthStore.extend({
    config : config.api,

    constructor : function(tokenStore) {
        this.user       = false;
        this.tokenStore = tokenStore;

        this.tokenStore.on('change', _.bind(function() {
            this.fetch();
        }, this));
    },

    fetch : function() {
        var userId = this.tokenStore.getTokenData().user_id,
            path   = '/users/' + userId;

        if (! userId) {
            this.user = false;
            return;
        }

        this.apiRequest('GET', path, null, _.bind(function(err, resp) {
            if (err) {
                this.user = false;

                if (resp.statusCode === 401) {
                    this.tokenStore.refreshToken();
                }
            } else {
                this.user = resp;
                this.emit('change');
            }
        }, this));
    },

    getUser : function() {
        return this.user;
    }
});

module.exports = UserStore;
