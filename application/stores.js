'use strict';

var TokenStore   = require('./store/token');
var UserStore    = require('./store/user');
var RoutingStore = require('./store/routing');

module.exports = {
    TokenStore   : new TokenStore(),
    UserStore    : new UserStore(),
    RoutingStore : new RoutingStore()
};
