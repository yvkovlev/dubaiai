import React from 'react';
import { CardGroup, Card, Button } from 'react-bootstrap';

const Pricing: React.FC = () => {
  return (
    <section className="pricing py-5">
      <h2 className="text-center mb-4">Choose Your Plan</h2>
      <CardGroup>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Free Plan</Card.Title>
            <Card.Text>A limited number of free predictions</Card.Text>
            <Button variant="primary">Choose Plan</Button>
          </Card.Body>
        </Card>
        <Card className="text-center">
          <Card.Body>
            <Card.Title>Paid Plan</Card.Title>
            <Card.Text>Subscription with unlimited predictions and additional features</Card.Text>
            <Button variant="primary">Choose Plan</Button>
          </Card.Body>
        </Card>
      </CardGroup>
    </section>
  );
};

export default Pricing;
