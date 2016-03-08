import _                   from 'lodash';
import { combineReducers } from 'redux';
import { HOVER_NAV_ITEM, TOGGLE_MOBILE_NAV }  from './menu-actions';

let currentNavItem = (state = '', action) => {
    if (action.type === HOVER_NAV_ITEM) {
        return action.currentNavItem;
    }
    return state;
};

let navMenu = (state = false, action) =>
{
    if (action.type === TOGGLE_MOBILE_NAV) {
        return !state;
    }
    return state;
};

const navMenus = combineReducers({
    currentNavItem,
    navMenu
});

export default navMenus;
