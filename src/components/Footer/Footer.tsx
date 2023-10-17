import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Row,
  Col,
  Container,
  Navbar, Nav,
} from 'react-bootstrap';

import logo from '../../assets/logo.svg';
import { Paths } from '../../constants';

import './Footer.css';

export const Footer: FC = () => {
  return (
    <Navbar expand="lg" className="Footer py-0">
      <Container className="py-4">
        <Row>
          <Col>
            <img src={logo} alt="Logo" height="18" className="mb-3" />
            <p>
              Develop an informed understanding about topics that matter to you.
              Enjoy our analysis of the topics that matter most to you. Fair-minded.
              Expert analysis. Global perspective.
            </p>
          </Col>
          <Col>
            <h5>Menu</h5>
            <Nav className="d-block">
              <NavLink to={Paths.MAIN} className="Header__navLink nav-link px-0">Properties</NavLink>
              <NavLink to="#link" className="Header__navLink nav-link px-0">Pricing</NavLink>
              <NavLink to="#link" className="Header__navLink nav-link px-0">Contacts</NavLink>
            </Nav>
          </Col>
          <Col>
            <h5>Stay in Touch</h5>
            <Nav className="d-block">
              <NavLink to={Paths.MAIN} className="Header__navLink nav-link px-0">dubaiai@mail.com</NavLink>
              <NavLink to={Paths.MAIN} className="Header__navLink nav-link px-0">@dubaiai</NavLink>
            </Nav>
          </Col>
        </Row>
      </Container>
    </Navbar>
  );
};
