/* global window */
'use strict';

var React  = require('react');
var router = require('./router');
var flux   = require('./flux');

require('./ui/scss/app');

window.React = React;

React.initializeTouchEvents(true);

router.run(function (Handler, state) {
    React.render(React.createElement(Handler, {flux : flux}), window.document.body);
});
