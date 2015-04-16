'use strict';

var Fluxxor      = require('fluxxor');
var ReactUpdates = require('react/lib/ReactUpdates');
var stores       = require('./stores');
var actions      = require('./actions');

var dispatch, flux;

flux     = new Fluxxor.Flux(stores, actions);
dispatch = flux.dispatcher.dispatch.bind(flux.dispatcher);

flux.dispatcher.dispatch = function(action) {
    ReactUpdates.batchedUpdates(function () {
        dispatch(action);
    });
};

module.exports = flux;
