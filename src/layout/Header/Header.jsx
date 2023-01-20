import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavLinks from './NavLinks';
import './header.css';

export default function Header() {
  return (
    <>
      <Navbar expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ fontSize: '1.6rem'}}>Cards Game</Navbar.Brand> 
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="container-fluid" style={{ fontSize: '20px'}}>
              <NavLinks />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}