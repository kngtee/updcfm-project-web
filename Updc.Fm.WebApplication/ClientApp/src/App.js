import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Sales from './Pages/Sales';
// import { ProtectedRoute } from './Auth/ProtectedRoute';
// import { AuthProvider } from './Auth/hooks/useAuth';
import SalesAllocation from './components/SalesAllocation';
import SalesView from './components/SalesView';
import SalesNewUnit from './components/SalesNewUnit';

function App() {
  return (
    // <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/salesa' element={<SalesAllocation />} />
        <Route path='/salesv' element={<SalesView />} />
        <Route path='/salesu' element={<SalesNewUnit />} />
      </Routes>
    // </AuthProvider>
  );
}
export default App;
