/** @jsx React.DOM */
'use strict';

var React  = require('react');
var Button = require('../../buttons/button');

module.exports = React.createClass({

    displayName : 'Buttons',

    render : function()
    {
        return (
            <div className='sg-page'>
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
