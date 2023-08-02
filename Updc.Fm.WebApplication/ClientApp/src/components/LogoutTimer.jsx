import { useEffect } from 'react';
import { useAuth } from '../Auth/hooks/useAuth';

const LogoutTimer = () => {
  const { handleLogout } = useAuth();

  let idleTimer;
  const IDLE_TIMEOUT = 1200000; // 20 minutes (in milliseconds)

  function resetIdleTimer() {
    clearTimeout(idleTimer);
    idleTimer = setTimeout(handleIdle, IDLE_TIMEOUT);
  }

  function handleIdle() {
    handleLogout();
  }

  useEffect(() => {
    function handleEvent() {
      resetIdleTimer();
    }

    document.addEventListener('click', handleEvent);
    document.addEventListener('keypress', handleEvent);
    document.addEventListener('mousemove', handleEvent);
    document.addEventListener('touchstart', handleEvent);

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
