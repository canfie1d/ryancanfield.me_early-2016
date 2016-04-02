import React    from 'react';
import MenuList from '../components/list/menu-list';
import Branding from '../components/branding/branding';

const NAV_ITEMS = [
    {
        title    : 'Work',
        url      : 'work',
        icon     : 'Back',
        external : false
    },
    {
        title    : 'Process',
        url      : 'process',
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
                <MenuList menuItems={NAV_ITEMS} fixW />
            </div>
        );
    },

});

export default MenuPage;
