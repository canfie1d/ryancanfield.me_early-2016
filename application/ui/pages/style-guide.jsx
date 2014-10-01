/** @jsx React.DOM */
'use strict';

var React    = require('react');
var SGHeader = require('../components/style-guide/sg-header');

var ButtionSection = require('../components/style-guide/sections/sg-buttons');

module.exports = React.createClass({

    displayName : 'StyleGuide',

    componentWillMount: function()
    {
        var doc               = document,
            styleGuideCSSLink = doc.createElement('link');

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
                <SGHeader />
                <div className='sg-content'>
                    <ButtionSection />
                </div>
            </div>
        );
    }

});
