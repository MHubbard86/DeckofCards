import React from "react";
import { Navbar, Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <div className="fixed-bottom">  
    <Navbar variant="dark" bg="dark">
        <Container style={{ justifyContent: 'center' }}>
          <Navbar.Brand style={{ marginRight: '1rem' }}>Cards game by Matthew Hubbard</Navbar.Brand>
          </Container>
      </Navbar>
    </div>
  );
}
