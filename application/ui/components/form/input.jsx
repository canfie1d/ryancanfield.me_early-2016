/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName : 'InputElement',

    propTypes : {
        onChange : React.PropTypes.func.isRequired
    },

    onChange : function(event)
    {
        this.props.onChange(event.currentTarget.value);
    },

    render : function()
    {
        return this.transferPropsTo(
            <input onChange={this.onChange} />
        );
    }
});
