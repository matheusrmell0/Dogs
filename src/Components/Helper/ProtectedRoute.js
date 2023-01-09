import React from 'react';
import { UserContext } from '../../UserContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, route }) => {
  const { login } = React.useContext(UserContext);

  return login ? <>{children}</> : <Navigate to={route} />;
};

export default ProtectedRoute;
