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
            <NavLink to={Paths.MAIN} className="Header__navLink nav-link">Properties</NavLink>
            <NavLink to="#link" className="Header__navLink nav-link">Pricing</NavLink>
            <NavLink to="#link" className="Header__navLink nav-link">Contacts</NavLink>
          </Nav>
          <Nav className="ml-auto">
            <NavLink to={Paths.SIGN_IN} className="nav-link">Sign-in</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
