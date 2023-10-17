import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { Landing } from './views/Landing/Landing';
import { EnterEmail } from './views/SignInFlow/EnterEmail/EnterEmail';
import { CodeConfirmation } from './views/SignInFlow/CodeConfirmation/CodeConfirmation';
import { Payment } from './views/SignInFlow/Payment/Payment';
import { SubscribeResult } from './views/SignInFlow/SubscribeResult/SubscribeResult';

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
        <Route path={Paths.PAYMENT} element={<Payment />} />
        <Route path={Paths.SUBSCRIBE_RESULT} element={<SubscribeResult />} />
      </Routes>
      <Footer />
    </>
  );
};
