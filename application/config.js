/* globals __BACKEND__, __ENVIRONMENT__ */
'use strict'; // eslint-disable-line

const merge = require('lodash').merge;

let defaults;
let config;

defaults = {
    api: {

    // jscs:disable
        client_id: '123',
    // jscs:enable
        oauth: {
            login: '/oauth/access-token',
            logout: '/oauth/logout',
        },
        prefix: '/api',
    },
    app: {
        title: 'Credibly',
    },
    proxy: {
        hostname: __BACKEND__,
    },
};

// __ENVIRONMENT__ is replaced by webpack during build
switch (__ENVIRONMENT__) {
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
        throw new Error(`Invalid ENVIRONMENT value: ${__ENVIRONMENT__}`);
}

module.exports = merge({}, defaults, config);
