/* global __ENVIRONMENT__ */
import React from 'react';
import { Route, Redirect, IndexRoute } from 'react-router';

import SiteLayout from './ui/layouts/site';
import ConceptsPage from './ui/pages/concepts';
import ProjectsPage from './ui/pages/projects';
import AboutPage from './ui/pages/about';
import ElsewherePage from './ui/pages/elsewhere';
import NotFoundPage from './ui/pages/404';
import SecretPage from './ui/pages/secret';

export default (
    <Route path="/" component={SiteLayout}>
        <IndexRoute component={ProjectsPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/concepts" component={ConceptsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/elsewhere" component={ElsewherePage} />
        <Route path="/secret" component={SecretPage} />
        <Route path="*" component={NotFoundPage} />
    </Route>
);
