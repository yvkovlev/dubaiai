import { AxiosError, AxiosResponse } from 'axios';
import {
  call, put, SagaReturnType, select,
} from 'redux-saga/effects';

import { selectAccessToken, selectRefreshToken } from './auth/selectors';
import { SuccessRefreshTokenPayload } from './auth/types';
import { refreshAccessToken, signIn } from './auth/saga';
import { getLaunchParamsString } from '../utils/common';
import { successSignIn } from './auth/actions';
import { api } from '../api';
import { ErrorMessages } from '../constants';

function* refreshTokens() {
  const refreshToken: string = yield select(selectRefreshToken);
  const refreshTokenResponse: AxiosResponse<SuccessRefreshTokenPayload> | null = yield refreshAccessToken(refreshToken).catch(() => {
    return null;
  });

  if (refreshTokenResponse === null) {
    const launchParams = getLaunchParamsString();

    const signInResult: SagaReturnType<typeof signIn> = yield call(
      signIn,
      launchParams,
    );

    yield put(successSignIn(signInResult.data));
  } else {
    const { access } = refreshTokenResponse.data;

    yield put(
      successSignIn({
        refresh: refreshToken,
        access,
      }),
    );
  }
}

export enum HttpMethods {
  GET = 'get',
  POST = 'post',
  DELETE = 'delete',
  PUT = 'put',
}

export function* callApiMethod<T>(
  method: HttpMethods,
  url: string,
  payload?: any,
) {
  let accessToken: string = yield select(selectAccessToken);
  const axiosMethod = api[method];
  const args = [];

  if (payload) {
    args.push(payload);
  }

  args.push({
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  let response: AxiosResponse<T> | null = yield axiosMethod(url, ...args).catch(
    (error: AxiosError) => {
      if (error.response?.status !== 401) {
        return error.response;
      }

      return null;
    },
  );

  if (response?.status === 429) {
    // yield put(
    //   setSnackbar({
    //     isVisible: true,
    //     text: ErrorMessages.THROTTLE_LIMIT_ERROR,
    //     type: SnackbarTypes.ERROR,
    //   }),
    // );
    //
    // sendAmplitudeEvent(AmplitudeEvents.ERROR_PROCESSED, {
    //   info: ErrorMessages.THROTTLE_LIMIT_ERROR,
    // });
  }

  if (response === null) {
    yield refreshTokens();

    accessToken = yield select(selectAccessToken);

    if (args.length === 1) {
      args[0].headers = {
        ...args[0].headers,
        Authorization: `Bearer ${accessToken}`,
      };
    } else {
      args[1].headers = {
        ...args[1].headers,
        Authorization: `Bearer ${accessToken}`,
      };
    }

    response = yield axiosMethod(url, ...args);
  }

  return response;
}
