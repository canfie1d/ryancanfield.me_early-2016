/* jshint globalstrict: true */
'use strict';

var React = require('react');
var Label = require('../label');
var classSet = require('react/lib/cx');

module.exports = React.createClass({

    displayName : 'SwitchInputElement',

    propTypes : {
        id      : React.PropTypes.string.isRequired,
        checked : React.PropTypes.bool.isRequired,
        size    : React.PropTypes.oneOf([
            'large',
            'medium',
            'small'
        ]),
        value   : React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number
        ]).isRequired,
        label    : React.PropTypes.string,
        onChange : React.PropTypes.func,
        round    : React.PropTypes.bool
    },

    getInitialState : function()
    {
        return {
            isChecked : this.props.checked
        };
    },

    getDefaultProps : function()
    {
        return {
            round : false
        };
    },

    onChange : function()
    {
        this.setState({isChecked : ! this.state.isChecked});
    },

    render : function()
    {
        var classes = classSet({
            'switch'         : true,
            'switch--round'  : this.props.round === true,
            'switch--small'  : this.props.size === 'small',
            'switch--medium' : this.props.size === 'medium',
            'switch--large'  : this.props.size === 'large',
            'input-wrap'     : true
        });

        return (
            <div className = {classes}>
                <span className='label'>{this.props.label}</span>
                <input
                        id        = {this.props.id}
                        value     = {this.props.value}
                        name      = {this.props.id}
                        type      = 'checkbox'
                        checked   = {this.state.isChecked}
                        onChange  = {this.onChange} />
                <Label
                    className = 'input-wrap__label'
                    htmlFor   = {this.props.id} >
                </Label>
            </div>

        );
    }


});
