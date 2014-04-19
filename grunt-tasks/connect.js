'use strict';

var modRewrite = require('connect-modrewrite');

module.exports = {
    server: {
        options: {
            port             : 9000,
            hostname         : '127.0.0.1',
            base             : ['<%= distdir %>'],
            useAvailablePort : true,
            keepalive        : true,
            middleware: function (connect, options, middlewares) {

                middlewares.unshift(modRewrite([
                    '!\\..*$ /index.html [L]'
                ]));

                return middlewares;
            }
        }
    }
};