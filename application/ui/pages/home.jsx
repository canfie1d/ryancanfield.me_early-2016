/* jshint globalstrict: true */
'use strict';

var React           = require('react');
var ReactIntl       = require('react-intl');
var IntlMixin       = ReactIntl.IntlMixin;
var IntlHelperMixin = require('../mixins/intlHelperMixin');

module.exports = React.createClass({

    displayName : 'HomeModule',

    mixins: [
        IntlMixin,
        IntlHelperMixin
    ],

    render : function() {
        var style1,
            style2;

        style1 = {
            'textAlign'  : 'center',
            'marginTop'  : '200px',
            'fontSize'   : '80px',
            'fontWeight' : 'bold'
        };

        style2 = {
            'textAlign' : 'center',
            'fontSize'  : '20px'
        };

        return (
            <div>
                <h1 style={style1}>{this.t('home.title')}</h1>
                <h2 style={style2}>{this.t('home.content')}</h2>
            </div>
        );

    }

});
