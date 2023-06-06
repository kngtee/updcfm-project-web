import { MdFilterAlt } from 'react-icons/md';
import Table from '../Utilities/Table';
import NavContainer from '../components/NavContainer';
import DropDownButton from '../Utilities/DropDownButton';
import { allocationDashboard } from '../components/NavLists';
import { GetRequest } from '../Auth/hooks/useGet';
import { useEffect, useMemo, useState } from 'react';
// import { DataKey } from '../Services/GetDataKey';
import SearchBox from '../Utilities/SearchBox';
import Loader from '../components/Loader';

let tableHeader = [
  { first_name: 'First Name' },
  { last_name: 'Last Name' },
  { email: 'Email' },
  { phone_number: 'Phone Number' },
  { activation_stage: 'Activation Stage' },
];
const Allocation = () => {
  const [residents, setResidents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getResident = async () => {
      const { status, data } = await GetRequest('api/residents');
      console.log(data);
      if (status === 200) {
        setIsLoading(false);
        data.filter((e) =>
          e.first_name.toLowerCase().includes(searchQuery.toLowerCase()),
        );
        setResidents(data);
        console.log(data);
      }
    };

    getResident();
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    // const sorted =
    //   residents &&
    //   residents.filter((e) =>
    //     e.first_name.toLowerCase().includes(query.toLowerCase()),
    //   );

    // setResidents(sorted);
  };

  // useEffect(() => {
  //   console.log('Sea: ' + searchQuery);
  // }, searchQuery);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={allocationDashboard}>
          <div className=" space-y-8 px-4 py-8">
            <div className=" flex  justify-between px-4 py-8">
              <div className="flex flex-col space-x-1 md:flex-row md:space-x-3 font-medium items-center ">
                <DropDownButton
                  first="Select Cluster"
                  second="Select Estate"
                  third="Unit"
                />
                <DropDownButton
                  first="Select Estate"
                  second="Select Cluster"
                  third="Jobs"
                />
                <button className=" inline-flex w-[35px] h-[35px] bg-[#a73439] text-white items-center justify-center rounded shadow-sm shadow-[#a73439]/25">
                  <MdFilterAlt />
                </button>{' '}
              </div>
              <div>
                <SearchBox query={handleSearch} />
              </div>
            </div>
            <div className="">
              {residents ? (
                <Table
                  header={tableHeader}
                  data={residents && residents}
                  query={searchQuery}
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
