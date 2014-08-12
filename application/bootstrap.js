/* global window */
'use strict';

var React       = require('react');
var flux        = require('./flux');
var getRoutes   = require('./routes');

window.React = React;
React.initializeTouchEvents(true);

React.renderComponent(getRoutes(flux), window.document.body);
