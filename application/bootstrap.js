
/* global __ENVIRONMENT__ */
'use strict';

if (__ENVIRONMENT__ === 'ci') {
    require('es5-shim');
    require('../node_modules/disyntegration/shim/click');
}

var React  = require('react');
var routes = require('./routes');

window.React = React;

React.initializeTouchEvents(true);

React.renderComponent(routes, window.document.body);
