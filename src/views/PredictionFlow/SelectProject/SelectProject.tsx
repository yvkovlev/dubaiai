import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  Button,
} from 'react-bootstrap';

import { FlowHeadline } from '../../../components/Flow/FlowHeadline/FlowHeadline';
import { FlowHeader } from '../../../components/Flow/FlowHeader/FlowHeader';
import { FlowText } from '../../../components/Flow/FlowText/FlowText';
import { Paths } from '../../../constants';

import './SelectProject.css';

export const SelectProject: FC = () => {
  const navigate = useNavigate();

  return (
    <div className="SelectProject">
      <Container className="SelectProject__section Flow__section">
        <Row>
          <Col xs={3} />
          <Col xs={6}>
            <FlowHeadline
              text="Step 1/3"
              className="mb-3"
            />
            <FlowHeader
              text="🏠 Select a Project"
              className="mb-3"
            />
            <FlowText
              text="Choose a project from the list to start:"
            />
            <div className="SelectProject__form">
              <Form.Select>
                <option>Select the property project...</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
              <Button type="submit" className="mx-2" onClick={() => navigate(Paths.PREDICTION_ADJUST_PARAMETERS)}>
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
