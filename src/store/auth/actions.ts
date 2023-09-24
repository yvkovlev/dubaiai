import { createAction } from 'redux-actions';

import { SuccessSignInPayload } from './types';

export const FIRE_SIGN_IN = 'AUTH/FIRE_SIGN_IN';
export const PENDING_SIGN_IN = 'AUTH/PENDING_SIGN_IN';
export const SUCCESS_SIGN_IN = 'AUTH/SUCCESS_SIGN_IN';
export const USER_NOT_FOUND = 'AUTH/USER_NOT_FOUND';

export const FIRE_SIGN_UP = 'AUTH/FIRE_SIGN_UP';

export const fireSignIn = createAction(FIRE_SIGN_IN);
export const pendingSignIn = createAction(PENDING_SIGN_IN);
export const successSignIn = createAction<SuccessSignInPayload>(SUCCESS_SIGN_IN);
export const userNotFound = createAction(USER_NOT_FOUND);

export const fireSignUp = createAction(FIRE_SIGN_UP);
