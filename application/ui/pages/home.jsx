'use strict';

let React     = require('react');
let IntlMixin = require('s19n');

let url = require('../../media/images/raster/branding.png');

module.exports = React.createClass({

    displayName : 'HomePage',

    mixins : [IntlMixin],

    render()
    {
        let style1 = {
            'maxWidth'    : '400px',
            'marginTop'   : '180px',
            'marginLeft'  : 'auto',
            'marginRight' : 'auto',
            'display'     : 'block'
        };

        let style2 = {
            'textAlign'  : 'center',
            'marginTop'  : '40px',
            'fontSize'   : '80px',
            'fontWeight' : 'bold'
        };

        let style3 = {
            'textAlign' : 'center',
            'fontSize'  : '20px'
        };

        // There seems to be an issue resolving image urls correctly between the app and client
        if (! url.match(/^\//)) {
            url = '/' + url;
        }

        return (
            <div className='typography'>
                <img style={style1} src={url} alt='Synapse Logo' />
                <h1 style={style2}>{this.t('home.title')}</h1>
                <h2 style={style3}>{this.t('home.content')}</h2>
            </div>
        );
    }

});
