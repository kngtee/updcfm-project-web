import React, { useEffect, useState } from 'react';
import NavContainer from './NavContainer';
import { adminStaff } from './NavLists';
import Table from '../Utilities/Table';
import Loader from '../components/Loader';
import { GetRequest } from '../Auth/hooks/useGet';

let tableHeader = [
  { first_Name: 'First Name' },
  { last_Name: 'Last Name' },
  { phoneNumber: 'Phone Number' },
  { email: 'EMail' },
];

const AdminStaff = () => {
  const [staffs, setStaffs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={adminStaff}>
          <div>
            <div className="flex flex-row pt-7 justify-center">
              <div>
                <p className="text-[#9A9595] cursor-pointer">
                  Dashboard&nbsp;/&nbsp;
                </p>
              </div>
              <div>
                <p className="text-[#bd4143] cursor-pointer">&nbsp;Staff</p>
              </div>
              <div>
                <button
                  className="ml-[650px] border-2 rounded 
            border-[#bd4143] w-[80px] 
            h-[40px] cursor-pointer text-[#bd4143] text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="flex flex-col mt-5 justify-center">
              <div className="flex flex-row gap-[33rem] justify-center">
                <div>
                  <input
                    type="text"
                    className="rounded-md bg-white 
                shadow-sm shadow-[#a73439]/25 w-[130px] h-[40px]
                placeholder:text-[#9A9595] 
                  font-normal text-sm pl-2"
                    placeholder="Status"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    className="rounded-md bg-white 
                  shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px]
                  placeholder:text-[#9A9595] 
                    font-normal text-sm pl-2"
                    placeholder="Status"
                  />
                </div>
              </div>
              <div className="">
                {staffs ? (
                  <Table
                    filter={['first_Name', 'last_Name']}
                    header={tableHeader}
                    data={staffs && staffs}
                    query={''}
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

export default AdminStaff;
