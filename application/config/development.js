'use strict';
/* global __BACKEND__ */

var backend;

backend = __BACKEND__ || '%DEV_API_HOST%';

module.exports = {
    api : {
        hostname  : backend,
        port      : 80,
        client_id : 'js-client'
    }
};
