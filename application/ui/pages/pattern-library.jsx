'use strict';

var React            = require('react');
var RouterStateMixin = require('react-router').State;
var FluxMixin        = require('fluxxor').FluxMixin(React);
var PLSidebar        = require('../components/pattern-library/pl-sidebar');

var TypographySection   = require('../components/pattern-library/sections/pl-typography');
var IconSection         = require('../components/pattern-library/sections/pl-icons');
var GridLayout          = require('../components/pattern-library/sections/pl-grid');

require('../scss/pattern-library');

module.exports = React.createClass({

    displayName : 'Pattern Library',

    mixins : [FluxMixin, RouterStateMixin],

    getComponentConstructors : function()
    {
        return [
            TypographySection,
            IconSection,
            GridLayout
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
            <div className='pl'>
                <PLSidebar sections={this.getComponentConstructors()} activeSection={this.getParams().section}/>
                <div className='pl-content'>
                    <div className='pl-content__header'>
                        <h1 className='pl-content__title'>{'Pattern Library'}</h1>
                    </div>
                    {this.renderSections()}
                </div>
            </div>
        );
    }

});
