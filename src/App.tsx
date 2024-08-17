import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { ProtectedRoute } from './hocs/ProtectedRoute/ProtectedRoute';
import { Landing } from './views/Landing/Landing';
import { Auth } from './views/AuthFlow/Auth/Auth';
import { Payment } from './views/Account/Payment/Payment';
import { SubscribeResult } from './views/Account/SubscribeResult/SubscribeResult';
import { SelectProject } from './views/PredictionFlow/SelectProject/SelectProject';
import { AdjustParameters } from './views/PredictionFlow/AdjustParameters/AdjustParameters';
import { Loading } from './views/PredictionFlow/Loading/Loading';
import { useGetAccessToken } from './hooks/useGetAccessToken';
import { useAppSelector } from './store';
import { selectAccessToken } from './store/auth.reducer';
import { getCookie } from './utils/cookies';

import { Paths } from './constants';

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  const accessTokenFromStore = useAppSelector(selectAccessToken); // причесать
  const accessTokenFromCookies = getCookie('access_token');
  const accessToken = useGetAccessToken(accessTokenFromStore, accessTokenFromCookies);

  return (
    <>
      <Header />
      <Routes>
        <Route path={Paths.MAIN} element={<Landing />} />
        <Route path={Paths.AUTH} element={<Auth />} />
        <Route
          path={Paths.ACCOUNT_PAYMENT}
          element={(
            <ProtectedRoute isAllowed={accessToken !== null} redirectPath={Paths.MAIN}>
              <Payment />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Paths.ACCOUNT_SUBSCRIBE_RESULT}
          element={(
            <ProtectedRoute isAllowed={accessToken !== null} redirectPath={Paths.MAIN}>
              <SubscribeResult />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Paths.PROPERTY_PREDICTION_SELECT_PROJECT}
          element={(
            <ProtectedRoute isAllowed={accessToken !== null} redirectPath={Paths.MAIN}>
              <SelectProject />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Paths.PROPERTY_PREDICTION_ADJUST_PARAMETERS}
          element={(
            <ProtectedRoute isAllowed={accessToken !== null} redirectPath={Paths.MAIN}>
              <AdjustParameters />
            </ProtectedRoute>
          )}
        />
        <Route
          path={Paths.PROPERTY_PREDICTION_LOADING}
          element={(
            <ProtectedRoute isAllowed={accessToken !== null} redirectPath={Paths.MAIN}>
              <Loading />
            </ProtectedRoute>
          )}
        />
        <Route path="*" element={<p>There is nothing here: 404!</p>} />
      </Routes>
      <Footer />
    </>
  );
};
