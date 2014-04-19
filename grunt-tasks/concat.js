'use strict';

module.exports = {
    headerJs : {
        src: [
            'bower_components/modernizr/modernizr.js'
        ],
        dest: '<%= distdir %>/js/vendor-header.js'
    },

    headerCss : {
        src: [
            'bower_components/font-awesome/css/font-awesome.min.css'
        ],
        dest: '<%= distdir %>/css/vendor-header.css'
    }
};