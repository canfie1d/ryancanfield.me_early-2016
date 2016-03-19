import React              from 'react';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import MenuList           from '../components/menu-list/menu-list';
import BackButton         from '../components/buttons/back-button';

let getPropsFromApplicationState = (state) => {
    return {
        currentMenuItem : state.menu.currentMenuItem
    };
};

const ELSEWHERE_ITEMS = [
    {
        title    : 'Email',
        url      : 'mailto:ryancanfield@me.com',
        external : true
    },
    {
        title    : 'Github',
        url      : 'http://www.github.com/canfie1d',
        external : true
    },
    {
        title    : 'Twitter',
        url      : 'http://www.twitter.com/canfie1d',
        external : true
    },
    {
        title    : 'LinkedIn',
        url      : 'http://www.linkedin.com/in/ryanmcanfield',
        external : true
    }
];

const ElsewherePage = connect(getPropsFromApplicationState)(React.createClass({

    displayName: 'ElsewherePage',

    onBackClick() {
        browserHistory.push('/');
    },

    render() {
        return (
            <div key='elsewhere-page' className='page__content-container'>
                <BackButton onClick={this.onBackClick} />
                <MenuList menuItems={ELSEWHERE_ITEMS} />
            </div>
        );
    },

}));

export default ElsewherePage;
