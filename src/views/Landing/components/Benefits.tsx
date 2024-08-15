import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Benefits: React.FC = () => {
  return (
    <section className="benefits py-5">
      <h2 className="text-center mb-4">What Makes Our Tool Unique?</h2>
      <Row className="benefits-list text-center">
        <Col md={4} className="benefit-item">
          <h3>High prediction accuracy</h3>
        </Col>
        <Col md={4} className="benefit-item">
          <h3>Explanation of price based on multiple factors</h3>
        </Col>
        <Col md={4} className="benefit-item">
          <h3>Trained on real transaction data</h3>
        </Col>
        <Col md={4} className="benefit-item">
          <h3>User-friendly interface</h3>
        </Col>
        <Col md={4} className="benefit-item">
          <h3>Supports various property types</h3>
        </Col>
      </Row>
    </section>
  );
};

export default Benefits;
