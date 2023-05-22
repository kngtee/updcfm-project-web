import React from 'react'
const Sales = () => {

  return (
    <h2>SalesAllocation</h2>
  )
}

export default Sales
=======
import NavContainer from '../components/NavContainer';
import { salesDashboard } from '../components/NavLists';

const sales = salesDashboard;

const Sales = () => {
  return (
    <NavContainer dashboard={sales}>
      <div>Sales</div>
    </NavContainer>
  );
};

export default Sales;
>>>>>>> c4a55db5d39723a63270cb75fe1251a5ec5196c5
