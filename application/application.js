/* global document */
'use strict';

var React      = require('react');
var dispatcher = require('synapse-common/lib/dispatcher');
var Main       = require('./ui/main');
var TokenStore = require('./store/token');
var UserStore  = require('./store/user');

function Application() {
    this.dispatcher = dispatcher;

    this.start = function() {
        React.initializeTouchEvents(true);

        var tokenStore = new TokenStore(),
            userStore  = new UserStore(tokenStore);

        this.react = React.renderComponent(Main({
            stores : {
                token  : tokenStore,
                user   : userStore
            }
        }), document.body);
    };
}

module.exports = Application;
