/* global __ENVIRONMENT__ */
import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import SiteLayout from './ui/layouts/site';
import MenuPage from './ui/pages/menu';
import ProcessPage from './ui/pages/process';
import WorkPage from './ui/pages/work';
import AboutPage from './ui/pages/about';
import ElsewherePage from './ui/pages/elsewhere';
import PatternLibraryPage from './ui/pages/pattern-library';
import NotFoundPage from './ui/pages/404';
import SecretPage from './ui/pages/secret';

function getEnvironmentDependentRoutes() {
    let routes = [];

    if (__ENVIRONMENT__ !== 'production') {
        routes = routes.concat([
            <Route path="/pattern-library/:section"
                component={PatternLibraryPage} key="pattern-library-section"
            />,
            <Redirect from="/pattern-library" key="pattern-library" to="/pattern-library/all"/>,
        ]);
    }

    return routes;
}

export default (
    <Route path="/" component={SiteLayout}>
        <IndexRoute component={MenuPage}/>
        <Route path="/work" component={WorkPage}/>
        <Route path="/process" component={ProcessPage}/>
        <Route path="/about" component={AboutPage}/>
        <Route path="/elsewhere" component={ElsewherePage}/>
        <Route path="/secret" component={SecretPage}/>
        {getEnvironmentDependentRoutes()}
        <Route path="*" component={NotFoundPage}/>
    </Route>
);
