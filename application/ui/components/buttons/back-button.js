import React from 'react';

let BackButton = React.createClass({

    displayName: 'BackButton',

    propTypes: {
        onClick : React.PropTypes.func
    },

    render() {
        return (
            <div className='branding branding--back' onClick={this.props.onClick} tabIndex='1'>
                <div className='branding__row'>
                    <div className='branding__column'>
                        <span className='branding__letter'>b</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>a</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'></span>
                    </div>
                </div>
                <div className='branding__row'>
                    <div className='branding__column'>
                        <span className='branding__letter'></span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>c</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>k</span>
                    </div>
                </div>
            </div>
        );
    },

});

export default BackButton;
