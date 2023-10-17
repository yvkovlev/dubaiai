import { call, put, SagaReturnType, select, } from 'redux-saga/effects';

import { fireSignIn, fireSignUp, pendingSignIn, successSignIn, } from './actions';
import { api } from '../../api';
import { SuccessSignInPayload } from './types';
// import { UserState } from '../user/types';
// import { Stories, BudgetPanels } from '../../constants';
// import { getLaunchParamsString } from '../../utils/common';
// import { AmplitudeEvents, sendAmplitudeEvent } from '../../utils/amplitude';

export function signIn(queryParams: string) {
  return api.get<SuccessSignInPayload>(
    `/api/vk-auth/sign-in/?${queryParams}`,
    {
      validateStatus: (status) => (status >= 200 && status < 300) || status === 404,
    },
  );
}

function signUp(queryParams: string, fullName: string, email: string) {
  const data: { full_name: string; email?: string } = {
    full_name: fullName,
  };

  if (email) {
    data.email = email;
  }

  return api.post<any>(`/api/vk-auth/sign-up/?${queryParams}`, data);
}

export function refreshAccessToken(refreshToken: string) {
  return api.post('/api/auth/refresh/', { refresh: refreshToken });
}

export function* signInSaga() {
  yield put(pendingSignIn());

  // const launchParams = getLaunchParamsString();

  const signInResult: SagaReturnType<typeof signIn> = yield call(
    signIn,
    'ddwd'
    // launchParams,
  );

  if (signInResult.status === 404) {
    yield put(fireSignUp());
    return;
  }

  yield put(successSignIn(signInResult.data));
  // yield put(
  //   setActiveLayout({
  //     activeView: Views.LANDING,
  //   }),
  // );

  // sendAmplitudeEvent(AmplitudeEvents.SIGN_IN_COMPLETED);
}

export function* signUpSaga() {
  // const launchParams = getLaunchParamsString();
  // const userInfo: UserState['info'] = yield select((state) => state.user.info);
  // const fullName = `${userInfo.firstName} ${userInfo.lastName}`;
  const signUpResult: SagaReturnType<typeof signUp> = yield call(
    signUp,
    'dwd',
    //launchParams,
    'denis',
    // fullName,
    'efed',
    // userInfo.email,
  );

  if (signUpResult.status === 201) {
    yield put(fireSignIn());

    // sendAmplitudeEvent(AmplitudeEvents.SIGN_UP_COMPLETED);
  }
}
