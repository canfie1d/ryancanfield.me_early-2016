'use strict';

let React        = require('react');
let RouteHandler = require('react-router').RouteHandler;
let FluxMixin    = require('fluxxor').FluxMixin(React);
let IntlMixin    = require('s19n');

module.exports = React.createClass({

    displayName : 'SiteLayout',

    mixins : [IntlMixin, FluxMixin],

    render()
    {
        return (
            <div className='l--app-wrapper'>
                <RouteHandler />
            </div>
        );
    }

});
