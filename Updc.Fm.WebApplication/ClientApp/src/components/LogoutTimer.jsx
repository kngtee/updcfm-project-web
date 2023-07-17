import { useEffect } from 'react';
import { useAuth } from '../Auth/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LogoutTimer = () => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();

  let idleTimer;
  const IDLE_TIMEOUT = 30000; // 5 minutes (in milliseconds)

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(handleIdle, IDLE_TIMEOUT);
  }

  function handleIdle() {
    // Perform idle actions (e.g., show a modal, log out the user, etc.)
    handleLogout();
    navigate('/login');
  }

  useEffect(() => {
    function handleEvent() {
      resetIdleTimer();
    }

    document.addEventListener('click', handleEvent);
    document.addEventListener('keypress', handleEvent);
    document.addEventListener('mousemove', handleEvent);
    document.addEventListener('touchstart', handleEvent);

    // idleTimer = setTimeout(handleIdle, IDLE_TIMEOUT);

    return () => {
      document.removeEventListener('click', handleEvent);
      document.removeEventListener('keypress', handleEvent);
      document.removeEventListener('mousemove', handleEvent);
      document.removeEventListener('touchstart', handleEvent);
      clearTimeout(idleTimer);
    };
  }, []);

  return null;
};

export default LogoutTimer;
