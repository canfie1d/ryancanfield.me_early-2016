/** @jsx React.DOM */

'use strict';

var window              = require('jswindow-shim');
var React               = require('react');
var $                   = require('synapse-common').loaders.jquery(window);
var EventsMixin         = require('synapse-common').mixins.events;
var RouterMixin         = require('synapse-common').mixins.router;
var SiteLayoutComponent = require('./pages/layout/site');

module.exports = React.createClass({

    displayName : 'PageRoot',
    mixins      : [ RouterMixin, EventsMixin ],

    routes : require('./routes'),

    onRouteMatch : function(route, params, options)
    {
        var windowScrollTop = $(window).scrollTop();

        // If we have more than 1.5x the viewport to get to the top of the page, don't animate
        if (windowScrollTop > ($(window).height() * 1.5))
        {
            $('body, html').scrollTop(0);
        }
        else
        {
            $('body, html').animate({scrollTop: 0}, 400);
        }

        if (window.clicky) {
            var href = '/' + route.path,
                title = (typeof options.title === 'function') ? options.title(params) : options.title;

            window.clicky.log(href, title, 'pageview');
        }

        this.setState({
            routeData : {
                route   : route,
                params  : params,
                options : options
            }
        });
    },

    getInitialState : function()
    {
        return {
             routeData : {},
             loading : (window.app.token) ? true : false,
             loggedIn : (window.app.token) ? true : false,
             user     : false
        };
    },

    componentWillMount : function()
    {
        this.subscribe('router:match', this.onRouteMatch, this);
        this.subscribe('!user:auth', _.bind(function(loggedIn, user) {
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
            var site,
                component = this.state.componentName;

            if (this.state.loading) {
                site = (<div>{'Loading...'}</div>);
            } else {
                site = (
                    <SiteLayoutComponent routeData={this.state.routeData} loggedIn={this.state.loggedIn} user={this.state.user}>
                        <component params={this.state.params} loggedIn={this.state.loggedIn} user={this.state.user} queryParams={this.state.queryParams} />
                    </SiteLayoutComponent>
                );
            }

            return site;
        }
        else
        {
            return <div></div>;
        }
    }

});
