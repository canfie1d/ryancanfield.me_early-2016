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
                <Button>
                    <a>
                        {'Default Button'}
                    </a>
                </Button>
                <Button>
                    <button>
                        {'Default Button'}
                    </button>
                </Button>
            </div>
        );
    }

});
