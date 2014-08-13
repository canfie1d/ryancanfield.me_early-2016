/** @jsx React.DOM */
'use strict';

var Link  = require('react-router').Link;

var React = require('react');
var Fluxxor         = require('fluxxor');
var FluxMixin       = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

module.exports = React.createClass({

    displayName : 'RegisterModule',

    mixins      : [FluxMixin, StoreWatchMixin('UserStore')],

    handleSubmit : function(event)
    {
        var email, password;

        // Don't let the browser submit the form
        event.preventDefault();

        email    = this.refs.email.getDOMNode().value.trim();
        password = this.refs.password.getDOMNode().value.trim();

        this.getFlux().actions.registerUser(email, password);
    },

    getStateFromFlux : function()
    {
        var store = this.getFlux().store('UserStore');

        return {
            loading  : store.loading,
            hasError : store.error
        };
    },

    renderErrorMessage : function()
    {
        if (this.state.hasError) {
            return <p>Registration Failed</p>;
        }

        return null;
    },

    render : function()
    {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        Register an account:
                    </p>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" ref="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" ref="password" />
                    <input type="submit" value="Log in" />
                    {this.renderErrorMessage()}
                </form>
                <Link to='home'>Home</Link>
            </div>
        );
    }

});
