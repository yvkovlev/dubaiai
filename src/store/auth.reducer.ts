import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '.';

import { refreshAccessToken, signIn, signUp } from '../api/auth';
import { setUserEmail, setUserId } from './user.reducer';
import { deleteCookie, setCookie } from '../utils/cookies';

export interface AuthState {
  isRequesting: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

export const authInitialState: AuthState = {
  isRequesting: false,
  accessToken: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setAuthIsRequesting(state, action: PayloadAction<boolean>) {
      state.isRequesting = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string | null>) {
      state.accessToken = action.payload;
    },
    setRefreshToken(state, action: PayloadAction<string | null>) {
      state.refreshToken = action.payload;
    },
    signOut() {
      deleteCookie('access_token');
      deleteCookie('refresh_token');
      return authInitialState;
    },
  },
  extraReducers: {},
});

const { reducer } = authSlice;
export { reducer as authReducer };

export const selectIsAuthRequesting = (state: AppState) => state.auth.isRequesting;
export const selectAccessToken = (state: AppState) => state.auth.accessToken;
export const selectRefreshToken = (state: AppState) => state.auth.refreshToken;

export const {
  setAuthIsRequesting,
  setAccessToken,
  setRefreshToken,
  signOut,
} = authSlice.actions;

export const signInThunk = createAsyncThunk(
  'auth/sign-in',
  async ({
    email,
    password,
    onSuccess,
    onFailure,
  } : {
    email: string,
    password: string,
    onSuccess: VoidFunction,
    onFailure: VoidFunction,
  }, { getState, dispatch }) => {
    dispatch(setAuthIsRequesting(true));

    const signInResponse = await signIn({ email, password });

    if (!signInResponse) {
      onFailure();
      return;
    }

    dispatch(setAuthIsRequesting(false));
    dispatch(setAccessToken(signInResponse.data.accessToken));
    dispatch(setRefreshToken(signInResponse.data.refreshToken));
    dispatch(setUserEmail(email));
    // dispatch(setUserId(id));
    setCookie('access_token', signInResponse.data.accessToken, 7);
    setCookie('refresh_token', signInResponse.data.refreshToken, 7);
    onSuccess();
  },
);

export const signUpThunk = createAsyncThunk(
  'auth/sign-up',
  async ({
    email,
    password,
    onSuccess,
    onFailure,
  } : {
    email: string,
    password: string,
    onSuccess: VoidFunction,
    onFailure: VoidFunction,
  }, { getState, dispatch }) => {
    dispatch(setAuthIsRequesting(true));

    const signUpResponse = await signUp({ email, password });

    if (!signUpResponse) {
      onFailure();
      return;
    }

    dispatch(setAuthIsRequesting(false));
    dispatch(setUserId(signUpResponse.data.id));
    onSuccess();
  },
);

export const refreshAccessTokenThunk = createAsyncThunk(
  'auth/refresh',
  async ({ refreshToken } : { refreshToken: string }) => {
    const refreshAccessTokenResponse = await refreshAccessToken({ refreshToken });
    return refreshAccessTokenResponse;
  },
);
