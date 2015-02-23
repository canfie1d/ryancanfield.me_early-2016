/* jshint globalstrict: true */
'use strict';

var React = require('react');
var Icon  = require('../../icon/icon');

var ReactIntl       = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;
var IntlHelperMixin = require('../../../mixins/intlHelperMixin');

module.exports = React.createClass({

    displayName : 'Icons',

    mixins: [ IntlMixin, IntlHelperMixin ],

    render : function()
    {
        return (
            <div className='sg-page'>
                <h1 className='sg-h1'>{this.t('sg.section.Icons')}</h1>
                <div className='sg-icons'>
                    <span className='sg-icon'>
                        <Icon icon='navicon' />
                        <span className='sg-icon__name'>
                            <strong className='strong'>{this.t('sg.icons.icon')}</strong>
                            {this.t('sg.icons.navicon')}
                        </span>
                    </span>
                    <span className='sg-icon'>
                        <Icon icon='caret' />
                        <span className='sg-icon__name'>
                            <strong className='strong'>{this.t('sg.icons.icon')}</strong>
                            {this.t('sg.icons.caret')}
                        </span>
                    </span>
                </div>
                <hr className='sg-hr' />
                <div className='row'>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{this.t('sg.icons.icon-sizes')}</h2>
                        <Icon icon='navicon' size='x-small' /> {this.t('sg.icons.xs')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' /> {this.t('sg.icons.s')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='medium' /> {this.t('sg.icons.m')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='large' /> {this.t('sg.icons.l')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='x-large' /> {this.t('sg.icons.xl')}
                        <br />
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{this.t('sg.icons.icon-rotation')}</h2>
                        <Icon icon='caret' size='small' rotate={0} /> {this.t('sg.icons.0deg')}
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={45} /> {this.t('sg.icons.45deg')}
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={90} /> {this.t('sg.icons.90deg')}
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={180} /> {this.t('sg.icons.180deg')}
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={270} /> {this.t('sg.icons.270deg')}
                        <br />
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{this.t('sg.icons.icon-colors')}</h2>
                        <Icon icon='navicon' size='small' color='black' /> {this.t('sg.icons.black')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='white' /> {this.t('sg.icons.white')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='primary' /> {this.t('sg.icons.primary')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='secondary' /> {this.t('sg.icons.secondary')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='tertiary' /> {this.t('sg.icons.tertiary')}
                        <br />
                        <br />
                    </div>
                </div>

                <hr className='sg-hr' />
            </div>
        );
    }

});
