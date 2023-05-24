import React from 'react';
import NavContainer from './NavContainer';
import { adminStaff } from './NavLists';
import Table from '../Utilities/Table';
import { data } from '../Utilities/TableData';

const AdminStaff = () => {
  return (
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
          <div className="mt-10 w-[854px] ml-[2.5rem]">
            <Table
              textCol1="Full Name"
              textCol2="Email"
              textCol3="Phone Number"
              textCol4="Role"
              textCol5="Status"
              data={data}
            />
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default AdminStaff;
