/* global window */
/* global __ENVIRONMENT__ */
'use strict';

if (__ENVIRONMENT__ === 'ci') {
    require('../node_modules/disyntegration/phantom-shims');
}

var React  = require('react');
var routes = require('./routes');

window.React = React;

React.initializeTouchEvents(true);

React.renderComponent(routes, window.document.body);
