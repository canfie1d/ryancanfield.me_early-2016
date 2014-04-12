/** @jsx React.DOM */
define([
    'react',
    'compiled/mixins/navigate'
], function(
    React,
    NavigateMixin
) {

    return React.createClass({

        displayName    : 'ChangePasswordModule',
        mixins         : [NavigateMixin],

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
                    <a href="/" onClick={this.navigate}>Back</a>
                </form>
            );
        }

    });
});
