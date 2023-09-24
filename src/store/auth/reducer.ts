import { handleActions } from 'redux-actions';

import { PENDING_SIGN_IN, SUCCESS_SIGN_IN, USER_NOT_FOUND } from './actions';
import { AuthState } from './types';

const initialState: AuthState = {
  access: '',
  refresh: '',
  isRequesting: true,
  isNotFound: false,
};

export const reducer = handleActions(
  {
    [PENDING_SIGN_IN]: (state) => ({
      ...state,
      isRequesting: true,
    }),

    [SUCCESS_SIGN_IN]: (state, { payload }) => ({
      ...state,
      ...payload,
      isRequesting: false,
      isNotFound: false,
    }),

    [USER_NOT_FOUND]: (state) => ({
      ...state,
      isRequesting: false,
      isNotFound: true,
    }),
  },
  initialState,
);
