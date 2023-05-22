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
