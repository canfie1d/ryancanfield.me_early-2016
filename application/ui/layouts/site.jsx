/** @jsx React.DOM */
'use strict';

var React           = require('react');
var LoggedIn        = require('./header/user-logged-in.jsx');
var LoggedOut       = require('./header/user-logged-out.jsx');
var FluxMixin       = require('fluxxor').FluxMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;

module.exports = React.createClass({

    displayName : 'SiteLayout',

    mixins : [ FluxMixin, StoreWatchMixin('TokenStore') ],

    getStateFromFlux : function()
    {
        var store = this.getFlux().store('TokenStore');

        return {
            loggedIn : store.loggedIn
        };
    },

    render : function() {
        var Component = (this.state.loggedIn) ? LoggedIn : LoggedOut;
        return (
            <div>
                <header>
                    <Component user={this.state.user} />
                </header>
                {this.props.activeRouteHandler()}
            </div>
        );
    }
});
