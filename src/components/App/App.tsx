import React from 'react';
import { Signup } from '../Signup/Signup';
import { LogIn } from '../LogIn/LogIn';
import { Home } from '../Home/Home';
import { AuthProvider } from '../../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Reviews } from '../Reviews/Reviews';
import { Saved } from '../Saved/Saved';
import { Settings } from '../Settings/Settings';
import { Movie } from '../Movie/Movie';

function App() {
  return (
      <div className="bg-danger">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/movie" element={<Movie />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    
  );
}

export default App;
