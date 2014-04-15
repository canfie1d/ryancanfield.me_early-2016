/** @jsx React.DOM */
define([
    'react',
    'compiled/mixins/events',
    'models/user',
    'compiled/mixins/navigate'
], function(
    React,
    EventsMixin,
    UserModel,
    NavigateMixin
) {

    return React.createClass({

        displayName : 'ReceiveTokenModule',
        mixins      : [NavigateMixin],

        getInitialState : function()
        {
            return {
                loginFailure : this.props.queryParams.login_failure
            };
        },

        componentDidMount : function()
        {
            var params = this.props.queryParams;
            var token  = {
                access_token  : params.access_token,
                expires_in    : params.expires_in,
                token_type    : params.token_type,
                refresh_token : params.refresh_token,
                user_id       : params.user_id
            };

            if (this.state.loginFailure) {
                return;
            }

            if (! params.access_token) {
                return;
            }

            window.app.clearAuth();
            window.app.setAuth(token, false);
            window.app.loadUserFromToken();

            this.subscribe('!user:auth', _.bind(function(loggedIn, user) {
                this.redirect('/');
            }, this));
        },

        message : function()
        {
            if (this.state.loginFailure) {
                return 'An account already exists with your email address. Do you need to link your social account?';
            }

            return 'LOADING!';
        },

        render : function()
        {
            return (
                <div>
                    {this.message()}
                </div>
            );
        }

    });
});
