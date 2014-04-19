/* global document */
'use strict';

var _         = require('underscore'),
    store     = require('store'),
    React     = require('react'),
    Cortex    = require('cortex'),
    UserModel = require('models/user'),
    Router    = require('lib/router'),
    mediator  = require('lib/mediator'),
    Body      = require('ui/body');

function Application() {
    this.mediator = mediator;

    this.storage  = store;

    if ( ! this.storage.enabled) {
        throw "Storage not supported";
    }

    var token;
    if ((token = this.storage.get('token')) !== undefined) {
        this.token = token;
    }

    var tokenCortex;

    this.start = function() {
        this.react  = null;
        this.router = new Router();

        tokenCortex = new Cortex(token, _.bind(function(updatedToken) {
            this.react.setProps({ token : updatedToken });
        }, this));

        React.initializeTouchEvents(true);
        this.react = React.renderComponent(Body({
            token  : tokenCortex,
            router : this.router
        }), document.body);
    };

    this.clearAuth = function() {
        this.token = null;
        this.storage.remove('token');

        this.mediator.publish('!user:auth', false, false);
    };

    this.setAuth = function(token, user) {
        this.mediator.publish('!user:auth', true, user);

        this.token = token;
        this.storage.set('token', token);
    };

    this.loadUserFromToken = function() {
        var user, success;

        if (! this.token) {
            return;
        }

        user = new UserModel({id : this.token.user_id});

        success = _.bind(function() {
            this.auth = user;

            this.mediator.publish('!user:auth', true, user);
        }, this);

        user.fetch({
            success : success,
            error   : _.bind(function(user, xhr) {
                if (xhr.status === 401) {
                    user.refreshToken(this.token.refresh_token, function() {
                        user.fetch({
                            success : success
                        });
                    });
                }
            }, this)
        });
    };
}

module.exports = Application;
