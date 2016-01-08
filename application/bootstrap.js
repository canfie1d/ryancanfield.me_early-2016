/* globals window */
'use strict';

import React from 'react';
import ReactDOM, { unstable_batchedUpdates } from 'react-dom';
import routes from './routes';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import { createHistory } from 'history/lib';
import { addResponsiveHandlers } from 'redux-responsive';

window.React = React;

import './ui/scss/app';
import app from './redux/reducers';

/**************************************************************************
 * MIDDLEWARE
 *************************************************************************/
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let store = applyMiddleware(thunk)(createStore)(app);

addResponsiveHandlers(store);

const history = createHistory();

let createAppElement = (Component, props) => {
    return <Component {...props} />;
};

ReactDOM.render(
    <Provider store={store}>
        <Router
            createElement = {createAppElement}
            history       = {history}
        >
            {routes}
        </Router>
    </Provider>
    , document.getElementById('app')
);
