import React, { FC, ReactElement } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { Paths } from '../../constants';

interface ProtectedRouteProps {
  isAllowed: boolean,
  redirectPath: Paths,
  children: React.ReactNode,
}

export const ProtectedRoute: FC<ProtectedRouteProps> = ({
  isAllowed,
  redirectPath = Paths.MAIN,
  children,
}): ReactElement<any, any> | null => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} replace />;
  }

  if (!children) {
    return <Outlet />;
  }

  return children as ReactElement;
};
