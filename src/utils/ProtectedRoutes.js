import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../components/store/auth-context";

const NurseRoutes = () => {
    const { isAuthenticated } = useContext(AuthContext);
  
    return isAuthenticated.nurse ? <Outlet /> : <Navigate to="/login" />;
  };
  
  const PatientRoutes = () => {
    const { isAuthenticated } = useContext(AuthContext);
  
    return isAuthenticated.patient ? <Outlet /> : <Navigate to="/login" />;
  };

export { NurseRoutes, PatientRoutes };