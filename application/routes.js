import React from 'react';
import { Route, Redirect, IndexRoute, IndexRedirect } from 'react-router';

import SiteLayout         from './ui/layouts/site';
import WelcomePage        from './ui/pages/welcome';
import PatternLibraryPage from './ui/pages/pattern-library';
import NotFoundPage       from './ui/pages/404';
import AboutPage          from './ui/pages/about';
import WorkPage           from './ui/pages/work';
import ElsewherePage      from './ui/pages/elsewhere';

export default (
    <Route path='/' component={SiteLayout}>
        <IndexRoute component={WelcomePage} />
        <IndexRedirect to='welcome'/>
        <Route path='welcome' component={WelcomePage}/>
        <Route path='about' component={AboutPage}/>
        <Route path='work' component={WorkPage}/>
        <Route path='elsewhere' component={ElsewherePage}/>
        <Route path='pattern-library/:section' component={PatternLibraryPage} key='pattern-library-section'/>,
        <Redirect from='pattern-library' key='pattern-library' to='/pattern-library/all' />
        <Route path='*' component={NotFoundPage}/>
    </Route>
);
