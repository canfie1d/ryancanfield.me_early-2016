'use strict';

var backend = '/* @echo BACKEND */' || 'api-project-com';

module.exports = {
    api : {
        hostname  : backend + '.synsit.es',
        port      : 80,
        client_id : 'js-client'
    }
};
