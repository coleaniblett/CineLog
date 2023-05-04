import React from 'react';
import { Signup } from '../Signup/Signup';
import { LogIn } from '../LogIn/LogIn';
import { Home } from '../Home/Home';
import { AuthProvider } from '../../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
      <div className="w=100">
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
    
  );
}

export default App;
