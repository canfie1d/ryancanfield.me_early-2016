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
                return (
                    <div>
                        <p>
                            Hello. You are logged in. <a onClick={this.logout}>Log out</a>
                        </p>
                        <p>
                            Your email:
                            <a href="/account/change-email" onClick={this.navigate}>Change email</a>
                        </p>
                        <p>
                            <a href="/account/change-password" onClick={this.navigate}>Change password</a>
                        </p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <p>
                            Hello. Please
                            <a href="/login" onClick={this.navigate}>log in</a> or
                            <a href="/register" onClick={this.navigate}>register</a>.
                        </p>
                        <p>
                            Or <a href="http://project.vm/social-login/github">log in with GitHub</a>.
                        </p>
                    </div>
                );
            }
        }

    });
});
