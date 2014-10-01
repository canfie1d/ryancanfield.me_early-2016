/** @jsx React.DOM */
'use strict';

var React  = require('react');
var Button = require('../../buttons/button');

module.exports = React.createClass({

    displayName : 'StyleGuideButtonsSection',

    render : function()
    {
        return (
            <div className='sg-page'>
                <div className='sg-page__header'>
                    <h1 className='sg-page__title'>{'Style Guide'}</h1>
                </div>
                <h1 className='sg-h1'>{'Buttons'}</h1>
                <div>
                    <Button>
                        <a>
                            {'Default Button <a> Element'}
                            <span> Span</span>
                        </a>
                    </Button>
                </div>
                <div>
                    <Button>
                        <button>
                            {'Default Button <button> Element'}
                        </button>
                    </Button>
                </div>
                <hr className='sg-hr' />
                <h2 className='sg-h2'>{'Button Sizes'}</h2>
                <Button size='tiny'>
                    <a>
                        {'Tiny Button'}
                    </a>
                </Button>
                <br />
                <Button size='small'>
                    <a>
                        {'Small Button'}
                    </a>
                </Button>
                <br />
                <Button size='medium'>
                    <a>
                        {'Medium Button'}
                    </a>
                </Button>
                <br />
                <Button size='large'>
                    <a>
                        {'Large Button'}
                    </a>
                </Button>
                <hr className='sg-hr' />
                <h2 className='sg-h2'>{'Button Themes'}</h2>
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
            </div>
        );
    }

});
