import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  InputGroup,
} from 'react-bootstrap';

import { FlowHeadline } from '../../../components/Flow/FlowHeadline/FlowHeadline';
import { FlowHeader } from '../../../components/Flow/FlowHeader/FlowHeader';
import { FlowText } from '../../../components/Flow/FlowText/FlowText';
import { Paths } from '../../../constants';

import './AdjustParameters.css';

export const AdjustParameters: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="AdjustParameters">
      <Container className="AdjustParameters__section Flow__section">
        <Row>
          <Col xs={3} />
          <Col xs={6}>
            <FlowHeadline
              text="Step 2/3"
              className="mb-3"
            />
            <FlowHeader
              text="⚙️ Adjust the parameters"
              className="mb-3"
            />
            <FlowText
              text="Select a parameters of real estate:"
            />
            <div className="Payment__form">
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Property Type:
                </Form.Label>
                <Col sm={8}>
                  <Form.Select>
                    <option disabled selected>Select type of the property...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Property Sub-Type:
                </Form.Label>
                <Col sm={8}>
                  <Form.Select>
                    <option disabled selected>Select sub-type of the property...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Property usage:
                </Form.Label>
                <Col sm={8}>
                  <Form.Select>
                    <option disabled selected>Select property usage...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Area:
                </Form.Label>
                <Col sm={8}>
                  <InputGroup>
                    <Form.Control
                      placeholder="Input area of the property..."
                    />
                    <InputGroup.Text>m²</InputGroup.Text>
                  </InputGroup>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Rooms:
                </Form.Label>
                <Col sm={8}>
                  <Form.Select>
                    <option disabled selected>Select number of rooms...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Parking:
                </Form.Label>
                <Col sm={8}>
                  <Form.Select>
                    <option disabled selected>Need parking?</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={4}>
                  Registration Type:
                </Form.Label>
                <Col sm={8}>
                  <Form.Select>
                    <option disabled selected>Select type of registration...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Form.Group>
              <Button type="submit" onClick={() => navigate(Paths.PREDICTION_LOADING)}>
                Continue
              </Button>
            </div>
          </Col>
          <Col xs={3} />
        </Row>
      </Container>
    </div>
  );
};
