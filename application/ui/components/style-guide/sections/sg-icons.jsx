/* jshint globalstrict: true */
'use strict';

var React     = require('react');
var Icon      = require('../../icon/icon');
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;

module.exports = React.createClass({

    displayName : 'Icons',

    mixins: [ IntlMixin ],

    render : function()
    {
        return (
            <div className='sg-page'>
                <h1 className='sg-h1'>{this.getIntlMessage('sg.section.Icons')}</h1>
                <div className='sg-icons'>
                    <span className='sg-icon'>
                        <Icon icon='navicon' />
                        <span className='sg-icon__name'>
                            <strong className='strong'>{this.getIntlMessage('sg.icons.icon')}</strong>
                            {this.getIntlMessage('sg.icons.navicon')}
                        </span>
                    </span>
                    <span className='sg-icon'>
                        <Icon icon='caret' />
                        <span className='sg-icon__name'>
                            <strong className='strong'>{this.getIntlMessage('sg.icons.icon')}</strong>
                            {this.getIntlMessage('sg.icons.caret')}
                        </span>
                    </span>
                </div>
                <hr className='sg-hr' />
                <div className='row'>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{this.getIntlMessage('sg.icons.icon-sizes')}</h2>
                        <Icon icon='navicon' size='x-small' /> {this.getIntlMessage('sg.icons.xs')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' /> {this.getIntlMessage('sg.icons.s')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='medium' /> {this.getIntlMessage('sg.icons.m')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='large' /> {this.getIntlMessage('sg.icons.l')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='x-large' /> {this.getIntlMessage('sg.icons.xl')}
                        <br />
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{this.getIntlMessage('sg.icons.icon-rotation')}</h2>
                        <Icon icon='caret' size='small' rotate={0} /> {this.getIntlMessage('sg.icons.0deg')}
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={45} /> {this.getIntlMessage('sg.icons.45deg')}
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={90} /> {this.getIntlMessage('sg.icons.90deg')}
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={180} /> {this.getIntlMessage('sg.icons.180deg')}
                        <br />
                        <br />
                        <Icon icon='caret' size='small' rotate={270} /> {this.getIntlMessage('sg.icons.270deg')}
                        <br />
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{this.getIntlMessage('sg.icons.icon-colors')}</h2>
                        <Icon icon='navicon' size='small' color='black' /> {this.getIntlMessage('sg.icons.black')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='white' /> {this.getIntlMessage('sg.icons.white')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='primary' /> {this.getIntlMessage('sg.icons.primary')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='secondary' /> {this.getIntlMessage('sg.icons.secondary')}
                        <br />
                        <br />
                        <Icon icon='navicon' size='small' color='tertiary' /> {this.getIntlMessage('sg.icons.tertiary')}
                        <br />
                        <br />
                    </div>
                </div>

                <hr className='sg-hr' />
            </div>
        );
    }

});
