'use strict';

var backend = '/* @echo BACKEND */' || '%QA_API_HOST%';

module.exports = {
    api : {
        hostname  : backend,
        port      : 80,
        client_id : 'js-client'
    }
};