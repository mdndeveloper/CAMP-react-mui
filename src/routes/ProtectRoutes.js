import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectRoutes = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) return <Navigate to='/' />;

  return <Outlet />;
};

export default ProtectRoutes;
