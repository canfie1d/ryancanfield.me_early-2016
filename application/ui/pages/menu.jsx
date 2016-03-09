import React      from 'react';
import Navigation from '../components/navigation/navigation';
import Branding   from '../components/branding/branding';

const NAV_ITEMS = [
    {
        title : 'Selected Work',
        url   : 'work'
    },
    {
        title : 'Code Snippets',
        url   : 'snippets'
    },
    {
        title : 'About Me',
        url   : 'about'
    },
    {
        title : 'Elsewhere',
        url   : 'elsewhere'
    }
];

const MenuPage = React.createClass({

    displayName: 'MenuPage',

    render() {

        return (
            <div key='menu-page' className='menu-page__content'>
                <Branding />
                <Navigation navItems={NAV_ITEMS} />
            </div>
        );
    },

});

export default MenuPage;
