'use strict';

import React from 'react';
import classNames from 'classnames';
import {History} from 'react-router';

module.exports = React.createClass({

    displayName : 'PatternLibraryNavItem',

    mixins : [
        History
    ],

    propTypes : {
        active      : React.PropTypes.bool,
        displayName : React.PropTypes.string
    },

    getDefaultProps()
    {
        return {
            active      : false,
            displayName : ''
        };
    },

    onClick()
    {
        if (this.props.displayName) {
            this.history.pushState(null, `/pattern-library/${this.props.displayName}`);
        } else {
            this.history.pushState(null, `/pattern-library`);
        }
    },

    render()
    {
        let linkClasses, display;

        linkClasses = classNames({
            'pl-nav__menu-link'             : true,
            'pl-nav__menu-link--is-current' : this.props.active
        });

        if (this.props.children) {
            display = this.props.children;
        } else {
            display = this.props.displayName;
        }
        return (
            <li className='pl-nav__menu-item'>
                <a className={linkClasses} onClick={this.onClick}>
                    {display}
                </a>
            </li>
        );
    }

});
