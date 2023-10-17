import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './Landing.css';

export const Landing: FC = () => {
  return (
    <div className="Landing">
      <Container className="Landing__section">
        <Row>
          <Col>
            <h4>
              Predict the Price of a Property
            </h4>
            <h1>
              WE MAKE YOU UNDERSTAND THE REAL PRICE OF YOUR NEW HOME
            </h1>
            <p>
              Our machine learning models allow us to predict the current price of real estate in Dubai. Models work on big data and take into account many parameters.
            </p>
          </Col>
          <Col>
            <p>
              Image
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
