import React, { useEffect, useState } from 'react';
import NavContainer from './NavContainer';
import { adminStaff } from './NavLists';
import Table from '../Utilities/Table';
import Loader from '../components/Loader';
import { GetRequest } from '../Auth/hooks/useGet';
import SearchBox from '../Utilities/SearchBox';

let tableHeader = [
  { first_Name: 'First Name' },
  { last_Name: 'Last Name' },
  { phoneNumber: 'Phone Number' },
  { email: 'EMail' },
];

const AdminStaff = () => {
  const [staffs, setStaffs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const getStaff = async () => {
      setIsLoading(true);
      const { status, data } = await GetRequest('/api/staffs');
      if (status === 200) {
        data.forEach((staff) => {
          let newE = {
            first_Name: staff.first_Name,
            last_Name: staff.last_Name,
            phoneNumber: staff.phone_Number,
            email: staff.email,
          };

          setStaffs((i) => [...i, newE]);
        });
        setIsLoading(false);
        // console.log('Staffs: ' + data);
      }
    };

    getStaff();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={adminStaff}>
          <div className="flex flex-col px-4 py-8 space-y-8">
            {/* Breadcrumbs and delete button */}
            <div className="flex flex-row space-x-[39rem]">
              <div className="flex flex-row" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 font-normal">
                  <li className="items-center">
                    <a
                      href="/admin"
                      className="inline-flex items-center text-sm text-gray-500 hover:text-[#a73439]"
                    >
                      Dashboard
                    </a>
                  </li>

                  <li aria-current="page" className="inline-flex">
                    <div className="inline-flex items-center">
                      <svg
                        aria-hidden="true"
                        fill="currentColor"
                        className="w-3 h-3 text-gray-400 ml-1 md:ml-2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                        transform="rotate(160)"
                      >
                        <g id="SVGRepo_iconCarrier">
                          <path d="M21.71,3.29a1,1,0,0,0-1.42,0l-18,18a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l18-18A1,1,0,0,0,21.71,3.29Z"></path>
                        </g>
                      </svg>
                      <span className="ml-1 text-sm text-[#d36360] md:ml-2">
                        Staff
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex flex-row ml-[44rem]">
              {/* Search */}
              <div className="font-medium">
                {/* <input
                  type="search"
                  id="search"
                  placeholder="Search for staff..."
                  className="bg-white text-gray-400 h-[35px] text-sm font-medium rounded shadow-sm shadow-[#a73439]/25 block px-3 py-2.5"
                /> */}
                <SearchBox query={handleSearch} />
              </div>
            </div>
            <div>
              {staffs ? (
                <Table
                  filter={['first_Name', 'last_Name']}
                  header={tableHeader}
                  data={staffs && staffs}
                  query={searchQuery}
                />
              ) : // <Table
              //   textCol1="Full Name"
              //   textCol2="Email"
              //   textCol3="Phone No"
              //   textCol4="Estate"
              //   textCol5="Status"
              // />
              null}
            </div>
          </div>
        </NavContainer>
      )}
    </>
  );
};

export default AdminStaff;
