/** @jsx React.DOM */
/* global window */
'use strict';

var qs     = require('querystring');
var React  = require('react');
var Router = require('react-router-component');
var config = require('config');
var dispatcher = require('synapse-common/lib/dispatcher');

module.exports = React.createClass({

    displayName : 'LoginPage',
    mixins      : [ Router.NavigatableMixin ],

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

    componentDidMount : function()
    {
        var token  = {
            access_token  : this.state.params.access_token,
            expires_in    : this.state.params.expires_in,
            token_type    : this.state.params.token_type,
            refresh_token : this.state.params.refresh_token,
            user_id       : this.state.params.user_id
        };

        if (this.state.loginFailure) {
            return;
        }

        if (! this.state.params.access_token) {
            return;
        }

        dispatcher.emit('token:update', token);
        dispatcher.emit('navigate', '/');
    },

    handleSubmit : function(event)
    {
        // Don't let the browser submit the form
        event.preventDefault();

        // this.refs is populated by setting the ref property in the component
        var email    = this.refs.email.getDOMNode().value.trim(),
            password = this.refs.password.getDOMNode().value.trim();

        if (!email || !password) {
            // TODO: error message
            return false;
        }

        this.props.stores.token.login(email, password);
    },

    render : function()
    {
        var errorText = this.state.error ? 'There was an error completing your log in' : 'Please Log In';
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
                </form>
                Or <a href={this.loginWithGithubUrl}>{'Login with GitHub'}</a>
            </div>
        );
    }

});
