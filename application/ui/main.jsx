/** @jsx React.DOM */
'use strict';

// Libraries
var _           = require('underscore');
var React       = require('react');
var dispatcher  = require('synapse-common/lib/dispatcher');
var ReactRouter = require('react-nested-router');
var Router      = ReactRouter.Router;
var Route       = ReactRouter.Route;

// Mixins and components
var Router              = require('react-router-component');
var Locations           = Router.Locations;
var Location            = Router.Location;
var NotFound            = Router.NotFound;
var StoreWatchMixin     = require('synapse-common/ui/mixins/store-watch');

// Pages
var SiteLayoutComponent = require('./layouts/site');
var HomeModule          = require('./pages/home');
var LoginPage           = require('./pages/login');
var NotFoundPage        = require('./pages/404');

module.exports = React.createClass({

    displayName : 'PageRoot',

    mixins : [ StoreWatchMixin ],

    getInitialState : function()
    {
        return this.getStateFromStores();
    },

    getStateFromStores : function()
    {
        return {
            token  : this.props.stores.token.getTokenData(),
            user   : this.props.stores.user.getUser()
        };
    },

    componentWillMount : function()
    {
        if (this.state.token) {
            this.props.stores.user.fetch();
        }

        dispatcher.on('token:update', _.bind(function(tokenData) {
            this.props.stores.token.setToken(tokenData);
        }, this));

        dispatcher.on('navigate', _.bind(function(href) {
            this.refs.router.navigate(href);
        }, this));
    },

    render : function()
    {
        var content;

        if (this.state.user) {
            content = (
                <Locations ref="router">
                    <Location stores={this.props.stores} user={this.state.user} path="/" handler={HomeModule} />
                    <Location stores={this.props.stores} user={this.state.user} path="/login" handler={LoginPage} />
                    <NotFound user={this.state.user} handler={NotFoundPage} />
                </Locations>
            );
        } else {
            content = (
                <Locations ref="router">
                    <NotFound stores={this.props.stores} user={false} handler={LoginPage} />
                </Locations>
            );
        }

        return (
            <SiteLayoutComponent user={this.state.user}>
                {content}
            </SiteLayoutComponent>
        );
    }

});
