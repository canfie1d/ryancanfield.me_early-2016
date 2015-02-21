/* jshint globalstrict: true */
'use strict';

var React  = require('react');
var Button = require('../../buttons/button');
var Icon   = require('../../icon/icon');
var ReactIntl = require('react-intl');
var IntlMixin = ReactIntl.IntlMixin;

module.exports = React.createClass({

    displayName : 'Buttons',

    mixins: [ IntlMixin ],

    render : function()
    {
        return (
            <div className='sg-page'>
                <h1 className='sg-h1'>{'Buttons'}</h1>
                <div>
                    <Button>
                        <a>
                            {this.getIntlMessage('sg.buttons.a')}
                            <span> Span</span>
                        </a>
                    </Button>
                </div>
                <div>
                    <Button>
                        <button>
                            {this.getIntlMessage('sg.buttons.button')}
                        </button>
                    </Button>
                </div>
                <hr className='sg-hr' />
                <div className='row'>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{this.getIntlMessage('sg.buttons.sizes')}</h2>
                            <Button size='tiny'>
                                <a>
                                    {this.getIntlMessage('sg.buttons.tiny')}
                                </a>
                            </Button>
                            <br />
                            <Button size='small'>
                                <a>
                                    {this.getIntlMessage('sg.buttons.small')}
                                </a>
                            </Button>
                            <br />
                            <Button size='medium'>
                                <a>
                                    {this.getIntlMessage('sg.buttons.medium')}
                                </a>
                            </Button>
                            <br />
                            <Button size='large'>
                                <a>
                                    {this.getIntlMessage('sg.buttons.large')}
                                </a>
                            </Button>
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{this.getIntlMessage('sg.buttons.split-right')}</h2>
                        <Button size='tiny' split='right'>
                            <a>
                                {this.getIntlMessage('sg.buttons.split')}
                                <Icon className='button--split__icon' icon='caret' />
                            </a>
                        </Button>
                        <br />
                        <Button size='small' split='right'>
                            <a>
                                {this.getIntlMessage('sg.buttons.split')}
                                <Icon className='button--split__icon' icon='caret' />
                            </a>
                        </Button>
                        <br />
                        <Button size='medium' split='right'>
                            <a>
                                {this.getIntlMessage('sg.buttons.split')}
                                <Icon className='button--split__icon' icon='caret' />
                            </a>
                        </Button>
                        <br />
                        <Button size='large' split='right'>
                            <a>
                                {this.getIntlMessage('sg.buttons.split')}
                                <Icon className='button--split__icon' icon='caret' />
                            </a>
                        </Button>
                        <br />
                    </div>
                    <div className='medium-4 columns'>
                        <h2 className='sg-h2'>{this.getIntlMessage('sg.buttons.split-left')}</h2>
                        <Button size='tiny' split='left'>
                            <a>
                                {this.getIntlMessage('sg.buttons.split')}
                                <Icon className='button--split__icon' icon='caret' rotate={180} />
                            </a>
                        </Button>
                        <br />
                        <Button size='small' split='left'>
                            <a>
                                {this.getIntlMessage('sg.buttons.split')}
                                <Icon className='button--split__icon' icon='caret' rotate={180} />
                            </a>
                        </Button>
                        <br />
                        <Button size='medium' split='left'>
                            <a>
                                {this.getIntlMessage('sg.buttons.split')}
                                <Icon className='button--split__icon' icon='caret' rotate={180} />
                            </a>
                        </Button>
                        <br />
                        <Button size='large' split='left'>
                            <a>
                                {this.getIntlMessage('sg.buttons.split')}
                                <Icon className='button--split__icon' icon='caret' rotate={180} />
                            </a>
                        </Button>
                        <br />
                    </div>
                </div>

                <hr className='sg-hr' />
                <h2 className='sg-h2'>{this.getIntlMessage('sg.buttons.themes')}</h2>
                <Button color='primary'>
                    <a>
                        {'Primary Color Button'}
                    </a>
                </Button>
                <Button color='secondary'>
                    <a>
                        {'Secondary Color Button'}
                    </a>
                </Button>
                <Button color='tertiary'>
                    <a>
                        {'Tertiary Color Button'}
                    </a>
                </Button>
                <Button color='inherit'>
                    <a>
                        {'Inherit Button'}
                    </a>
                </Button>
                <h2 className='sg-h2'>{'Status Buttons'}</h2>
                <Button status='warning'>
                    <a>
                        {'Warning Button'}
                    </a>
                </Button>
                <Button status='warning-alt'>
                    <a>
                        {'Warning Alternate Button'}
                    </a>
                </Button>
                <hr className='sg-hr' />
                <h2 className='sg-h2'>{'Button Display Types'}</h2>
                <Button block={true}>
                    <a>
                        {'Block Level Button'}
                    </a>
                </Button>
                <Button disabled={true}>
                    <a>
                        {'Disabled Button'}
                    </a>
                </Button>
            </div>
        );
    }

});
