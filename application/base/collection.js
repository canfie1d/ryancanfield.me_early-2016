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
        initialize : function(models, options)
        {
            _.extend(Backbone.Collection.prototype, SyncMachine);

            Backbone.Collection.prototype.initialize.apply(this, arguments);
            
            this.options = options || {};
        }
    });
});
