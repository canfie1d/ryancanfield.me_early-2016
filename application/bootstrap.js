/* globals window */
'use strict';
// Must be done before anything else because safari
if (! global.Intl) {
    global.Intl = window.Intl = require('intl');
}

import React from 'react';
import ReactDOM, { unstable_batchedUpdates } from 'react-dom';
import Flux from './flux';
import routes from './routes';
import config from './config';
import { Router } from 'react-router';
import { createHistory } from 'history/lib';

window.React = React;

let flux        = new Flux();
const oldDispatch = flux.dispatcher.dispatch.bind(flux.dispatcher);
let state       = window.document.getElementById('server-state');

flux.dispatcher.dispatch = action => new unstable_batchedUpdates(() => {
    oldDispatch(action);
});

if (state) {
    flux = flux.fromObject(window.__STATE__);

    if (state.remove) {
        state.remove();
    } else if (state.removeNode) {
        state.removeNode();
    }
}

const history = createHistory();

const createFluxElement = (Component, props) => {
    return (
        <Component
            flux = {flux}
            {...props}
        />
    );
};

ReactDOM.render(
    <Router
        createElement = {createFluxElement}
        history = {history} >
        {routes}
    </Router>
    , document.getElementById('app')
);
