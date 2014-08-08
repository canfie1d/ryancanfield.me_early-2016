/** @jsx React.DOM */
'use strict';

var React           = require('react');
var StoreWatchMixin = require('synapse-common/ui/mixins/store-watch');
var LoggedIn        = require('./header/user-logged-in.jsx');
var LoggedOut       = require('./header/user-logged-out.jsx');

module.exports = React.createClass({

    displayName : 'SiteLayout',

    mixins : [ StoreWatchMixin ],

    getInitialState : function()
    {
        return this.getStateFromStores();
    },

    getStateFromStores : function()
    {
        return {
            user : this.props.stores ? this.props.stores.user.getUser() : false
        };
    },

    render : function() {
        var Component = (this.props.loggedIn) ? LoggedIn : LoggedOut;
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
