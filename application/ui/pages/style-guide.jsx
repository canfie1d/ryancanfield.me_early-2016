/** @jsx React.DOM */
'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName : 'StyleGuide',

    componentWillMount: function()
    {
        var doc               = document;
        var styleGuideCSSLink = doc.createElement('link');

        styleGuideCSSLink.href  = '/css/style-guide.css';
        styleGuideCSSLink.type  = 'text/css';
        styleGuideCSSLink.rel   = 'stylesheet';
        styleGuideCSSLink.media = 'screen';

        doc.getElementsByTagName('head')[0].appendChild(styleGuideCSSLink);
    },

    render : function()
    {
        return (
            <div className='sg'>
                <div className='sg-header'>
                    <h1 className='sg-header__title'>{'Style Guide'}</h1>
                    <nav className='sg-nav'>
                        <menu className='sg-nav__menu'>
                            <li className='sg-nav__menu-item'>
                                <a className='sg-nav__menu-link'>
                                    {'Buttons'}
                                </a>
                            </li>
                        </menu>
                    </nav>
                </div>
                <div className='sg-content'>
                    <a className='button'>{'Default Button'}</a>
                </div>
            </div>
        );
    }

});
