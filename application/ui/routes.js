'use strict';

var SiteLayoutComponent  = require('./layouts/site');
var HomeModule           = require('./pages/home');
var LoginModule          = require('./pages/account/login');
var RegisterModule       = require('./pages/account/register');
var ReceiveTokenModule   = require('./pages/account/receive-token');
var ChangeEmailModule    = require('./pages/account/change-email');
var ChangePasswordModule = require('./pages/account/change-password');
var NotFoundComponent    = require('./pages/404');

module.exports = {
    'home' : {
        route     : '',
        component : HomeModule,
        container : SiteLayoutComponent,
        options   : {
            title   : '@todo replace with page title',
            meta    : [
                {
                    name    : 'description',
                    content : '@todo replace with description'
                },
                {
                    name    : 'keywords',
                    content : '@todo replace with keywords'
                },
                {
                    name    : 'robots',
                    content : 'index,follow'
                },
                {
                    name    : 'og:title',
                    content : '@todo replace with title for facebook'
                },
                {
                    name    : 'og:description',
                    content : '@todo replace with description for facebook'
                }
            ]
        }
    },

    'login' : {
        route     : 'login',
        component : LoginModule,
        container : SiteLayoutComponent,
        options   : {
            title   : '@todo replace with page title'
        }
    },

    'register' : {
        route     : 'register',
        component : RegisterModule,
        container : SiteLayoutComponent,
        options   : {
            title   : '@todo replace with page title'
        }
    },

    'receive-token' : {
        route     : 'receive-token',
        component : ReceiveTokenModule,
        container : SiteLayoutComponent,
        options   : {
            title   : '@todo replace with page title'
        }
    },

    'account-change-email' : {
        route    : 'account/change-email',
        component: ChangeEmailModule,
        container: SiteLayoutComponent,
        options   : {
            title   : '@todo replace with page title'
        }
    },

    'account-change-password' : {
        route    : 'account/change-password',
        component: ChangePasswordModule,
        container: SiteLayoutComponent,
        options   : {
            title   : '@todo replace with page title'
        }
    },

    // This must always be registered last or it will catch everything
    '*unknown' : {
        route     : '*unknown',
        component : NotFoundComponent,
        container : SiteLayoutComponent,
        options   : {
            title : '@todo replace with page title'
        }
    }
};
