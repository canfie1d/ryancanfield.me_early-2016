'use strict';

module.exports = {
    options : {
        context : {
            PROJECT_NAME : '<%= projectName %>'
        }
    },
    development : {
        files : {
            '<%= distdir %>/index.html' : 'application/_index.html'
        },
        options: {
            context : {
                ENVIRONMENT : 'development'
            }
        }
    },
    qa : {
        files : {
            '<%= distdir %>/index.html' : 'application/_index.html'
        },
        options: {
            context : {
                ENVIRONMENT : 'qa'
            }
        }
    },
    production : {
        files : {
            '<%= distdir %>/index.html' : 'application/_index.html'
        },
        options: {
            context : {
                ENVIRONMENT : 'production'
            }
        }
    }
};