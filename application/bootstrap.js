/* jshint globalstrict: true */
/* globals global, window */
'use strict';

var React  = require('react');
var router = require('./router');
var flux   = require('./flux');
var i18n   = require('./intl/intl');

require('./ui/scss/app');

window.React = React;

React.initializeTouchEvents(true);

// initialize i18n
if (!global.Intl) {
    global.Intl = require('intl');
}

router.run(function (Handler, state) {
    var locales;
    if (typeof window.navigator.languages !== 'undefined') {
        locales = window.navigator.languages;
    } else if(typeof window.navigator.language !== 'undefined') {
        locales = [window.navigator.language];
    } else {
        locales = [ 'en-US' ];
    }
    React.render(
        React.createElement(Handler, {flux : flux, locales : locales, messages : i18n.messages}),
        window.document.body
    );
});
