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

import './CodeConfirmation.css';

export const CodeConfirmation: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="CodeConfirmation">
      <Container className="CodeConfirmation__section SignInFlow__section">
        <Row>
          <Col xs={3} />
          <Col xs={6}>
            <FlowHeadline
              text="Email confirmation"
              className="mb-3"
            />
            <FlowHeader
              text="🔐 We send a code to your email"
              className="mb-3"
            />
            <FlowText
              text="Enter a code that you received on your email:"
            />
            <div className="CodeConfirmation__form">
              <Form.Control
                placeholder="Code..."
              />
              <Button type="submit" className="mx-2" onClick={() => navigate(Paths.PAYMENT)}>
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
