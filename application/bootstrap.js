'use strict';

var React          = require('react');
var BatchedUpdates = require('react/lib/ReactUpdates').batchedUpdates;

// initialize i18n
if (! window.Intl) {
    window.Intl = require('intl');
}

var i18n   = require('./intl/intl');
var Flux   = require('./flux');
var Router = require('./router');

require('./media.js');

window.React = React;

React.initializeTouchEvents(true);

var flux        = new Flux();
var oldDispatch = flux.dispatcher.dispatch.bind(flux.dispatcher);
var router      = new Router();
var state       = window.document.getElementById('server-state');

flux.dispatcher.dispatch = function (action) {
    new BatchedUpdates(function () {
        oldDispatch(action);
    });
};

if (state) {
    flux = flux.fromObject(window.__STATE__);
    state.remove();
}

router.run(function (Handler, state) {
    var locales;

    if (typeof window.navigator.languages !== 'undefined') {
        locales = window.navigator.languages;
    } else if(typeof window.navigator.language !== 'undefined') {
        locales = [window.navigator.language];
    } else {
        locales = ['en-US'];
    }

    if (locales.indexOf('en-US') === -1 && locales.indexOf('en-us') === -1) {
        locales.push('en-US');
    }

    window.document.title = flux.getTitle(state, 'Frontend Template');

    React.render(
        React.createElement(Handler, {
            flux : flux,
            locales : locales,
            messages : i18n.messages
        }),
        window.document.body
    );
});
