/** @jsx React.DOM */
define([
    'react'
], function(
    React
) {

    return React.createClass({

        displayName    : 'ChangeEmailPage',

        handleSubmit : function(event) {
            event.preventDefault();

            var currentPassword = this.refs.current_password.getDOMNode().value.trim();
            var newEmail        = this.refs.email.getDOMNode().value.trim();

            this.props.user.save({
                current_password : currentPassword,
                email            : newEmail
            });
        },

        render : function() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="current_password">Current password:</label>
                    <input type="password" name="current_password" ref="current_password" />

                    <label htmlFor="email">New email:</label>
                    <input type="text" name="email" ref="email" />

                    <input type="submit" value="Submit" />
                    <a href="/">Back</a>
                </form>
            );
        }

    });
});
