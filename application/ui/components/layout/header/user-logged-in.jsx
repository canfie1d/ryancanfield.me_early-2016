/** @jsx React.DOM */
define([
    'react',
    'compiled/mixins/navigate'
], function(
    React,
    NavigateMixin
) {

    return React.createClass({

        displayName : 'LoggedInHeaderSection',
        mixins      : [NavigateMixin],

        logout : function(event)
        {
            var success = _.bind(
                function() {
                    this.redirect('/');
                },
                this
            );

            event.preventDefault();

            this.props.user.logout(success);
        },

        render : function() {
            console.log(this.props.user);
            return (
                <div>
                    <p>Logged in as <strong>{this.props.user.get('email')}</strong>.</p>
                    <p><a href="/logout" onClick={this.logout}>Logout</a></p>
                </div>
            );
        }
    });
});
