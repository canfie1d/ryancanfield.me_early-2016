/** @jsx React.DOM */
'use strict';

var React     = require('react');
var LoggedIn  = require('./header/user-logged-in.jsx');
var LoggedOut = require('./header/user-logged-out.jsx');

module.exports = React.createClass({
    render : function() {
        var Component = (this.props.loggedIn) ? LoggedIn : LoggedOut;
        return (
            <div>
                <header>
                    <Component user={this.props.user} />
                </header>
                {this.props.children}
            </div>
        );
    }
});
