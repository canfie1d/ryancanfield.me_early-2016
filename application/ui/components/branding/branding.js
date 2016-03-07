import React       from 'react';
import { connect } from 'redux';

let getPropsFromApplicationState = (state) => {
    return {
        navMenu : state.navMenus.navMenu
    };
};

export default connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'Branding',

    render() {
        const letterTextColor = 'branding__letter--' + this.props.navMenu;

        const classes = [
            'branding__letter',
            letterTextColor,
        ].join(' ').trim();

        return (
            <div className='branding'>
                <div className='branding__row'>
                    <div className='branding__column'>
                        <span className={classes}>r</span>
                    </div>
                    <div className='branding__column'>
                        <span className={classes}>y</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>a</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>n</span>
                    </div>
                </div>
                <div className='branding__row'>
                    <div className='branding__column'>
                        <span className='branding__letter'>c</span>
                    </div>
                    <div className='branding__column'>
                        <span className={classes}>a</span>
                    </div>
                    <div className='branding__column'>
                        <span className={classes}>n</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>f</span>
                    </div>
                </div>
                <div className='branding__row'>
                    <div className='branding__column'>
                        <span className='branding__letter'>i</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>e</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>l</span>
                    </div>
                    <div className='branding__column'>
                        <span className='branding__letter'>d</span>
                    </div>
                </div>
            </div>
        );
    },

}));
