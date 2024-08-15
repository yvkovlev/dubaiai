import React from 'react';
import {
  Form,
  Button,
  Row,
  Col,
} from 'react-bootstrap';

const Contact: React.FC = () => {
  return (
    <section className="contact py-5">
      <h2 className="text-center mb-4">Got Questions? We&apos;re Here to Help!</h2>
      <Form>
        <Row>
          <Col md={6}>
            <Form.Group controlId="formName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="formEmail">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group controlId="formMessage">
          <Form.Label>Your Message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
        </Form.Group>
        <Button variant="primary" type="submit">Send Message</Button>
      </Form>
      <div className="contact-details text-center mt-4">
        <p>Email: support@realestateai.com</p>
        <p>Phone: +971 555 5555</p>
        <div className="social-links">
          <a href="#facebook">Facebook</a>
          <br />
          <a href="#twitter">Twitter</a>
          <br />
          <a href="#linkedin">LinkedIn</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
