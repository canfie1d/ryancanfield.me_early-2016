'use strict';

var BaseCollection = require('base/collection');
var UserModel      = require('models/user');

module.exports = BaseCollection.extend({
    model: UserModel
});