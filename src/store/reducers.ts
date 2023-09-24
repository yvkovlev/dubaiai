import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth/reducer';
import { reducer as layoutReducer } from './layout/reducer';

import { AuthState } from './auth/types';
import { LayoutState } from './layout/types';

export type AppState = {
  auth: AuthState;
  layout: LayoutState;
};

export const reducers = combineReducers<AppState>({
  auth: authReducer,
  layout: layoutReducer,
});
