/** @jsx React.DOM */
'use strict';

var _               = require('underscore');
var React           = require('react');
var FluxChildMixin  = require('fluxxor').FluxChildMixin(React);
var StoreWatchMixin = require('fluxxor').StoreWatchMixin;

module.exports = React.createClass({

    displayName : 'LoggedInHeaderSection',

    mixins : [FluxChildMixin, StoreWatchMixin('UserStore')],

    getStateFromFlux : function()
    {
        var userStore;

        userStore = this.getFlux().store('UserStore');

        return {
            loggedIn : !! userStore.data.email,
            email    : userStore.data.email
        };
    },

    logout : function(event)
    {
        var success = _.bind(
            function() {
                //this.redirect('/');
            },
            this
        );

        event.preventDefault();

        this.props.user.logout(success);
    },

    render : function() {
        return (
            <div>
                <p>{'Logged in as '}<strong>{this.state.email}</strong>{'.'}</p>
                <p><a href="/logout" onClick={this.logout}>{'Logout'}</a></p>
            </div>
        );
    }
});
