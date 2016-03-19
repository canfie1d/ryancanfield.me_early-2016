import _                   from 'lodash';
import { combineReducers } from 'redux';
import { HOVER_MENU_ITEM } from './menu-actions';

let currentMenuItem = (state = '', action) => {
    if (action.type === HOVER_MENU_ITEM) {
        return action.currentMenuItem;
    }
    return state;
};

const menus = combineReducers({
    currentMenuItem
});

export default menus;
