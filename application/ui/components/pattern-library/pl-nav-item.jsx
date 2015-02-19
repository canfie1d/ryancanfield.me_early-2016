/* jshint globalstrict: true */
'use strict';

var React     = require('react');
var FluxMixin = require('fluxxor').FluxMixin(React);
var classSet  = require('react/lib/cx');

module.exports = React.createClass({
    displayName : 'PatternLibraryNavItem',

    mixins : [FluxMixin],

    propTypes : {
        active      : React.PropTypes.bool,
        displayName : React.PropTypes.string
    },

    getDefaultProps : function()
    {
        return {
            active      : false,
            displayName : ''
        };
    },

    onClick : function()
    {
        if (this.props.displayName) {
            this.getFlux().actions.route.navigate(
                'pattern-library-section',
                {section : this.props.displayName}
            );
        } else {
            this.getFlux().actions.route.navigate('pattern-library');
        }
    },

    render : function()
    {
        var linkClasses;

        linkClasses = classSet({
            'pl-nav__menu-link'             : true,
            'pl-nav__menu-link--is-current' : this.props.active
        });

        return (
            <li className='pl-nav__menu-item'>
                <a className={linkClasses} onClick={this.onClick}>
                    {this.props.children || this.props.displayName}
                </a>
            </li>
        );
    }

});
