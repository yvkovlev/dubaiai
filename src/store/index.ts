import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

import { authReducer, AuthState } from './auth.reducer';
import { userReducer, UserState } from './user.reducer';
import { propertySearchReducer, PropertySearchState } from './property.search.reducer';

export interface AppState {
  auth: AuthState,
  user: UserState,
  propertySearch: PropertySearchState,
}

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  propertySearch: propertySearchReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export type RootDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

type DispatchFunc = () => RootDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
