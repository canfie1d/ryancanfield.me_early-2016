'use strict';

var fs    = require('fs');
var React = require('react');
var tmpl  = require('blueimp-tmpl').tmpl;

var Flux   = require('../application/flux');
var i18n   = require('../application/intl/intl');
var Router = require('../application/router');
var config = require('../application/config');

require('../application/media');

tmpl.load = function (name) {
    return fs.readFileSync(process.cwd() + '/application/' + name, 'utf8');
};

function useLegacy(useragent) {
    return useragent.isBot || (useragent.isIE && Number(useragent.version) < 9);
}

module.exports = function(req, res) {
    var flux, legacy, locales, router;

    flux   = new Flux();
    legacy = useLegacy(req.useragent);
    router = new Router(req.url, res);

    if (typeof navigator.languages !== 'undefined') {
        locales = navigator.languages;
    } else if(typeof navigator.language !== 'undefined') {
        locales = [navigator.language];
    } else {
        locales = ['en-US'];
    }

    if (locales.indexOf('en-US') === -1 && locales.indexOf('en-us') === -1) {
        locales.push('en-US');
    }

    router.run(function (Handler, state) {
        flux.fetchData(state).done(function () {
            var Factory, title;

            Factory = React.createFactory(Handler);
            title   = flux.getTitle(state, config.app.title);

            res.send(tmpl('index.html', {
                css  : true,
                html : React.renderToString(new Factory({
                    flux     : flux,
                    locales  : locales,
                    messages : i18n.messages,
                    params   : state.params,
                    query    : state.query
                })),
                legacy : legacy,
                state  : JSON.stringify(flux.toObject()),
                title  : title
            }));
        });
    });
};
