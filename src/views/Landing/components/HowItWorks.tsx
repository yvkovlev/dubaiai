import React from 'react';
import { Row, Col } from 'react-bootstrap';

const HowItWorks: React.FC = () => {
  return (
    <section className="how-it-works py-5">
      <h2 className="text-center mb-4">How Does It Work?</h2>
      <Row className="steps text-center">
        <Col md={4} className="step">
          <h3>Step 1</h3>
          <p>Input your property details and location</p>
        </Col>
        <Col md={4} className="step">
          <h3>Step 2</h3>
          <p>The model analyzes the data and predicts the price</p>
        </Col>
        <Col md={4} className="step">
          <h3>Step 3</h3>
          <p>Receive a detailed explanation of the factors influencing the price</p>
        </Col>
      </Row>
    </section>
  );
};

export default HowItWorks;
