import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';

import { FlowHeadline } from '../../../components/Flow/FlowHeadline/FlowHeadline';
import { FlowHeader } from '../../../components/Flow/FlowHeader/FlowHeader';
import { FlowText } from '../../../components/Flow/FlowText/FlowText';
import { Paths } from '../../../constants';

import './EnterEmail.css';

export const EnterEmail: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="EnterEmail">
      <Container className="EnterEmail__section Flow__section">
        <Row>
          <Col xs={3} />
          <Col xs={6}>
            <FlowHeadline
              text="Add or login to your account"
              className="mb-3"
            />
            <FlowHeader
              text="💌 Use your email to continue"
              className="mb-3"
            />
            <FlowText
              text="Enter your email:"
            />
            <div className="EnterEmail__form">
              <Form.Control
                placeholder="example@mail.com"
              />
              <Button type="submit" className="mx-2" onClick={() => navigate(Paths.SIGN_IN_CODE_CONFIRMATION)}>
                Continue
              </Button>
            </div>
          </Col>
          <Col xs={3} />
        </Row>
      </Container>
    </div>
  );
};
