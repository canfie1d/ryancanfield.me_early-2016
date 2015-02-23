/* jshint globalstrict: true */
/* global navigator */
'use strict';

module.exports = {

    /**
     * Translate function that returns a message from the intl file.
     * The message returned is dependent on the language of the browser.
     * Defaults to en-us if the message doesn't exist for the current language.
     *
     * @param  string path   The path of the message in the intl file
     * @return string        Translated message
     */
    t : function(path)
    {
        try {
            return this.getIntlMessage(navigator.language + '.' + path);
        } catch(e) {
            try {
                return this.getIntlMessage('en-us.' + path);
            } catch (e) {
                return '{' + path + '}';
            }
        }
    }
};
