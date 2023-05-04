import React from 'react';
import { Navbar, Container, Nav, NavDropdown, SplitButton } from 'react-bootstrap';
import { Searchbar } from '../Searchbar/Searchbar';

export const Header: React.FC = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">CineLog</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto">
              <Nav.Link href="#home">Movies</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <NavDropdown title="Settings" id="basic-nav-dropdown" className="m-auto" drop={'start'}>
            <NavDropdown.Item href="#action/3.1">
              Your Profile
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Reset Password
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Delete Account
            </NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
      <Searchbar />
    </div>
  );
}