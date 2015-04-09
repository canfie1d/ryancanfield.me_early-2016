/* jshint globalstrict: true */
/* global __ENVIRONMENT__ */
'use strict';

var merge = require('lodash').merge;

var defaults, config;

defaults = {
    api : {
        client_id : '123',
        hostname  : 'localhost',
        oauth     : {
            login : '/oauth/login',
            token : '/oauth/token'
        }
        port      : 9000,
        prefix    : '/api',
        url       : ''
    }
};

// __ENVIRONMENT__ is replaced by gulp during build
switch(__ENVIRONMENT__) {
    case 'ci':
        config = require('./config/ci');
        break;
    case 'development':
        config = require('./config/development');
        break;
    case 'qa':
        config = require('./config/qa');
        break;
    case 'production':
        config = require('./config/production');
        break;
    default:
        throw new Error('Invalid ENVIRONMENT value: ' + __ENVIRONMENT__);
}

module.exports = merge({}, defaults, config);
