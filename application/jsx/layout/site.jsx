/** @jsx React.DOM */
define([
    'react'
], function(
    React
) {

    return React.createClass({

        getInitialState : function()
        {
            return {};
        },

        render : function() {
            return (
                <div>
                        {this.props.children}
                </div>
            );
        }
    });
});
