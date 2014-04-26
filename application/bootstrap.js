/* global window */

'use strict';

var Application = require('./application');

var $        = require('jquery');
var Backbone = require('backbone');

Backbone.$ = $;

window.app = new Application();
window.app.start();