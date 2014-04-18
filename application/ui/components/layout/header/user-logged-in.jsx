/** @jsx React.DOM */
'use strict';

var _             = require('underscore');
var React         = require('react');
var NavigateMixin = require('../../../mixins/navigate.jsx');

module.exports = React.createClass({

    displayName : 'LoggedInHeaderSection',
    mixins      : [NavigateMixin],

    logout : function(event)
    {
        var success = _.bind(
            function() {
                this.redirect('/');
            },
            this
        );

        event.preventDefault();

        this.props.user.logout(success);
    },

    render : function() {
        return (
            <div>
                <p>Logged in as <strong>{this.props.user.get('email')}</strong>.</p>
                <p><a href="/logout" onClick={this.logout}>Logout</a></p>
            </div>
        );
    }
});
