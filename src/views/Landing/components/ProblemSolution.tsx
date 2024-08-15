import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ProblemSolution: React.FC = () => {
  return (
    <section className="problem-solution py-5">
      <h2 className="text-center mb-4">Why Knowing Your Property&apos;s True Value is Crucial?</h2>
      <Row className="problem-solution-content">
        <Col md={6}>
          <p>
            <strong>Problem: </strong>
            <span>Determining the fair market value of a property requires analyzing numerous factors and data points.</span>
          </p>
        </Col>
        <Col md={6}>
          <p>
            <strong>Solution:</strong>
            <span>Our AI tool analyzes millions of transactions to provide you with an accurate price prediction and explains why your property is valued at that price.</span>
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default ProblemSolution;
