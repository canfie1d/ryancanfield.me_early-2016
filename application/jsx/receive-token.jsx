/** @jsx React.DOM */
define([
    'react',
    'templates/mixins/navigate'
], function(
    React,
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

            window.app.clearAuth();

            if (this.state.loginFailure) {
                return;
            }

            if (! params.access_token) {
                return;
            }

            window.app.setAuth(token, params.user_id);

            this.redirect('/');
        },

        message : function()
        {
            if (this.state.loginFailure) {
                return 'An account already exists with your email address. Do you need to link your social account?';
            }
        },

        render : function() {
            return (
                <div>
                    {this.message()}
                    <a href="/">Back</a>
                </div>
            );
        }

    });
});
