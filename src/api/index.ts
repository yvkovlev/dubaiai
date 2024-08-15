import axios, { Method, AxiosRequestConfig, AxiosError } from 'axios';

import { config } from '../config';
import { ApiEndpoint, ApiEndpointVersion } from '../constants';

const api = axios.create({
  baseURL: config.API_URL,
});

let accessToken: string | null = null;
let refreshToken: string | null = null;

interface Arguments {
  endpoint: ApiEndpoint;
  method: Method,
  endpoint_version: ApiEndpointVersion;
  params?: Record<string, string>;
  data?: Record<string, any>;
}

export const makeRequest = async <T = never>({
  endpoint,
  method,
  endpoint_version,
  params,
  data,
}: Arguments): Promise<T | null> => {
  const requestConfig: AxiosRequestConfig = {
    url: `${config.API_URL}/${endpoint_version}/${endpoint}/`,
    method,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  };

  if (params) {
    requestConfig.params = params;
  }

  if (data) {
    requestConfig.data = data;
  }

  return api(requestConfig)
  // .then(() => {
    //   return true;
    // })
    // .catch((error) => {
    //   if (error.response?.status === 403) {
    //     // Тут ебала с рефрешом токена

    //     return console.error(error.response);
    //   }

    //   return console.error(error.response);
    // });
};
