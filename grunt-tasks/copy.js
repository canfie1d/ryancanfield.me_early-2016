'use strict';

/**
 * `grunt copy` just copies files from A to B. We use it here to copy our
 * project assets (images, fonts, etc.) into our distribution directory.
 */
module.exports = {
    images : {
        files : [
            {
                src    : ['**'],
                cwd    : 'media',
                dest   : '<%= distdir %>',
                expand : true
            }
        ]
    }
};