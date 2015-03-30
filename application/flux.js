'use strict';

var BatchedUpdates = require('react/lib/ReactUpdates').batchedUpdates;
var Fluxxor        = require('fluxxor');
var stores         = require('./stores');
var actions        = require('./actions');

var dispatch, flux;

flux     = new Fluxxor.Flux(stores, actions);
dispatch = flux.dispatcher.dispatch.bind(flux.dispatcher);

flux.dispatcher.dispatch = function(action) {
    BatchedUpdates(function () {
        dispatch(action);
    });
};

module.exports = flux;
