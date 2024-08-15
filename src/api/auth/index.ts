import axios, { AxiosRequestConfig } from 'axios';

import {
  RefreshAccessTokenRequest,
  RefreshAccessTokenResponse,
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from './types';
import { ApiEndpoint, ApiEndpointVersion } from '../../constants';
import { config } from '../../config';

const api = axios.create({
  baseURL: config.API_URL,
});

export const signIn = async ({ email, password }: SignInRequest) => {
  const requestConfig: AxiosRequestConfig = {
    url: `${config.API_URL}/${ApiEndpointVersion.V1}/${ApiEndpoint.SIGN_IN}`,
    method: 'post',
    data: { email, password },
  };

  return api<SignInResponse>(requestConfig);
};

export const signUp = async ({ email, password }: SignUpRequest) => {
  const requestConfig: AxiosRequestConfig = {
    url: `${config.API_URL}/${ApiEndpointVersion.V1}/${ApiEndpoint.SIGN_UP}`,
    method: 'post',
    data: { email, password },
  };

  return api<SignUpResponse>(requestConfig);
};

export const refreshAccessToken = async ({ refreshToken }: RefreshAccessTokenRequest) => {
  const requestConfig: AxiosRequestConfig = {
    url: `${config.API_URL}/${ApiEndpointVersion.V1}/${ApiEndpoint.REFRESH_ACCESS_TOKEN}`,
    method: 'post',
    data: { refreshToken },
  };

  return api<RefreshAccessTokenResponse>(requestConfig);
};
