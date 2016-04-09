import React              from 'react';
import { browserHistory } from 'react-router';
import { connect }        from 'react-redux';
import MenuList           from '../components/list/menu-list';
import BackButton         from '../components/buttons/back-button';
import Icon               from '../components/icon/icon';
import Header             from '../components/regions/header';
import Footer             from '../components/regions/footer';

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
                <Header
                    title = 'Elsewhere'
                    icon  = 'Elsewhere'
                />
                <main className='page__content page__content--menu'>
                    <MenuList menuItems={ELSEWHERE_ITEMS} />
                </main>
                <Footer>
                    <BackButton onClick={this.onBackClick} staySmall />
                </Footer>
            </div>
        );
    },

}));

export default ElsewherePage;
