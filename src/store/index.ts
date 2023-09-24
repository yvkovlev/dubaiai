import createMiddlewareSaga from 'redux-saga';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootSaga } from './rootSaga';
import { reducers } from './reducers';

const sagaMiddleware = createMiddlewareSaga();
let enhancer = applyMiddleware(sagaMiddleware);

if (process.env.REACT_APP_ENV === 'development') {
  const devEnhancer = composeWithDevTools({ trace: true });
  enhancer = devEnhancer(enhancer);
}

export const store = createStore(reducers, enhancer);

sagaMiddleware.run(rootSaga);
