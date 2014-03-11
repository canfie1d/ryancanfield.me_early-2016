/** @jsx React.DOM */
define([
    'react',
    'templates/mixins/navigate'
], function(
    React,
    NavigateMixin
) {

    return React.createClass({

        displayName    : 'HomeModule',
        mixins         : [NavigateMixin],

        logout : function(event) {
            event.preventDefault();
            this.props.user.logout();
        },

        render : function() {
            if (this.props.loggedIn) {
                return <div>Hello. You are logged in. <a onClick={this.logout}>Log out</a></div>;
            } else {
                return <div>Hello. Please <a href="/login" onClick={this.navigate}>log in</a></div>;
            }
        }

    });
});
