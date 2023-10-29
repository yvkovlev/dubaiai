import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Landing } from './views/Landing/Landing';
import { EnterEmail } from './views/SignInFlow/EnterEmail/EnterEmail';
import { CodeConfirmation } from './views/SignInFlow/CodeConfirmation/CodeConfirmation';
import { Payment } from './views/Account/Payment/Payment';
import { SubscribeResult } from './views/Account/SubscribeResult/SubscribeResult';
import { SelectProject } from './views/PredictionFlow/SelectProject/SelectProject';
import { AdjustParameters } from './views/PredictionFlow/AdjustParameters/AdjustParameters';
import { Loading } from './views/PredictionFlow/Loading/Loading';

import { Paths } from './constants';

import 'bootstrap/dist/css/bootstrap.min.css';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path={Paths.MAIN} element={<Landing />} />
        <Route path={Paths.SIGN_IN} element={<EnterEmail />} />
        <Route path={Paths.SIGN_IN_CODE_CONFIRMATION} element={<CodeConfirmation />} />
        <Route path={Paths.ACCOUNT_PAYMENT} element={<Payment />} />
        <Route path={Paths.ACCOUNT_SUBSCRIBE_RESULT} element={<SubscribeResult />} />
        <Route path={Paths.PREDICTION_SELECT_PROJECT} element={<SelectProject />} />
        <Route path={Paths.PREDICTION_ADJUST_PARAMETERS} element={<AdjustParameters />} />
        <Route path={Paths.PREDICTION_LOADING} element={<Loading />} />
      </Routes>
      <Footer />
    </>
  );
};
