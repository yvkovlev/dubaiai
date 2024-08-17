import { useMemo } from 'react';
import { useAppDispatch } from '../store';
import { setAccessToken } from '../store/auth.reducer';

export const useGetAccessToken = (
  accessTokenFromStore: string | null,
  accessTokenFromCookies: string | undefined,
): string | null => {
  const dispatch = useAppDispatch();

  const accessToken = useMemo(() => {
    if (accessTokenFromStore) {
      return accessTokenFromStore;
    }

    if (accessTokenFromCookies) {
      dispatch(setAccessToken(accessTokenFromCookies));
      return accessTokenFromCookies;
    }

    return null;
  }, [accessTokenFromStore, accessTokenFromCookies]);

  return accessToken;
};
