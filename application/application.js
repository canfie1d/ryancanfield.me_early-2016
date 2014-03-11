define([
    'underscore',
    'jquery',
    'backbone',
    'react',
    'cortex',
    'models/user',
    'lib/mediator',
    'templates/body'
], function(
    _,
    $,
    Backbone,
    React,
    Cortex,
    UserModel,
    mediator,
    Body
) {
    'use strict';

    function Application() {
        this.mediator = mediator;

        this.storage  = window.store;

        if ( ! this.storage.enabled) {
            throw "Storage not supported";
        }

        if ((token = this.storage.get('token')) !== undefined) {
            this.token = token;
        }

        var tokenCortex;

        this.start = function() {
            this.react = null;

            tokenCortex = new Cortex(token, _.bind(function(updatedToken) {
                this.react.setProps({ token : updatedToken });
            }, this));

            this.react = React.renderComponent(Body({
                token: tokenCortex
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
            if (! this.token) {
                return;
            }

            var user = new UserModel({id : this.token.user_id});
            user.fetch({
                success: _.bind(function() {
                    this.auth = user;

                    this.mediator.publish('!user:auth', true, user);
                }, this)
            });
        }
    }

    return Application;

});
