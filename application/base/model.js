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

    return Backbone.Model.extend({
        initialize : function()
        {
            _.extend(Backbone.Model.prototype, SyncMachine);

            Backbone.Model.prototype.initialize.apply(this, arguments);
        }
    });
});