import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const OnlyAdminRoutes = () => {
  const {
    user,
    proxy: { isProxy },
  } = useSelector((state) => state.auth);

  if (user.is_admin && isProxy) return <Navigate to='/messages' />;

  return <Outlet />;
};

export default OnlyAdminRoutes;
