/* jshint globalstrict: true, unused: false */
/* globals __ENVIRONMENT__ */
'use strict';

var React  = require('react'); // Used in compiled js, so required even though appears unused
var Router = require('react-router');
var Route  = Router.Route;

var SiteLayout         = require('./ui/layouts/site');
var HomePage           = require('./ui/pages/home');
var PatternLibraryPage = require('./ui/pages/pattern-library');
var NotFoundPage       = require('./ui/pages/404');

var getEnvironmentDependentRoutes = function()
{
    var routes = [];

    if (__ENVIRONMENT__ !== 'production') {
        routes = routes.concat([
            <Route path='/pattern-library' name='pattern-library' handler={PatternLibraryPage} key='pattern-library'/>,
            <Route path='/pattern-library/:section' name='pattern-library-section' handler={PatternLibraryPage} key='pattern-library-section'/>
        ]);
    }

    return routes;
};

var routes = (
    <Route handler={SiteLayout}>
        <Route path='/' name='home' handler={HomePage}/>
        {getEnvironmentDependentRoutes()}
        <Route path='*' name='404' handler={NotFoundPage}/>
    </Route>
);

module.exports = Router.create({
    routes   : routes,
    location : Router.HistoryLocation
});
