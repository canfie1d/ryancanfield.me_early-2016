/* globals window */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import { Router } from 'react-router';
import { createHistory } from 'history/lib';

window.React = React;

const history = createHistory();

ReactDOM.render(
    <Router history={history}>
        {routes}
    </Router>
    , document.getElementById('app')
);
