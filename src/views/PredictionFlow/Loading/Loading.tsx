import React, { FC } from 'react';
import {
  Container,
  Row,
  Col,
  ProgressBar,
} from 'react-bootstrap';

import { FlowHeadline } from '../../../components/Flow/FlowHeadline/FlowHeadline';
import { FlowHeader } from '../../../components/Flow/FlowHeader/FlowHeader';
import { FlowText } from '../../../components/Flow/FlowText/FlowText';

import './Loading.css';

export const Loading: FC = () => {
  return (
    <div className="Loading">
      <Container className="Loading__section Flow__section">
        <Row>
          <Col xs={3} />
          <Col xs={6}>
            <FlowHeadline
              text="Step 3/3"
              className="mb-3"
            />
            <FlowHeader
              text="🔮 Predicting..."
              className="mb-3"
            />
            <FlowText
              text="Our AI is predicting actual price for selected property. Just a moment..."
            />
            <div className="Loading__progress">
              <ProgressBar animated now={45} />
            </div>
          </Col>
          <Col xs={3} />
        </Row>
      </Container>
    </div>
  );
};
