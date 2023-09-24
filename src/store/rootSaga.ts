import { SagaIterator } from 'redux-saga';
import {
  takeLatest,
  all,
  call,
  select,
} from 'redux-saga/effects';

import { FIRE_SIGN_IN, FIRE_SIGN_UP, SUCCESS_SIGN_IN } from './auth/actions';
import { signInSaga, signUpSaga } from './auth/saga';

function* loadAllData(): SagaIterator<void> {
  //const isAuthenticating = yield select(selectIsAuthenticating);
  const isAuthenticating = false;

  if (isAuthenticating) {
    return;
  }

  yield all([
    // call(fetchSettingsSaga),
  ]);
}

export function* rootSaga(): SagaIterator<void> {
  // User – Auth
  yield takeLatest(FIRE_SIGN_IN, signInSaga);
  yield takeLatest(FIRE_SIGN_UP, signUpSaga);


  // All – Update
  yield takeLatest([
    SUCCESS_SIGN_IN,
  ], loadAllData);
}
