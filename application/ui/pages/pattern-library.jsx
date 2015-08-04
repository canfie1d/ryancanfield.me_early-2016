'use strict';

let React            = require('react');
let RouterStateMixin = require('react-router').State;
let FluxMixin        = require('fluxxor').FluxMixin(React);
let PLSidebar        = require('../components/pattern-library/pl-sidebar');

let TypographySection = require('../components/pattern-library/sections/pl-typography');
let IconSection       = require('../components/pattern-library/sections/pl-icons');
let GridLayout        = require('../components/pattern-library/sections/pl-grid');
let Icon              = require('../components/icon/icon');

require('../scss/pattern-library');

module.exports = React.createClass({

    displayName : 'PatternLibrary',

    mixins : [
        FluxMixin,
        RouterStateMixin
    ],

    getInitialState()
    {
        return {
            navHidden : true
        };
    },

    onTriggerClick()
    {
        this.setState({
            navHidden : ! this.state.navHidden
        });
    },

    getComponentConstructors()
    {
        return [
            TypographySection,
            IconSection,
            GridLayout
        ];
    },

    renderSections()
    {
        let section = this.getParams().section;

        return this.getComponentConstructors().map(Page => {
            if (section === 'all' || section === Page.displayName) {
                return <Page key={Page.displayName} />;
            }
        });
    },

    render()
    {
        let triggerIcon = this.state.navHidden ? 'hamburger' : 'cancel';

        return (
            <div className='pl'>
                <PLSidebar
                    hidden        = {this.state.navHidden}
                    sections      = {this.getComponentConstructors()}
                    activeSection = {this.getParams().section}
                />
                <div className='pl-content'>
                    <div className='pl-content__header'>
                        <div className='pl-sidebar__trigger' onClick={this.onTriggerClick}>
                            <Icon icon={triggerIcon} colorTheme='white' />
                        </div>
                        <h1 className='pl-content__title'>
                            {'Pattern Library'}
                        </h1>
                    </div>
                    {this.renderSections()}
                </div>
            </div>
        );
    }

});
