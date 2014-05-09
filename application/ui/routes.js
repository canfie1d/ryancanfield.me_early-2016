'use strict';

var SiteLayoutComponent = require('./pages/layout/site');
var HomeModule          = require('./pages/home');
var NotFoundComponent   = require('./pages/404');

module.exports = {
    'home' : {
        route     : '',
        component : HomeModule,
        container : SiteLayoutComponent,
        options   : {
            title   : '@todo replace with page title',
            favicon : '/images/favicons/favicon.png',
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

    // This must always be registered last or it will catch everything
    '*unknown' : {
        route     : '*unknown',
        component : NotFoundComponent,
        container : SiteLayoutComponent,
        options   : {
            favicon : contextToFavicon,
            title   : '@todo replace with page title'
        }
    }
};
