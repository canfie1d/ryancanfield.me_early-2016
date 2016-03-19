import React    from 'react';
import MenuList from '../components/menu-list/menu-list';
import Branding from '../components/branding/branding';

const NAV_ITEMS = [
    {
        title    : 'Selected Work',
        url      : 'work',
        icon     : 'Back',
        external : false
    },
    {
        title    : 'Code Snippets',
        url      : 'snippets',
        icon     : 'Cancel',
        external : false
    },
    {
        title    : 'About Me',
        url      : 'about',
        icon     : 'Caret',
        external : false
    },
    {
        title    : 'Elsewhere',
        url      : 'elsewhere',
        icon     : 'Group',
        external : false
    }
];

const MenuPage = React.createClass({

    displayName: 'MenuPage',

    render() {
        return (
            <div key='menu-page' className='menu-page__content'>
                <Branding />
                <MenuList menuItems={NAV_ITEMS} />
            </div>
        );
    },

});

export default MenuPage;
