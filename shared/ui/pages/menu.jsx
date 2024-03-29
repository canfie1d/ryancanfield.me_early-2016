import React    from 'react';
import MenuList from '../components/list/menu-list';
import Branding from '../components/branding/branding';

const NAV_ITEMS = [
    {
        title    : 'Projects',
        url      : 'projects',
        icon     : 'Projects',
        external : false
    },
    {
        title    : 'Concepts',
        url      : 'concepts',
        icon     : 'Concepts',
        external : false
    },
    {
        title    : 'About Me',
        url      : 'about',
        icon     : 'About',
        external : false
    },
    {
        title    : 'Elsewhere',
        url      : 'elsewhere',
        icon     : 'Elsewhere',
        external : false
    }
];

const MenuPage = React.createClass({

    displayName: 'MenuPage',

    render() {
        return (
            <div key='menu-page' className='page__content-container'>
                <Branding />
                <main className='page__content page__content--menu page__content--no-header'>
                    <MenuList menuItems={NAV_ITEMS} />
                </main>
            </div>
        );
    },

});

export default MenuPage;
