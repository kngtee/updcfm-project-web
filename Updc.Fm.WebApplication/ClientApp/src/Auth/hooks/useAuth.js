import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { stringToBase64 } from '../../Services/Converter';
import axios from 'axios';
import { useLocalStorage } from './useLocalStorage';
import { errorMessage, successMessage } from '../../toast-message/toastMessage';
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [token, setToken] = useLocalStorage('token', null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (payload) => {
    const encodedPassword = stringToBase64(payload.password);

    const headers = {
      headers: {
        'x-access-pwd': `Bearer ${encodedPassword}`,
      },
    };
    setIsLoading(true);
    axios
      .post('api/auths', { email: payload.email }, headers)
      .then((res) => {
        setToken(res.data.token);
        setIsLoading(false);
        navigate('/');
        successMessage({
          message: 'Login successful.',
          title: 'Login Attempt.',
        });
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err.message);
        errorMessage({ title: 'Something went wrong', message: err.message });
      });
  };

  const handleLogout = () => {
    setToken(null);
    navigate('/login');
    successMessage({ title: 'Logout successful.' });
  };

  const value = useMemo(
    () => ({
      token,
      isLoading,
      handleLogin,
      handleLogout,
    }),

    // eslint-disable-next-line
    [token, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
