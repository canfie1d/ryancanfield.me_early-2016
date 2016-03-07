import store from 'store';

export const TOGGLE_NAV_MENU = 'TOGGLE_NAV_MENU';

export function toggleNavMenu(menu) {
    return {
        type: TOGGLE_NAV_MENU,
        menu: menu
    };
}

export function toggleMobileNav() {
    return {
        type: TOGGLE_MOBILE_NAV
    };
}
