import React from 'react';
import { render } from 'react-dom';
import { routerMiddleware } from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import thunk from 'redux-thunk';
import App from './components/App';
import { loadUsers } from './actions/userActions';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';

const history = createHistory();

let middleware = [
  thunk,
  routerMiddleware(history),
];

let immutableState;
if (process.env.NODE_ENV !== 'production') {
  immutableState = require('redux-immutable-state-invariant').default();
  middleware.unshift(immutableState);
}

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(...middleware)
);

// store.dispatch(loadUsers());

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
