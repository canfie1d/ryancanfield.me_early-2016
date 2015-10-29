/* globals window */
'use strict';

let config   = require('./config');
let React    = require('react');
let ReactDOM = require('react-dom');
let Flux     = require('./flux');
let routes   = require('./routes');

import { Router } from 'react-router';
import { createHistory } from 'history/lib';
import { BatchedUpdates } from 'react/lib/ReactUpdates';

window.React = React;

let flux        = new Flux();
let oldDispatch = flux.dispatcher.dispatch.bind(flux.dispatcher);
let state       = window.document.getElementById('server-state');

flux.dispatcher.dispatch = action => new BatchedUpdates(() => {
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

let locales;

if (typeof window.navigator.languages !== 'undefined') {
    locales = window.navigator.languages;
} else if(typeof window.navigator.language !== 'undefined') {
    locales = [window.navigator.language];
} else {
    locales = ['en-US'];
}

if (locales.indexOf('en-US') === -1 && locales.indexOf('en-us') === -1) {
    locales.push('en-US');
}

let history = createHistory();

let createFluxElement = (Component, props) => {
    return (
        <Component
            flux     = {flux}
            locales  = {locales}
            {...props}
        />
    );
};

ReactDOM.render(
    <Router
        createElement = {createFluxElement}
        history       = {history} >
        {routes}
    </Router>
    , document.getElementById('app')
);
