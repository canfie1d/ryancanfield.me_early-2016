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

    function Application() {
        this.mediator = mediator;
        this.react    = React.renderComponent(Body({}), document.body);

        this.storage  = window.store;

        if ( ! this.storage.enabled) {
            throw "Storage not supported";
        }
    }

    return Application;

});
