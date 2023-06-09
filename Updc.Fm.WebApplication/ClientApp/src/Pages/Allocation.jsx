
import Table from '../Utilities/Table';
import NavContainer from '../components/NavContainer';
import { allocationDashboard } from '../components/NavLists';
import { GetRequest } from '../Auth/hooks/useGet';
import BreadCrumb from '../Utilities/BreadCrumb';
import { useEffect, useState } from 'react';
// import { DataKey } from '../Services/GetDataKey';
import SearchBox from '../Utilities/SearchBox';
import Loader from '../components/Loader';

let tableHeader = [
  { first_name: 'First Name' },
  { last_name: 'Last Name' },
  { email: 'Email' },
  { phone_number: 'Phone Number' },
  { estate: 'Estate' },
  { unit: 'Unit' },
];
const Allocation = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const getResident = async () => {
      const { status, data } = await GetRequest('api/residents');
      console.log(data);
      if (status === 200) {
        data.forEach((e) => {
          let newE = {
            first_name: e.first_name,
            last_name: e.last_name,
            email: '',
            activation_stage: e.activation_stage,
            phone_number: '',
            unit: e.unit.unit_number,
            estate: e.estate.estate_name,
          };
          const contacts = e.contacts;
          console.log(contacts);

          contacts.forEach((e) => {
            if (e.type === 'EMAIL' && e.default === 'Y') {
              newE.email = e.value;
              console.log(e);
            }
            if (
              e.type.toLowerCase() === 'phone' &&
              e.default.toLowerCase() === 'y'
            ) {
              newE.phone_number = e.value;
            }
          });
          setResidents((i) => [...i, newE]);
        });
        setIsLoading(false);
      }
    };

    getResident();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
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
          <div>
            {' '}
            <div className=" mt-8 px-4">
              <BreadCrumb
                main="Sales"
                mainUrl="/sales"
                first="Allocation"
                firstUrl="/sales/allocation"
              />
            </div>
            <div className=" space-y-2 px-4 py-4">
              <div className=" flex justify-end px-1 py-4">
                {/* <div className="flex flex-col space-x-1 md:flex-row md:space-x-3 font-medium items-center ">
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
              </div> */}
                <div>
                  <SearchBox query={handleSearch} />
                </div>
              </div>
              <div className="">
                {residents ? (
                  <Table
                    filter={['first_name', 'last_name']}
                    header={tableHeader}
                    data={residents && residents}
                    query={searchQuery}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </NavContainer>
      )}
    </>
  );
};

export default Allocation;
