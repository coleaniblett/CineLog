import React, { useState } from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Search } from '../Search/Search';
import { MovieDataType } from '../../util/MovieDataType';

// TODO: add "Log out" button

interface Props {
  setMovie: React.Dispatch<React.SetStateAction<MovieDataType | null>>;
}

export const Header: React.FC<Props> = ({ setMovie }: Props) => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    setError('');

    try {
      await logout();
    } catch {
      setError('Failed to log out');
    }
  }

  const logOutLink = (
    <div className="nav-item">
      <Link to="/login" className="nav-link link-warning" onClick={handleLogout}>Log Out</Link>
    </div>
  );

  const logInLink = (
    <div>
      <Link to="/login" className="nav-link link-warning">Log In</Link>
    </div>
  );

  return (
    <div className="pb-3">
      <Navbar>
        <Container>
          <div className="navbar-brand me-auto">
            <Link to="/" className="nav-link link-warning border border-1 border-warning p-1">CineLog</Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <div className="navbar-nav">
              <div className="nav-item">
                <Link to="/reviews" className="nav-link link-warning">Reviews</Link>
              </div>
              <div className="nav-item">
                <Link to="/saved" className="nav-link link-warning">Saved</Link>
              </div>
              <div className="nav-item">
                <Link to="/settings" className="nav-link link-warning">Settings</Link>
              </div>
              {currentUser ? logOutLink : logInLink}
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Search setMovie={setMovie} />
    </div>
  );
};