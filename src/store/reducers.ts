import { combineReducers } from 'redux';

import { reducer as authReducer } from './auth/reducer';

import { AuthState } from './auth/types';

export type AppState = {
  auth: AuthState;
};

export const reducers = combineReducers<AppState>({
  auth: authReducer,
});
