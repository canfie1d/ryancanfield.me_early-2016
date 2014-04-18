/** @jsx React.DOM */
define([
    'react'
], function(
    React
) {

    return React.createClass({

        displayName : 'LoggedOutHeaderSection',

        render : function() {
            return (
                <p>
                    Please
                    <a route="login">log in</a> or
                    <a route="register">register</a>.
                </p>
            );
        }
    });
});
