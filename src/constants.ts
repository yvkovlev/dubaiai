export enum Paths {
  MAIN = '/',
  AUTH = '/auth',
  ACCOUNT = '/account',
  ACCOUNT_PAYMENT = '/account/payment',
  ACCOUNT_SUBSCRIBE_RESULT = '/account/subscribe-result',
  PROPERTY_PREDICTION = '/prediction',
  PROPERTY_PREDICTION_SELECT_PROJECT = '/prediction/select-project',
  PROPERTY_PREDICTION_ADJUST_PARAMETERS = '/prediction/adjust-parameters',
  PROPERTY_PREDICTION_LOADING = '/prediction/loading',
  PROPERTY_PREDICTION_RESULT = '/prediction/result',
}

export enum Langs {
  EN = 'en',
  RU = 'ru',
}

export const SUPPORTED_LANGUAGES = [Langs.EN, Langs.RU];

export enum ApiEndpoint {
  AUTH_SIGN_UP = 'user',
  AUTH_SIGN_IN = 'user/login',
  AUTH_REFRESH_ACCESS_TOKEN = 'user/refresh',
  PROPERTY_SEARCH = 'property/search',
  PROPERTY_PREDICT = 'property/predict',
}

export enum ApiEndpointVersion {
  V1 = 'v1',
}

export enum AuthFormTabs {
  AUTH_SIGN_IN_TAB = 'AUTH_SIGN_IN_TAB',
  AUTH_SIGN_UP_TAB = 'AUTH_SIGN_UP_TAB',
}

export enum PropertyTransactionGroups {
  'SALE',
  'MORTGAGE',
  'GIFT',
}

export enum PropertyRegistrationTypes {
  'EXISTING',
  'OFF_PLAN',
}

export enum PropertyRoomsTypes {
  'SINGLE_ROOM',
  'STUDIO',
  'PENTHOUSE',
  'ONE_B_R',
  'TWO_B_R',
  'THREE_B_R',
  'FOUR_B_R',
  'FIVE_B_R',
  'SIX_B_R',
  'SEVEN_B_R',
  'EIGHT_B_R',
  'NINE_B_R',
}
