import React, { useState } from 'react';
import { Signup } from '../Signup/Signup';
import { LogIn } from '../LogIn/LogIn';
import { Home } from '../Home/Home';
import { AuthProvider } from '../../contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Reviews } from '../Reviews/Reviews';
import { Saved } from '../Saved/Saved';
import { Settings } from '../Settings/Settings';
import { Movie } from '../Movie/Movie';

export const App: React.FC = () => {
  const [movie, setMovie] = useState<number | null>(null);

  return (
      <div className="bg-danger">
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/login" element={<LogIn />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/" element={<Home setMovie={setMovie} />} />
              <Route path="/reviews" element={<Reviews setMovie={setMovie} />} />
              <Route path="/saved" element={<Saved setMovie={setMovie} />} />
              <Route path="/settings" element={<Settings setMovie={setMovie} />} />
              <Route path="/movie" element={<Movie setMovie={setMovie} movieID={movie} />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    
  );
}
