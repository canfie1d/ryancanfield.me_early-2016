'use strict';

var fs     = require('fs');
var React  = require('react');
var tmpl   = require('blueimp-tmpl').tmpl;
var _      = require('underscore');

var Flux   = require('../application/flux');
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
    var flux, legacy, router;

    flux   = new Flux();
    legacy = useLegacy(req.useragent);
    router = new Router(req.url, res);

    router.run(function (Handler, state) {
        flux.fetchData(state).done(function () {
            var Factory, title;

            Factory = React.createFactory(Handler);
            title   = flux.getTitle(state, config.app.title);

            res.send(tmpl('index.html', {
                css  : (__ENVIRONMENT__ === 'production') || legacy,
                html : React.renderToString(new Factory({
                    flux   : flux,
                    params : state.params,
                    query  : state.query
                })),
                legacy : legacy,
                state  : JSON.stringify(flux.toObject()),
                title  : title
            }));
        });
    });
};
