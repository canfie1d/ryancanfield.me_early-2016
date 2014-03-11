/** @jsx React.DOM */
define([
    'react',
    'templates/mixins/router',
    'templates/layout/site',
    'templates/home',
    'templates/login',
    'templates/404'
], function(
    React,
    RouterMixin,
    SiteLayoutComponent,
    HomeModule,
    LoginModule,
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

            // This must always be registered last or it will catch everything
            '*unknown' : {
                route     : '*unknown',
                component : NotFoundComponent,
                container : SiteLayoutComponent
            }
        },

        render : function() {

            if (this.state.componentName !== null)
            {
                var component = this.state.componentName;

                return (
                    <SiteLayoutComponent>
                        <component params={this.state.params} />
                    </SiteLayoutComponent>
                );
            }
            else
            {
                return <div></div>;
            }
        }

    });
});
