/** @jsx React.DOM */
'use strict';

var ReactRouter = require('react-router');
var Route       = ReactRouter.Route;

var SiteLayout   = require('./ui/layouts/site');
var HomePage     = require('./ui/pages/home');
var LoginPage    = require('./ui/pages/login');
var NotFoundPage = require('./ui/pages/404');

module.exports = function(flux) {
    return (
        <Route handler={SiteLayout} flux={flux} location='history'>
            <Route name='home'
                   path='/'
                   handler={HomePage}
                   flux={flux}/>
            <Route name='login'
                   path='/login'
                   handler={LoginPage}
                   flux={flux}/>
            <Route path='*'
                   handler={NotFoundPage}
                   flux={flux}/>
        </Route>
    );
};
