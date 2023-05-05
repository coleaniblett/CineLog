import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Searchbar } from '../Searchbar/Searchbar';

export const Header: React.FC = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className="me-auto">CineLog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home">Reviews</Nav.Link>
              <Nav.Link href="#home">Saved</Nav.Link>
              <Nav.Link href="#home">Settings</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Searchbar />
    </div>
  );
}