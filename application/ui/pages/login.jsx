/** @jsx React.DOM */
/* global window */
'use strict';

var config          = require('config');
var Link            = require('react-router').Link;
var qs              = require('querystring');

var React           = require('react');
var Fluxxor         = require('fluxxor');
var FluxMixin       = Fluxxor.FluxMixin(React);
var StoreWatchMixin = Fluxxor.StoreWatchMixin;

module.exports = React.createClass({

    displayName : 'LoginPage',

    mixins : [FluxMixin, StoreWatchMixin('TokenStore')],

    seo : {
        title : 'Command Synter | Login'
    },

    loginWithGithubUrl : config.loginWithGithubUrl,

    getInitialState : function()
    {
        var queryParams = qs.parse(window.location.search.substring(1));

        return {
            loginFailure : queryParams.login_failure,
            params       : queryParams,
            error        : false
        };
    },

    componentWillMount : function()
    {
        if (this.state.loggedIn) {
            this.getFlux().actions.navigate('home');
        }
    },

    handleSubmit : function(event)
    {
        // Don't let the browser submit the form
        event.preventDefault();

        this.getFlux().actions.auth.login(
            this.refs.email.getDOMNode().value.trim(),
            this.refs.password.getDOMNode().value.trim()
        );
    },

    getStateFromFlux : function()
    {
        var store = this.getFlux().store('TokenStore');

        return {
            loading  : store.loading,
            loggedIn : store.loggedIn,
            hasError : store.error
        };
    },

    renderErrorMessage : function()
    {
        if (this.state.hasError) {
            return <p>Authentication Failed</p>;
        }

        return null;
    },

    render : function()
    {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        Login:
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
