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
import { CreateInspection } from './Pages/CreateInspection';
import SalesAllocatedUnit from './components/SalesAllocatedUnit';
import AdminEstate from './components/AdminEstate';
import AdminNewEstate from './components/AdminNewEstate';
import Loader from './components/Loader';
import AdminCluster from './components/AdminCluster';
import AdminNewCluster from './components/AdminNewCluster';
import AdminStaff from './components/AdminStaff';
import AdminNewStaff from './components/AdminNewStaff';
import AdminClusterInfo from './components/AdminClusterInfo';
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import AdminEstateInfo from './components/AdminEstateInfo';

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

        <Route
          path="/admin/admincluster_info/:id"
          element={
            <ProtectedRoute>
              <AdminClusterInfo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/adminestate_info/:id"
          element={
            <ProtectedRoute>
              <AdminEstateInfo />
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
          path="/admin/estate"
          element={
            <ProtectedRoute>
              <AdminEstate />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/new_estate"
          element={
            <ProtectedRoute>
              <AdminNewEstate />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/cluster"
          element={
            <ProtectedRoute>
              <AdminCluster />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/new_cluster"
          element={
            <ProtectedRoute>
              <AdminNewCluster />
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
        <Route
          path="admin/staff"
          element={
            <ProtectedRoute>
              <AdminStaff />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin/new_staff"
          element={
            <ProtectedRoute>
              <AdminNewStaff />
            </ProtectedRoute>
          }
        />
        <Route
          path="/loader"
          element={
            <ProtectedRoute>
              <Loader />
            </ProtectedRoute>
          }
        />
        <Route path="/salesu" element={<SalesNewUnit />} />
        <Route path="/salesau" element={<SalesAllocatedUnit />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/jobs" element={<InterventionJobs />} />
        <Route path="/jobs/:id" element={<SingleJob />} />
        <Route path="/jobs/:id/inspectjob" element={<CreateInspection />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
      </Routes>
    </AuthProvider>
  );
}
export default App;
