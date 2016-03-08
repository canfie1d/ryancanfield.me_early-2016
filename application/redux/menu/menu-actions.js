import store from 'store';

export const HOVER_NAV_ITEM    = 'HOVER_NAV_ITEM';
export const TOGGLE_MOBILE_NAV = 'TOGGLE_MOBILE_NAV';

export function toggleNavItem(item) {
    return {
        type           : HOVER_NAV_ITEM,
        currentNavItem : item
    };
};

export function toggleMobileNav() {
    return {
        type : TOGGLE_MOBILE_NAV
    };
};
