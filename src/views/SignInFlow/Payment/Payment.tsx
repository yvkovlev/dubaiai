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

import './Payment.css';

export const Payment: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="Payment">
      <Container className="Payment__section SignInFlow__section">
        <Row>
          <Col xs={3} />
          <Col xs={6}>
            <FlowHeadline
              text="Almost there!"
              className="mb-3"
            />
            <FlowHeader
              text="💳 Enter payment details"
              className="mb-3"
            />
            <FlowText
              text={(
                <>
                  Try 7 days for free! After that
                  <span className="text-accent"> 10$ / month</span>
                  .
                  <br />
                  You
                  <span className="text-dark"> won’t be charged today </span>
                  and we wil remind you to cancel your trial.
                </>
              )}
            />
            <div className="Payment__form">
              <Form.Group className="mb-3">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Your full name..." />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="Your full name..." />
              </Form.Group>
              <Button type="submit" className="mx-2" onClick={() => navigate(Paths.SUBSCRIBE_RESULT)}>
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
