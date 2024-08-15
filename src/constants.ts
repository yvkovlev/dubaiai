export enum Paths {
  MAIN = '/',
  AUTH = '/auth',
  ACCOUNT = '/account',
  ACCOUNT_PAYMENT = '/account/payment',
  ACCOUNT_SUBSCRIBE_RESULT = '/account/subscribe-result',
  PREDICTION = '/prediction',
  PREDICTION_SELECT_PROJECT = '/prediction/select-project',
  PREDICTION_ADJUST_PARAMETERS = '/prediction/adjust-parameters',
  PREDICTION_LOADING = '/prediction/loading',
  PREDICTION_RESULT = '/prediction/result',
}

export enum Langs {
  EN = 'en',
  RU = 'ru',
}

export const SUPPORTED_LANGUAGES = [Langs.EN, Langs.RU];

export enum ApiEndpoint {
  SIGN_UP = 'user',
  SIGN_IN = 'user/login',
  REFRESH_ACCESS_TOKEN = 'user/refresh',
  PREDICT = 'property/predict',
}

export enum ApiEndpointVersion {
  V1 = 'v1',
}

export enum AuthFormTabs {
  SIGN_IN_TAB = 'SIGN_IN_TAB',
  SIGN_UP_TAB = 'SIGN_UP_TAB',
}
