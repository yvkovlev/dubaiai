import React, { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
} from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../../store';

import { FlowHeadline } from '../../../components/Flow/FlowHeadline/FlowHeadline';
import { FlowHeader } from '../../../components/Flow/FlowHeader/FlowHeader';
import { FlowText } from '../../../components/Flow/FlowText/FlowText';
import { Paths } from '../../../constants';
import { getPropertySearchResultsThunk, selectPropertySearchQuery, selectPropertySearchResults } from '../../../store/property.search.reducer';
import { selectAccessToken } from '../../../store/auth.reducer';

import './SelectProject.css';

export const SelectProject: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const accessToken = useAppSelector(selectAccessToken);
  const propertySearchQuery = useAppSelector(selectPropertySearchQuery);
  const propertySearchResults = useAppSelector(selectPropertySearchResults);

  const [query, setQuery] = useState<string>(propertySearchQuery);

  useEffect(() => {
    if (!accessToken) {
      return;
    }

    if (query.length > 0) {
      dispatch(getPropertySearchResultsThunk({
        query,
        accessToken,
        onSuccess: () => {
          console.log('success');
        },
        onFailure: () => {
          // error
        },
      }));
    }
  }, [query, accessToken]);

  return (
    <div className="SelectProject">
      <Container className="SelectProject__section Flow__section">
        <Row>
          <Col lg={3} />
          <Col lg={6}>
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
              <InputGroup className="my-1">
                <Form.Control
                  placeholder="Start typing..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <InputGroup.Text id="inputGroup-sizing-default">
                  🔎
                </InputGroup.Text>
              </InputGroup>
              <div className="my-1">
                {
                  propertySearchResults.map((item) => (
                    <div className="SelectProject__result" key={item.id}>
                      <div className="SelectProject__resultTitle">{item.projectName}</div>
                      <div className="SelectProject__resultSubtitle">{`${item.masterProject} •  ${item.buildingName}`}</div>
                    </div>
                  ))
                }
              </div>
            </div>
          </Col>
          <Col lg={3} />
        </Row>
      </Container>
    </div>
  );
};
