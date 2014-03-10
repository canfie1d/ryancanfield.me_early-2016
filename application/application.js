define([
    'underscore',
    'jquery',
    'backbone',
    'react',
    'templates/body'
], function(
    _,
    $,
    Backbone,
    React,
    Body
) {
    'use strict';

    window.app             = {};
    window.app.eventBroker = _.extend({}, Backbone.Events);
    window.app.react       = React.renderComponent(Body({}), document.body);

});
