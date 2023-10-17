import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { FlowHeadline } from '../../../components/Flow/FlowHeadline/FlowHeadline';
import { FlowHeader } from '../../../components/Flow/FlowHeader/FlowHeader';
import { FlowText } from '../../../components/Flow/FlowText/FlowText';

import './SubscribeResult.css';

export const SubscribeResult: FC = () => {
  return (
    <div className="SubscribeResult">
      <Container className="SubscribeResult__section SignInFlow__section">
        <Row>
          <Col>
            <FlowHeadline
              text="Successfully subscribed!"
              className="mb-3"
            />
            <FlowHeader
              text="✅ You are ready to start!"
              className="mb-3"
            />
            <FlowText
              text={(
                <>
                  Subscription to the service has been completed!
                  <br />
                  Unlimited real estate price prediction requests are now available to you.
                </>
              )}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
