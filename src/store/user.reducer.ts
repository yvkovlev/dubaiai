import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppState } from '.';

export interface UserState {
  id: string | null;
  email: string | null;
}

export const userInitialState: UserState = {
  id: null,
  email: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    setUserId(state, action: PayloadAction<string | null>) {
      state.id = action.payload;
    },
    setUserEmail(state, action: PayloadAction<string | null>) {
      state.email = action.payload;
    },
  },
  extraReducers: {},
});

const { reducer } = userSlice;
export { reducer as userReducer };

export const selectUserId = (state: AppState) => state.user.id;
export const selectUserEmail = (state: AppState) => state.user.email;

export const {
  setUserId,
  setUserEmail,
} = userSlice.actions;
