'use strict';

var TokenStore   = require('./store/token');
var UserStore    = require('./store/user');
var RoutingStore = require('./store/routing');

var tokenStore, userStore;

tokenStore = new TokenStore();
userStore = new UserStore(tokenStore);

module.exports = {
    TokenStore   : tokenStore,
    UserStore    : userStore,
    RoutingStore : new RoutingStore()
};
