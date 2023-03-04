import React, { useContext, useState, useEffect } from 'react';
import { auth } from '../util/Firebase/Firebase';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();

  const value = {
    currentUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}