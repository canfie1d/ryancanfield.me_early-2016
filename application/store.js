import './ui/scss/app';
import app from './redux/reducers';
import { addResponsiveHandlers } from 'redux-responsive';
import { compose, createStore, applyMiddleware } from 'redux';
import { persistState } from 'redux-devtools';
import DevTools from './dev-tools-component';

// middleware
import thunk from 'redux-thunk';

let storeEnhancer = applyMiddleware(thunk);

const getDebugSessionKey = () => {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
};

// Enable redux dev-tools in development
if (process.env.NODE_ENV === 'development') {
  storeEnhancer = compose(
    storeEnhancer,
    DevTools.instrument(),
    persistState(getDebugSessionKey())
  );
}

const store = storeEnhancer(createStore)(app);

addResponsiveHandlers(store);

export default store;
