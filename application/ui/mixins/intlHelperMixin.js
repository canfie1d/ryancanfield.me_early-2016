/* jshint globalstrict: true */
/* global navigator */
'use strict';

module.exports = {

    /**
     * Translate function that returns a message from the intl file.
     * The message returned is dependent on the language of the browser.
     * Defaults to en-us if the message doesn't exist for the current language.
     * If neither is found, the final portion of the path is returned
     *
     * @param  string path   The path of the message in the intl file
     * @return string        Translated message
     */
    t : function(path)
    {
        var messages  = this.props.messages || this.context.messages;
        var langPath  = navigator.language + '.' + path;
        var pathParts = langPath.split('.');

        var message;

        try {
            message = pathParts.reduce(function (obj, pathPart) {
                return obj[pathPart];
            }, messages);

            if (message === undefined) {
                //Default to en-us, allows for partial page translation
                langPath  = 'en-us.' + path;
                pathParts = langPath.split('.');

                message = pathParts.reduce(function (obj, pathPart) {
                    return obj[pathPart];
                }, messages);
            }
        } finally {
            if (message === undefined) {
                return pathParts[pathParts.length-1];
            }
        }

        return message;
    }
};
