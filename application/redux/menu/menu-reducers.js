import _                     from 'lodash';
import { combineReducers }   from 'redux';
import store                 from 'store';
import { TOGGLE_NAV_MENU }   from './menu-actions';

let navMenu = (state = '', action) =>
{
    if (action.type === TOGGLE_NAV_MENU) {
        return action.menu;
    }

    return state;
};

const navMenus = combineReducers({
    navMenu
});

export default navMenus;
