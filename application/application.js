define([
    'underscore',
    'jquery',
    'backbone',
    'react',
    'lib/mediator',
    'templates/body'
], function(
    _,
    $,
    Backbone,
    React,
    mediator,
    Body
) {
    'use strict';

    window.app          = {};
    window.app.mediator = mediator;
    window.app.react    = React.renderComponent(Body({}), document.body);

});
