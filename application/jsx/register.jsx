/** @jsx React.DOM */
define([
    'react',
    'models/user',
    'templates/mixins/navigate'
], function(
    React,
    UserModel,
    NavigateMixin
) {

    return React.createClass({

        displayName    : 'RegisterModule',
        mixins: [NavigateMixin],

        getInitialState : function()
        {
            return {};
        },

        loginSuccess : function()
        {
            console.log('here');
            this.redirect('/');
        },

        loginFailure : function()
        {
            console.log('failure');
        },

        componentDidMount : function()
        {
            if (window.app.token) {
                this.redirect('/');
            }
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

            var user = new UserModel();

            user.save({
                email    : email,
                password : password
            }, {
                success : this.loginSuccess,
                error   : this.loginFailure
            });
        },

        render : function() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <p>
                        Register an account:
                    </p>
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