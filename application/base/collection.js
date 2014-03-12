define([
    'underscore',
    'backbone',
    'lib/sync-machine'
], function(
    _,
    Backbone,
    SyncMachine
) {
    'use strict';

    return Backbone.Collection.extend({
        initialize : function()
        {
            _.extend(Backbone.Collection.prototype, SyncMachine);

            Backbone.Collection.prototype.initialize.apply(this, arguments);
        }
    });
});