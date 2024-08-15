import React from 'react';
import { Row, Col } from 'react-bootstrap';

const TargetAudiences: React.FC = () => {
  return (
    <section className="target-audiences py-5">
      <h2 className="text-center mb-4">Who Can Benefit from Our Tool?</h2>
      <Row className="audience-list text-center">
        <Col md={4} className="audience-item">
          <h3>Buyers</h3>
          <p>Helps you find the optimal price for purchasing a property</p>
        </Col>
        <Col md={4} className="audience-item">
          <h3>Sellers</h3>
          <p>Assists in determining the fair selling price</p>
        </Col>
        <Col md={4} className="audience-item">
          <h3>Realtors</h3>
          <p>Enables clear explanations to clients about the property’s pricing</p>
        </Col>
      </Row>
    </section>
  );
};

export default TargetAudiences;
