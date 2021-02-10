import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
// middleware will go between our actions firing and our root reducer receiving those actions

import rootReducer from './root-reducer';

const middlewares = [logger]; // the spread operator takes every value in this array and spreads it in as an arguement

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);






