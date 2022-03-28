/* eslint-disable @typescript-eslint/no-explicit-any */
import { createStore, applyMiddleware, Store, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
import { State, Actions } from './types';

const composeEnhancers =
  process.env.NODE_ENV === 'development'
    ? window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const store: Store<State, Actions> = createStore(
  reducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
