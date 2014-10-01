/** @jsx React.DOM */
'use strict';

var React = require('react');
var cx    = require('react/lib/cx');

module.exports = React.createClass({
    displayName : 'Button',

    propTypes : {
        size   : React.PropTypes.oneOf(['tiny', 'small', 'medium', 'large']),
        color  : React.PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
        expand : React.PropTypes.bool
    },

    getDefaultProps : function()
    {
        return {
            size   : 'medium',
            color  : 'primary',
            expand : false
        };
    },

    render : function()
    {
        var classes = cx({
            'button'            : true,
            'button--tiny'      : this.props.size === 'tiny',
            'button--small'     : this.props.size === 'small',
            'button--medium'    : this.props.size === 'medium',
            'button--large'     : this.props.size === 'large',
            'button--primary'   : this.props.color === 'primary',
            'button--secondary' : this.props.color === 'secondary',
            'button--tertiary'  : this.props.color === 'tertiary',
            'button--expand'    : this.props.expand === true
        });

        return this.transferPropsTo(
            <span className={classes}>{this.props.children}</span>
        );
    }
});
