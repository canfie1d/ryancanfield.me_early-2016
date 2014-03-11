define([
    'base/collection',
    'models/user'
], function(
    BaseCollection,
    UserModel
) {
    'use strict';

    return BaseCollection.extend({
        model: UserModel
    });
});