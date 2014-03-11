/** @jsx React.DOM */
define([
    'react',
    'models/user'
], function(
    React,
    UserModel
) {

    return React.createClass({

        displayName    : 'LoginModule',

        getInitialState : function()
        {
            return {};
        },

        loginSuccess : function()
        {
            console.log('success');
        },

        loginFailure : function()
        {
            console.log('failure');
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

            var user = new UserModel({
                email    : email,
                password : password
            });

            user.login(this.loginSuccess, this.loginFailure);
        },

        render : function() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" ref="email" />
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" ref="password" />
                    <input type="submit" value="Log in" />
                </form>
            );
        }

    });
});
