import NavContainer from '../components/NavContainer';
import { salesDashboard } from '../components/NavLists';
import Cards from '../Utilities/Cards';
import DropDownButton from '../Utilities/DropDownButton';
import Jobs from '../assets/img/jobs.svg';
import JobsDone from '../assets/img/job-done-ok.svg';
import Vendors from '../assets/img/staff.svg';
import LogoutTimer from '../components/LogoutTimer';
import { useEffect, useState } from 'react';
import { GetRequest } from 'src/Auth/hooks/useGet';

const sales = salesDashboard;

const Sales = () => {
  const [allocation, setAllocation] = useState({
    totalUnit: 0,
    isAllocated: 0,
    availableUnit: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const getAllCountUnit = async () => {
    setIsLoading(true);
    try {
      const { data, status } = await GetRequest('api/units');
      if (status === 200) {
        setIsLoading(false);
        const fetcher = data.map((stat) => stat);
        console.log(fetcher);
        setAllocation({
          totalUnit: data.length,
          isAllocated: data.filter((unit) => unit.isAllocated === true).length,
          availableUnit: data.filter((unit) => unit.isAllocated === false)
            .length,
        });
      } else {
        console.log('error');
      }
    } catch (error) {
      alert('something went wrong');
    }
  };

  useEffect(() => {
    getAllCountUnit();
  }, []);
  return (
    <>
      <NavContainer dashboard={sales}>
        <div className="space-y-8 px-4 py-8">
          <div className="flex flex-row" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 font-normal">
              <li aria-current="page" class="inline-flex">
                <span class="inline-flex items-center text-sm text-[#d36360]">
                  Sales
                </span>
              </li>
            </ol>
          </div>
          <div className="flex flex-row space-x-12">
            <Cards
              title="Total Unit"
              num={allocation.totalUnit}
              icon={Jobs}
              isLoading={isLoading}
            />
            <Cards
              title="Available Unit"
              num={allocation.availableUnit}
              icon={JobsDone}
              isLoading={isLoading}
            />
            <Cards
              title="Allocated Unit"
              num={allocation.isAllocated}
              icon={Vendors}
              isLoading={isLoading}
            />
          </div>
        </div>
      </NavContainer>
      <LogoutTimer />
    </>
  );
};

export default Sales;
