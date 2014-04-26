'use strict';

var BaseCollection = require('./base');
var UserModel      = require('../models/user');

module.exports = BaseCollection.extend({
    model: UserModel
});