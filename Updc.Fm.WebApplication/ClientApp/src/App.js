import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { ProtectedRoute } from './components/Auth/ProtectedRoute';
import { AuthProvider } from './components/Auth/hooks/useAuth';

function App() {
  return (
    <AuthProvider>
      <Routes
        index
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      >
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;
