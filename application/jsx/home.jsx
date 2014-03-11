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

        getInitialState : function()
        {
            return {};
        },

        render : function() {
            return <div>Hello. Please <a href="/login" onClick={this.navigate}>log in</a></div>;
        }

    });
});
