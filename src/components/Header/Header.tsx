import React, { FC, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Navbar,
  NavbarBrand,
  Container,
  Nav,
} from 'react-bootstrap';

import { useAppDispatch, useAppSelector } from '../../store';
import { selectAccessToken, signOut } from '../../store/auth.reducer';
import logo from '../../assets/logo.svg';
import { Paths } from '../../constants';

import './Header.css';

export const Header: FC = () => {
  const dispatch = useAppDispatch();
  const accessToken = useAppSelector(selectAccessToken);
  const signOutHandler = useCallback(() => {
    dispatch(signOut());
  }, []);

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
            <NavLink to={Paths.PROPERTY_PREDICTION_SELECT_PROJECT} className="Header__navLink nav-link">PROPERTY_PREDICTION_SELECT_PROJECT</NavLink>
            <NavLink to={Paths.PROPERTY_PREDICTION_ADJUST_PARAMETERS} className="Header__navLink nav-link">PROPERTY_PREDICTION_ADJUST_PARAMETERS</NavLink>
            <NavLink to={Paths.PROPERTY_PREDICTION} className="Header__navLink nav-link">PROPERTY_PREDICTION</NavLink>
          </Nav>
          <Nav className="ml-auto">
            {
              accessToken === null
                ? <NavLink to={Paths.AUTH} className="nav-link">Sign-in / Sign-up</NavLink>
                : <NavLink to={Paths.MAIN} className="nav-link" onClick={signOutHandler}>Sign-out</NavLink>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
