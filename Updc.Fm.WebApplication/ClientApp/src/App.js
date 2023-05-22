import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Sales from './Pages/Sales';
import SalesAllocation from './components/SalesAllocation';
import SalesView from './components/SalesView';
import SalesNewUnit from './components/SalesNewUnit';
import { ProtectedRoute } from './Auth/ProtectedRoute';
import { AuthProvider } from './Auth/hooks/useAuth';
// import Admin from './Pages/Admin';

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
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <Sales />
            </ProtectedRoute>
          }
        />
        <Route
          path="/salesa"
          element={
            <ProtectedRoute>
              <SalesAllocation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/salesv"
          element={
            <ProtectedRoute>
              <SalesView />
            </ProtectedRoute>
          }
        />
        <Route path="/salesu" element={<SalesNewUnit />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;
