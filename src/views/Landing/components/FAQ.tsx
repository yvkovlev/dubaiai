import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

const FAQ: React.FC = () => {
  return (
    <section className="faq py-5">
      <h2 className="text-center mb-4">Frequently Asked Questions</h2>
      <Accordion>
        <Card>
          <Accordion.Item as={Card.Header} eventKey="0">
            How does the model calculate the price?
          </Accordion.Item>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Our AI model analyzes data from millions of real estate transactions to accurately predict the value of your property.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Item as={Card.Header} eventKey="1">
            What data do I need to input?
          </Accordion.Item>
          <Accordion.Collapse eventKey="1">
            <Card.Body>You will need to provide details about your property, such as location, size, and type.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Item as={Card.Header} eventKey="2">
            How accurate are the predictions?
          </Accordion.Item>
          <Accordion.Collapse eventKey="2">
            <Card.Body>Our model is trained on a vast dataset, providing predictions with a high degree of accuracy.</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Item as={Card.Header} eventKey="3">
            How does the free plan work?
          </Accordion.Item>
          <Accordion.Collapse eventKey="3">
            <Card.Body>The free plan offers a limited number of predictions. You can upgrade to a paid plan for unlimited access.</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </section>
  );
};

export default FAQ;
