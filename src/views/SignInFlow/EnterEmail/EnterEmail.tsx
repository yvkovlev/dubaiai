import React, { FC, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Tabs,
  Tab,
} from 'react-bootstrap';

import { useAppDispatch } from '../../../store';
import { FlowHeadline } from '../../../components/Flow/FlowHeadline/FlowHeadline';
import { FlowHeader } from '../../../components/Flow/FlowHeader/FlowHeader';
import { FlowText } from '../../../components/Flow/FlowText/FlowText';
import { AuthFormTabs } from '../../../constants';
import { signInThunk, signUpThunk } from '../../../store/auth.reducer';

import './EnterEmail.css';

export const EnterEmail: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);
  const [tab, setTab] = useState<AuthFormTabs>(AuthFormTabs.SIGN_IN_TAB);

  const onSignInFormSubmit = useCallback(() => {
    if (['', null].includes(email) || !email) {
      return;
    }

    if (['', null].includes(password) || !password) {
      return;
    }

    dispatch(signInThunk({
      email,
      password,
    }));
  }, [email, password]);

  const onSignUpFormSubmit = useCallback(() => {
    if (['', null].includes(email) || !email) {
      return;
    }

    if (['', null].includes(password) || !password) {
      return;
    }

    if (!isTermsChecked) {
      return;
    }

    dispatch(signUpThunk({
      email,
      password,
    }));
  }, [email, password]);

  return (
    <div className="EnterEmail">
      <Container className="EnterEmail__section Flow__section">
        <Row>
          <Col xs={3} />
          <Col xs={6}>
            <FlowHeadline
              text="Sign-up or login to your account"
              className="mb-3"
            />
            <FlowHeader
              text="💌 Use your email and password"
              className="mb-3"
            />
            <FlowText
              text="Enter your email and password. If you are have not an account, please, enter a new credentials. You will use it to login:"
            />
            <div className="EnterEmail__form">
              <Tabs
                activeKey={tab}
                onSelect={(newTab) => setTab(newTab as AuthFormTabs)}
                className="mb-3"
                fill
              >
                <Tab eventKey={AuthFormTabs.SIGN_IN_TAB} title="Sign In">
                  <Form.Group className="mb-3">
                    <Form.Control
                      placeholder="Your Email"
                      value={email || ''}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      placeholder="Your Password"
                      type="password"
                      value={password || ''}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="mx-2"
                    onClick={onSignInFormSubmit}
                  >
                    Continue
                  </Button>
                </Tab>
                <Tab eventKey={AuthFormTabs.SIGN_UP_TAB} title="Sign Up">
                  <Form.Group className="mb-3">
                    <Form.Control
                      placeholder="Your Email"
                      value={email || ''}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Control
                      placeholder="Your Password"
                      type="password"
                      value={password || ''}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Check
                      type="checkbox"
                      checked={isTermsChecked}
                      onChange={(e) => setIsTermsChecked(e.target.checked)}
                      label="I agree to terms and conditions of Dubai AI"
                    />
                  </Form.Group>
                  <Button
                    type="submit"
                    className="mx-2"
                    onClick={onSignUpFormSubmit}
                  >
                    Create New Account
                  </Button>
                </Tab>
              </Tabs>
            </div>
          </Col>
          <Col xs={3} />
        </Row>
      </Container>
    </div>
  );
};
