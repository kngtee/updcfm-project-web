import { Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

export const ProtectedRoute = ({ children }) => {
  const { token } = useAuth();

  if (!token) {
    //user not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};

// export default ProtectedRoute;
