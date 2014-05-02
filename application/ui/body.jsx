/** @jsx React.DOM */
/* global window */
'use strict';

var _                    = require('underscore');
var React                = require('react');
var EventsMixin          = require('synapse-common').mixins.events;
var RouterMixin          = require('synapse-common').mixins.router;
var SiteLayoutComponent  = require('./components/layout/site');
var HomeModule           = require('./pages/home');
var LoginModule          = require('./pages/account/login');
var RegisterModule       = require('./pages/account/register');
var ReceiveTokenModule   = require('./pages/account/receive-token');
var ChangeEmailModule    = require('./pages/account/change-email');
var ChangePasswordModule = require('./pages/account/change-password');
var NotFoundComponent    = require('./pages/error/404');

module.exports = React.createClass({

    displayName : 'PageRoot',
    mixins      : [ RouterMixin, EventsMixin ],

    routes : {
        'home' : {
            route     : '',
            component : HomeModule,
            container : SiteLayoutComponent
        },

        'login' : {
            route     : 'login',
            component : LoginModule,
            container : SiteLayoutComponent
        },

        'register' : {
            route     : 'register',
            component : RegisterModule,
            container : SiteLayoutComponent
        },

        'receive-token' : {
            route     : 'receive-token',
            component : ReceiveTokenModule,
            container : SiteLayoutComponent
        },

        'account-change-email' : {
            route    : 'account/change-email',
            component: ChangeEmailModule,
            container: SiteLayoutComponent
        },

        'account-change-password' : {
            route    : 'account/change-password',
            component: ChangePasswordModule,
            container: SiteLayoutComponent
        },

        // This must always be registered last or it will catch everything
        '*unknown' : {
            route     : '*unknown',
            component : NotFoundComponent,
            container : SiteLayoutComponent
        }
    },

    getInitialState : function()
    {
        if (window.app.token) {
            return {
                loggedIn : true,
                loading  : true,
                user     : false
            };
        } else {
            return {
                loggedIn : false,
                user     : false
            };
        }
    },

    componentWillMount : function()
    {
        this.subscribe('!user:auth', _.bind(function(loggedIn, user) {
            this.setState({
                loggedIn : loggedIn,
                loading  : false,
                user     : user || false
            });
        }, this));

        window.app.loadUserFromToken();
    },

    render : function()
    {
        if (this.state.componentName !== null)
        {
            var component = this.state.componentName;

            if (this.state.loading) {
                return <div>LOADING!</div>;
            } else {
                return (
                    <SiteLayoutComponent
                        loggedIn={this.state.loggedIn}
                        user={this.state.user}>
                        <component
                            params={this.state.params}
                            loggedIn={this.state.loggedIn}
                            user={this.state.user}
                            queryParams={this.state.queryParams}
                        />
                    </SiteLayoutComponent>
                );
            }
        }
        else
        {
            return <div></div>;
        }
    }

});
