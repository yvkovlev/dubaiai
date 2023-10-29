import React, { FC } from 'react';
import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { FlowHeadline } from '../../../components/Flow/FlowHeadline/FlowHeadline';
import { FlowHeader } from '../../../components/Flow/FlowHeader/FlowHeader';
import { FlowText } from '../../../components/Flow/FlowText/FlowText';
import { Paths } from '../../../constants';

import './SubscribeResult.css';

export const SubscribeResult: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="SubscribeResult">
      <Container className="SubscribeResult__section Flow__section">
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
            <Button type="submit" className="mx-2" onClick={() => navigate(Paths.PREDICTION_SELECT_PROJECT)}>
              Get Prediction
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
