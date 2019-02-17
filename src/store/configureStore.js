import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

let middleware = [
  thunk,
];

let immutableState;
if (process.env.NODE_ENV !== 'production') {
  immutableState = require('redux-immutable-state-invariant').default();
  middleware.unshift(immutableState);
}

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  );
}