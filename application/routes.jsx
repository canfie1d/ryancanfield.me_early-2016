/* jshint unused: false */
'use strict';

import React                                   from 'react';
import { Router, Route, Redirect, IndexRoute } from 'react-router';

import SiteLayout         from './ui/layouts/site';
import HomePage           from './ui/pages/home';
import PatternLibraryPage from './ui/pages/pattern-library';
import NotFoundPage       from './ui/pages/404';

let getEnvironmentDependentRoutes = function()
{
    let routes = [];

    if (__ENVIRONMENT__ !== 'production') {
        routes = routes.concat([
            <Route path='/pattern-library/:section' component={PatternLibraryPage} key='pattern-library-section'/>,
            <Redirect from='/pattern-library' key='pattern-library' to='/pattern-library/all' />
        ]);
    }

    return routes;
};

module.exports = (
    <Route path='/' component={SiteLayout}>
        <IndexRoute component={HomePage}/>
        {getEnvironmentDependentRoutes()}
        <Route path='*' component={NotFoundPage}/>
    </Route>
);
