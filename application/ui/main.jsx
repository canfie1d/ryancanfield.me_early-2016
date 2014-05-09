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

    componentWillMount : function()
    {
        this.subscribe('router:match', this.onRouteMatch, this);
    },

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
             routeData : {}
        };
    },

    render : function()
    {
        if (this.state.componentName !== null)
        {
            var component = this.state.componentName;

            var site = (
                <SiteLayoutComponent routeData={this.state.routeData}>
                    <component params={this.state.params} />
                </SiteLayoutComponent>
            );

            return site;
        }
        else
        {
            return <div></div>;
        }
    }

});
