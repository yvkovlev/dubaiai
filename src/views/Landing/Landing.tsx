import React, { FC } from 'react';
import { Container } from 'react-bootstrap';

import Hero from './components/Hero';

import './Landing.css';
import ProblemSolution from './components/ProblemSolution';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import TargetAudiences from './components/TargetAudiences';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

export const Landing: FC = () => {
  return (
    <Container fluid className="Landing">
      <Hero />
      <ProblemSolution />
      <HowItWorks />
      <Benefits />
      <TargetAudiences />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      {/* <Container className="Landing__section">
        <Row>
          <Col>
            <h4>
              Predict the Price of a Property
            </h4>
            <h1>
              WE MAKE YOU UNDERSTAND THE REAL PRICE OF YOUR NEW HOME
            </h1>
            <p>
              Our machine learning models allow us to predict the current price of real estate in Dubai. Models work on big data and take into account many parameters.
            </p>
          </Col>
          <Col>
            <p>
              Image
            </p>
          </Col>
        </Row>
      </Container> */}
    </Container>
  );
};
