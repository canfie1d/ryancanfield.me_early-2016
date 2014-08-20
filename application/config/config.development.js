'use strict';

var backend = '/* @echo BACKEND */' || 'api.project.vm';

module.exports = {
    api : {
        hostname  : backend,
        port      : 80,
        client_id : 'js-client'
    }
};
