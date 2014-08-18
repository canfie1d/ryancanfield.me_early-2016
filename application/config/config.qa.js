'use strict';

var backend = '<%- BACKEND %>';

if (! backend.length)
{
    backend = 'api-project-com-qa';
}

backend += '.synsit.es';

module.exports = {
    api : {
        hostname      : backend,
        port          : 80,
        client_id     : 'js-client'
    }
};
