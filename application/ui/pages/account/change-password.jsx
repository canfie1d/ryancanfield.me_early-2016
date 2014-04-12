/** @jsx React.DOM */
define([
    'react'
], function(
    React
) {

    return React.createClass({

        displayName    : 'ChangePasswordModule',

        handleSubmit : function(event) {
            event.preventDefault();

            var currentPassword = this.refs.current_password.getDOMNode().value.trim();
            var newPassword     = this.refs.password.getDOMNode().value.trim();

            this.props.user.save({
                current_password : currentPassword,
                password         : newPassword
            });
        },

        render : function() {
            return (
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="current_password">Current password:</label>
                    <input type="password" name="current_password" ref="current_password" />

                    <label htmlFor="password">New password:</label>
                    <input type="password" name="password" ref="password" />

                    <input type="submit" value="Submit" />
                    <a href="/">Back</a>
                </form>
            );
        }

    });
});
