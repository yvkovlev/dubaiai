import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
} from 'react-bootstrap';

import logo from '../../assets/logo.svg';
import { Paths } from '../../constants';

import './Header.css';

export const Header: FC = () => {
  return (
    <Navbar expand="lg" className="Header">
      <Container>
        <NavbarBrand href={Paths.MAIN}>
          <img src={logo} alt="Logo" height="18" />
        </NavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <NavLink to={Paths.MAIN} className="Header__navLink nav-link">MAIN</NavLink>
            <NavLink to={Paths.ACCOUNT_PAYMENT} className="Header__navLink nav-link">ACCOUNT_PAYMENT</NavLink>
            <NavLink to={Paths.PREDICTION_SELECT_PROJECT} className="Header__navLink nav-link">PREDICTION_SELECT_PROJECT</NavLink>
            <NavLink to={Paths.PREDICTION_ADJUST_PARAMETERS} className="Header__navLink nav-link">PREDICTION_ADJUST_PARAMETERS</NavLink>
            <NavLink to={Paths.PREDICTION} className="Header__navLink nav-link">PREDICTION</NavLink>
          </Nav>
          <Nav className="ml-auto">
            <NavLink to={Paths.AUTH} className="nav-link">Sign-in / Sign-up</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
