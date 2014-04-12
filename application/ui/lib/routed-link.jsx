/** @jsx React.DOM */
define([
    'underscore',
    'react',
    'compiled/mixins/navigate'
], function(
    _,
    React,
    NavigateMixin
) {
    'use strict';

    React.DOM.$a = React.DOM.a;

    React.DOM.a = function (props) {
        if ( ! props.onClick) {
            props.onClick = NavigateMixin.navigate;
        }

        if (arguments.length > 1) {
            var args = _.toArray(arguments).slice(1);
            args.unshift(props);

            return React.DOM.$a.apply(this, args);
        } else {
            return React.DOM.$a.call(this, props);
        }
    };

});
