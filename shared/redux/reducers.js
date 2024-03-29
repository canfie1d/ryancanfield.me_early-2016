import { combineReducers }              from 'redux';
import { createResponsiveStateReducer } from 'redux-responsive';
import menu                             from './menu/menu-reducers';

const app = combineReducers({
    browser: createResponsiveStateReducer({
        extraSmall: 480,
        mediumSmall: 640,
        small: 768,
        medium: 1024,
        large: 1280,
        extraLarge: 1400,
    }),
    menu : menu
});

export default app;
