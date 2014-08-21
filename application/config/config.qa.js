'use strict';

var backend = '/* @echo BACKEND */' || '%QA_APP_NAME%';

module.exports = {
    api : {
        hostname  : backend + '.%QA_HOST%',
        port      : 80,
        client_id : 'js-client'
    }
};
