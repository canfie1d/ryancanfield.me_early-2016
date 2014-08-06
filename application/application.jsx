/* global window */
'use strict';

var _           = require('underscore');
var React       = require('react');
var dispatcher  = require('synapse-common/lib/dispatcher');

var ReactRouter = require('react-router');
var Router      = ReactRouter.Router;
var Route       = ReactRouter.Route;
var Routes      = ReactRouter.Routes;

var TokenStore  = require('./store/token');
var UserStore   = require('./store/user');

var SiteLayout   = require('./ui/layouts/site');
var HomePage     = require('./ui/pages/home');
var LoginPage    = require('./ui/pages/login');
var NotFoundPage = require('./ui/pages/404');

function Application() {
    this.dispatcher = dispatcher;
    this.router     = Router;

    this.tokenStore = new TokenStore();
    this.userStore  = new UserStore(this.tokenStore);

    this.stores = {
        token : this.tokenStore,
        user  : this.userStore
    };
}

Application.prototype.start = function() {
    window.React = React;
    React.initializeTouchEvents(true);

    dispatcher.on('navigate', function() {
        Router.transitionTo.apply(Router, arguments);
    });

    dispatcher.on('forward', function(route, params) {
        ReactRouter.replaceWith(route, params || {});
    });

    dispatcher.on('token:update', _.bind(function(tokenData) {
        this.tokenStore.setToken(tokenData);
        this.userStore.fetch();
    }, this));

    dispatcher.on('token:login', _.bind(this.tokenStore.login, this.tokenStore));

    this.userStore.on('change', _.bind(function() {
        dispatcher.emit('auth:login', this.userStore.getUser());
    }, this));

    if (this.tokenStore.getTokenData()) {
        this.userStore.fetch();
    }

    this.routes = (
        <Routes>
            <Route name='home'
                   path='/'
                   handler={HomePage}
                   stores={this.stores} />
            <Route name='login'
                   path='/login'
                   handler={LoginPage}
                   stores={this.stores} />
            <Route path='*'
                   handler={NotFoundPage} />
        </Routes>
    );

    this.react = React.renderComponent(this.routes, window.document.body);
};

module.exports = Application;
