/* jshint globalstrict: true */
'use strict';

module.exports = {
    api : {
        hostname : '%PRODUCTION_APP_HOST%',
        port     : 80
    },
    proxy : {
        url : '%PRODUCTION_API_HOST%'
    }
};
