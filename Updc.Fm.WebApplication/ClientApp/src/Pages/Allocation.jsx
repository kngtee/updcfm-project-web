import { MdFilterAlt } from 'react-icons/md';
import Pagination from '../Utilities/Pagination';
import Table from '../Utilities/Table';
import NavContainer from '../components/NavContainer';
import DropDownButton from '../Utilities/DropDownButton';
import { allocationDashboard } from '../components/NavLists';
import { data } from '../Utilities/TableData';
import { GetRequest } from '../Auth/hooks/useGet';
import { useEffect, useState } from 'react';
import { DataKey } from '../Services/GetDataKey';
import Loader from '../components/Loader';
let tabelHeader = [
  'FirstName',
  'LastName',
  'Email',
  'Phone Number',
  'Activation Stage',
];
const Allocation = () => {
  const [residents, setResidents] = useState(null);
  const [objectKey, setObjectKey] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getResident = async () => {
      const { status, data } = await GetRequest('api/residents');
      console.log(data);
      if (status === 200) {
        setObjectKey(DataKey(data));
        setIsLoading(false);
        setResidents(data);
        console.log(data);
      }
    };

    getResident();
  }, [residents]);

  // if (isLoading) {
  //   return <Loader />;
  // }
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={allocationDashboard}>
          <div className=" w-full">
            <div className=" flex h-[40px] justify-between  w-full mt-[60px] ">
              <div>
                <DropDownButton first="Cluster" second="Estate" third="Unit" />
              </div>
              <div>
                <DropDownButton
                  first="Football"
                  second="Tennis"
                  third="Swimming"
                />
              </div>
              <button className=" mr-40 h-[40px] w-[40px] flex justify-center  bg-[#A73439] rounded-md">
                <MdFilterAlt class=" mt-2.5" size={20} color="white" />
              </button>
              <input
                class=" placeholder:italic placeholder:text-slate-400 block bg-white h-[40px] w-[200px] border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search ..."
                type="text"
                name="search"
              />
            </div>
            <div className="mt-10">
              {residents ? (
                <Table
                  header={tabelHeader}
                  objectKey={objectKey && objectKey}
                  data={residents && residents}
                />
              ) : null}
            </div>
          </div>
        </NavContainer>
      )}
    </>
  );
};

export default Allocation;
