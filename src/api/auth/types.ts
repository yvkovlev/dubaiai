export interface SignInRequest {
  email: string;
  password: string;
}

export interface SignInResponse {
  accessToken: string;
  refreshToken: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
}

export interface SignUpResponse {
  id: string;
}

export interface RefreshAccessTokenRequest {
  refreshToken: string;
}

export interface RefreshAccessTokenResponse {
  accessToken: string;
}