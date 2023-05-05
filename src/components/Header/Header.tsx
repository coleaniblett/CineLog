import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Searchbar } from '../Searchbar/Searchbar';
import { Link, useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className="pb-3">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className="me-auto"><Link to="/" className="link-warning">CineLog</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
              <Nav.Link href="#home"><Link to="/reviews" className="link-warning">Reviews</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/saved" className="link-warning">Saved</Link></Nav.Link>
              <Nav.Link href="#home"><Link to="/settings" className="link-warning">Settings</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Searchbar />
    </div>
  );
}