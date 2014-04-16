/** @jsx React.DOM */
define([
    'react',
    'compiled/components/layout/header/user-logged-in',
    'compiled/components/layout/header/user-logged-out'
], function(
    React,
    LoggedIn,
    LoggedOut
) {

    return React.createClass({

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
});
