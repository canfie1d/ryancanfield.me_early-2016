import React from 'react';
import { Provider } from 'react-redux';
import { createHistory } from 'history/lib';
import { Router } from 'react-router';
import routes from './routes';
import store from './store';
import DevTools from './dev-tools-component';

const history = createHistory();

let createAppElement = (Component, props) => {
    return <Component {...props} />;
};

let renderDevToolsIfInDev = () => { //eslint-disable-line react/no-multi-comp
    if (process.env.NODE_ENV === 'development') {
        return <DevTools />;
    }

    return null;
};

module.exports = (
    <Provider store={store}>
        <div>
            {renderDevToolsIfInDev()}
            <Router
                createElement = {createAppElement}
                history       = {history}
            >
                {routes}
            </Router>
        </div>
    </Provider>
);
