/* jshint globalstrict: true */
'use strict';

var React            = require('react');
var RouterStateMixin = require('react-router').State;
var FluxMixin        = require('fluxxor').FluxMixin(React);
var SGHeader         = require('../components/style-guide/sg-header');

var TypographySection   = require('../components/style-guide/sections/sg-typography');
var ButtonSection       = require('../components/style-guide/sections/sg-buttons');
var IconSection         = require('../components/style-guide/sections/sg-icons');
var FormElementsSection = require('../components/style-guide/sections/sg-form-elements');

var ReactIntl       = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;
var IntlHelperMixin = require('../mixins/intlHelperMixin');

require('../scss/style-guide');

module.exports = React.createClass({

    displayName : 'StyleGuide',

    mixins : [FluxMixin, RouterStateMixin, IntlMixin, IntlHelperMixin],

    getComponentConstructors : function()
    {
        return [
            TypographySection,
            ButtonSection,
            IconSection,
            FormElementsSection
        ];
    },

    renderSections : function()
    {
        var section = this.getParams().section;

        return this.getComponentConstructors().map(function(Page) {
            if (section === 'all' || section === Page.displayName) {
                return <Page key={Page.displayName} />;
            }
        });
    },

    render : function()
    {
        return (
            <div className='sg'>
                <SGHeader sections={this.getComponentConstructors()} activeSection={this.getParams().section}/>
                <div className='sg-content'>
                    <div className='sg-content__header'>
                        <h1 className='sg-content__title'>{this.t('sg.title')}</h1>
                    </div>
                    {this.renderSections()}
                </div>
            </div>
        );
    }

});
