import { AppState } from '../reducers';

export const selectIsUserNotFound = (state: AppState): boolean => state.auth.isNotFound;
export const selectIsAuthenticating = (state: AppState): boolean => state.auth.isRequesting;

export const selectAccessToken = (state: AppState) => state.auth.access;
export const selectRefreshToken = (state: AppState) => state.auth.refresh;
