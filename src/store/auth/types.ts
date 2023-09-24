export interface AuthState {
  access: string;
  refresh: string;
  isRequesting: boolean;
  isNotFound: boolean;
}

export type SuccessSignInPayload = Pick<AuthState, 'access' | 'refresh'>;

export type SuccessRefreshTokenPayload = Pick<AuthState, 'access'>;
