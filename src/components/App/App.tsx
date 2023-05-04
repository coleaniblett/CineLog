import React from 'react';
import { Signup } from '../Signup/Signup';
import { LogIn } from '../LogIn/LogIn';
import { Home } from '../Home/Home';
import { Container } from 'react-bootstrap';
import { AuthProvider } from '../../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Container 
      className="d-flex align-items-center justify-content-center" 
      style={{ minHeight: "100vh"}}
    >
      <div className="w=100" style={{ maxWidth: 400}}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
