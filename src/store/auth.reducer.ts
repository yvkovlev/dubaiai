import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { AppState } from '.';

import { refreshAccessToken, signIn, signUp } from '../api/auth';

export interface AuthState {
  isRequesting: boolean;
  accessToken: string | null;
  refreshToken: string | null;
}

export const authInitialState: AuthState = {
  isRequesting: true,
  accessToken: null,
  refreshToken: null,
};

export const signInThunk = createAsyncThunk(
  'auth/sign-in',
  async ({ email, password } : { email: string, password: string }) => {
    const signInResponse = await signIn({ email, password });
    return signInResponse;
  },
);

export const signUpThunk = createAsyncThunk(
  'auth/sign-up',
  async ({ email, password } : { email: string, password: string }) => {
    const signUpResponse = await signUp({ email, password });
    return signUpResponse;
  },
);

export const refreshAccessTokenThunk = createAsyncThunk(
  'auth/refresh',
  async ({ refreshToken } : { refreshToken: string }) => {
    const refreshAccessTokenResponse = await refreshAccessToken({ refreshToken });
    return refreshAccessTokenResponse;
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signInThunk.fulfilled, (state, action) => {
        state.isRequesting = false;
        state.accessToken = action.payload.data.accessToken || null;
        state.refreshToken = action.payload.data.refreshToken || null;
      });
  },
});

const { reducer } = authSlice;
export { reducer as authReducer };

export const selectIsAuthRequesting = (state: AppState) => state.auth.isRequesting;
export const selectAccessToken = (state: AppState) => state.auth.accessToken;
export const selectRefreshToken = (state: AppState) => state.auth.refreshToken;
