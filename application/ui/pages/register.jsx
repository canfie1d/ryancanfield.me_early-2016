/** @jsx React.DOM */
'use strict';


var React           = require('react');
var Fluxxor         = require('fluxxor');
var FluxMixin       = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

var Link  = require('react-router').Link;
var Input = require('../components/form/input');

module.exports = React.createClass({

    displayName : 'RegisterModule',

    mixins      : [FluxMixin, StoreWatchMixin('UserStore')],

    getInitialState : function()
    {
        return {
            email    : '',
            password : '',
        };
    },

    handleSubmit : function(event)
    {
        // Don't let the browser submit the form
        event.preventDefault();

        this.getFlux().actions.auth.registerUser(
            this.state.email,
            this.state.password
        );
    },

    getStateFromFlux : function()
    {
        var store = this.getFlux().store('UserStore');

        return {
            loading  : store.loading,
            hasError : store.error
        };
    },

    updateStateValue : function(key, value)
    {
        var stateChanges = {};

        stateChanges[key] = value;

        this.setState(stateChanges);
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
                    <p>Register an account:</p>
                    <label htmlFor="email">Email:</label>
                    <Input
                        type     = "text"
                        name     = "email"
                        onChange = {this.updateStateValue.bind(this, 'email')}
                        value    = {this.state.email}
                    />
                    <label htmlFor="password">Password:</label>
                    <Input
                        type     = "password"
                        name     = "password"
                        onChange = {this.updateStateValue.bind(this, 'password')}
                        value    = {this.state.password}
                    />
                    <input type="submit" value="Log in" />
                    {this.renderErrorMessage()}
                </form>
                <Link to='home'>Home</Link>
            </div>
        );
    }

});
