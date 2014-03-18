/** @jsx React.DOM */
define([
    'react',
    'lib/mediator',
    'templates/mixins/router',
    'templates/layout/site',
    'templates/home',
    'templates/login',
    'templates/receive-token',
    'templates/account/change-email',
    'templates/account/change-password',
    'templates/404'
], function(
    React,
    mediator,
    RouterMixin,
    SiteLayoutComponent,
    HomeModule,
    LoginModule,
    ReceiveTokenModule,
    ChangeEmailModule,
    ChangePasswordModule,
    NotFoundComponent
) {

    return React.createClass({

        displayName : 'PageRoot',
        mixins      : [ RouterMixin ],

        routes : {
            'home' : {
                route     : '',
                component : HomeModule,
                container : SiteLayoutComponent
            },

            'login' : {
                route     : 'login',
                component : LoginModule,
                container : SiteLayoutComponent
            },

            'receive-token' : {
                route     : 'receive-token',
                component : ReceiveTokenModule,
                container : SiteLayoutComponent
            },

            'account-change-email' : {
                route    : 'account/change-email',
                component: ChangeEmailModule,
                container: SiteLayoutComponent
            },

            'account-change-password' : {
                route    : 'account/change-password',
                component: ChangePasswordModule,
                container: SiteLayoutComponent
            },

            // This must always be registered last or it will catch everything
            '*unknown' : {
                route     : '*unknown',
                component : NotFoundComponent,
                container : SiteLayoutComponent
            }
        },

        getInitialState : function()
        {
            if (window.app.token) {
                return {
                    loggedIn : true,
                    loading  : true,
                    user     : false
                };
            } else {
                return {
                    loggedIn : false,
                    user     : false
                };
            }
        },

        componentWillMount : function()
        {
            mediator.subscribe('!user:auth', _.bind(function(loggedIn, user) {
                this.setState({
                    loggedIn : loggedIn,
                    loading  : false,
                    user     : user || false
                });
            }, this));

            window.app.loadUserFromToken();
        },

        render : function()
        {
            if (this.state.componentName !== null)
            {
                var component = this.state.componentName;

                if (this.state.loading) {
                    return <div>LOADING!</div>;
                } else {
                    return (
                        <SiteLayoutComponent>
                            <component
                                params={this.state.params}
                                loggedIn={this.state.loggedIn}
                                user={this.state.user}
                                queryParams={this.state.queryParams}
                            />
                        </SiteLayoutComponent>
                    );
                }
            }
            else
            {
                return <div></div>;
            }
        }

    });
});
