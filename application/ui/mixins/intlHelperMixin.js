/* jshint globalstrict: true */
/* global navigator */
'use strict';

module.exports = {
    t : function(path)
    {
        if (this.getChildContext().locales.indexOf(navigator.language) !== -1) {
            return this.getIntlMessage(navigator.language + '.' + path);
        } else {
            //Return en-us as default
            return this.getIntlMessage('en-us.' + path);
        }
    }
};
