import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserId] = useState('');

  const login = (id) => {
    setUserId(id); 
    setAuthenticated(true);
  };


  const logout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setAuthenticated(false);
    }
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, userId, logout }}>
      {children}
    </AuthContext.Provider>
  );
}