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
            window.app.setAuth(token, params.user_id);

            this.redirect('/');
        },

        render : function() {
            return <div />;
        }

    });
});
