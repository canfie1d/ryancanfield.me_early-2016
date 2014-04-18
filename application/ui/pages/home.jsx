/** @jsx React.DOM */
define([
    'react'
], function(
    React
) {

    return React.createClass({

        displayName    : 'HomeModule',

        render : function()
        {
            if (this.props.loggedIn) {
                return (
                    <div>
                        <p>
                            <a route='account-change-password'>Change email</a><br />
                            <a route='account-change-password'>Change password</a>
                        </p>
                        <p>
                            <a href="http://project.vm/social-login/github/link">Link GitHub account</a><br />
                            <a href="http://project.vm/social-login/facebook/link">Link Facebook account</a><br />
                            {/*
                                Google only allows 'localhost" as a non-public domain for callback URLs.
                                This link won't work unless the URLs in models/user.js are also changed to 'localhost'.
                            */}
                            <a href="http://localhost/social-login/google/link">Link Google account</a><br />
                        </p>
                    </div>
                );
            } else {
                return (
                    <div>
                        <p>
                            Or <a href="http://project.vm/social-login/github">log in with GitHub</a>.
                        </p>
                        <p>
                            Or <a href="http://project.vm/social-login/facebook">log in with Facebook</a>.
                        </p>
                        <p>
                            {/* Google only allows "localhost" as a non-public domain for callback URLs. */}
                            Or <a href="http://localhost/social-login/google">log in with Google</a>.
                        </p>
                    </div>
                );
            }
        }

    });
});
