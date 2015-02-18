/* jshint globalstrict: true */
'use strict';

var React = require('react');

module.exports = React.createClass({

    displayName : 'HomeModule',

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
                <h1 style={style1}>{'Frontend Template'}</h1>
                <h2 style={style2}>{'...sorry the name isn\'t better.'}</h2>
            </div>
        );

    }

});
