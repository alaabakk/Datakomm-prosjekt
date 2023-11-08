import React, { createContext, useState } from 'react';

// Create a context for the auth state
export const AuthContext = createContext();

// Create a provider component for the auth context
export const AuthContextProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState({
        nurse: false,
        patient: false,
        role: "",
      });
    
      const authenticate = (userType, user) => {
        // Authenticate the user
        setIsAuthenticated(prevState => ({
          ...prevState,
          [userType]: true,
          role: user,
        }));
      };
    
      const logout = (userType) => {
        // Log out the user
        setIsAuthenticated(prevState => ({
          ...prevState,
          [userType]: false,
          role: "",
        }));
      };


    return (
        <AuthContext.Provider value={{ isAuthenticated, authenticate, logout }}>
            {children}
        </AuthContext.Provider>
    );
};