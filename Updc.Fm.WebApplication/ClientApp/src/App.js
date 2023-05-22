import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Sales from './Pages/Sales';
import SalesView from './components/SalesView';
import SalesNewUnit from './components/SalesNewUnit';
import { ProtectedRoute } from './Auth/ProtectedRoute';
import { AuthProvider } from './Auth/hooks/useAuth';
import Allocation from './Pages/Allocation';
import Admin from './Pages/Admin';
// import Admin from './Pages/Admin';
import { Accounts } from './Pages/Accounts';
import { InterventionJobs } from './Pages/InterventionJobs';
import { SingleJob } from './Pages/SingleJob';

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
          path="/sales/allocation"
          element={
            <ProtectedRoute>
              <Allocation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
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
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/jobs" element={<InterventionJobs />} />
        <Route path="/singlejob" element={<SingleJob />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;
