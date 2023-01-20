import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Links from './Links';

export default function NavLinks() {
  return (
    <>
      {Links?.map((LinkMap, k) => (
        <React.Fragment key={k}>
          <Nav.Link as={Link} to={LinkMap.link} bg="white" eventKey={k}>
            {LinkMap.name}
          </Nav.Link>
        </React.Fragment>
      ))}
    </>
  );
}