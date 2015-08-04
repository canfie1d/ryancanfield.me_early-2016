/* jshint unused: false */
'use strict';

let React    = require('react'); // Used in compiled js, so required even though appears unused
let Router   = require('react-router');
let Route    = Router.Route;
let Redirect = Router.Redirect;

let SiteLayout         = require('./ui/layouts/site');
let HomePage           = require('./ui/pages/home');
let PatternLibraryPage = require('./ui/pages/pattern-library');
let NotFoundPage       = require('./ui/pages/404');
let FormattingPage     = require('./ui/pages/formatting');

let getEnvironmentDependentRoutes = function()
{
    let routes = [];

    if (__ENVIRONMENT__ !== 'production') {
        routes = routes.concat([
            <Route path='/formatting' name='formatting' handler={FormattingPage} key='formatting'/>,
            <Route path='/pattern-library/:section' name='pattern-library-section' handler={PatternLibraryPage} key='pattern-library-section'/>,
            <Redirect from='/pattern-library' name='pattern-library' key='pattern-library' to='/pattern-library/all' />
        ]);
    }

    return routes;
};

module.exports = (
    <Route handler={SiteLayout}>
        <Route path='/' name='home' handler={HomePage}/>
        {getEnvironmentDependentRoutes()}
        <Route path='*' name='404' handler={NotFoundPage}/>
    </Route>
);
