import React from 'react';
import NavContainer from '../components/NavContainer';
import { adminDashboard } from '../components/NavLists';

const nav = adminDashboard;
function Admin() {
  return (
    <NavContainer dashboard={adminDashboard}></NavContainer>
  )
}

export default Admin;
