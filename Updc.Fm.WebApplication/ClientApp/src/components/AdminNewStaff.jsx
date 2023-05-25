import React from 'react';
import NavContainer from './NavContainer';
import { adminNewStaff } from './NavLists';
import DropDownButton from '../Utilities/DropDownButton';
import Buton from '../Utilities/Buton';

const AdminNewStaff = () => {
  return (
    <NavContainer dashboard={adminNewStaff}>
      <div>
        <div className="flex flex-row pt-7">
          <div>
            <p className="text-[#9A9595] cursor-pointer">
              Dashboard&nbsp;/&nbsp;
            </p>
          </div>
          <div>
            <p className="text-[#9A9595] cursor-pointer">
              &nbsp;Staff&nbsp;/&nbsp;
            </p>
          </div>
          <div>
            <p className="text-[#bd4143] cursor-pointer">&nbsp;New Staff</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 justify-center mt-28">
          <div className="flex flex-row gap-20 justify-center">
            <div>
              <label className="font-medium text-sm text-[#0F0F0F]">
                First Name:
              </label>
              <input
                type="text"
                placeholder="Enter first name"
                className="rounded-md bg-white 
                  shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-3 
                  placeholder:text-[#9A9595] 
                  font-normal text-sm pl-2"
              />
            </div>
            <div>
              <label className="font-medium text-sm text-[#0F0F0F]">
                Last Name:
              </label>
              <input
                type="text"
                placeholder="Enter last name"
                className="rounded-md bg-white 
                  shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-3 
                  placeholder:text-[#9A9595] 
                  font-normal text-sm pl-2"
              />
            </div>
          </div>
          <div className="flex flex-row gap-20 justify-center">
            <div>
              <label className="font-medium text-sm text-[#0F0F0F] ml-[-0rem]">
                Email:
              </label>
              <input
                type="text"
                placeholder="Enter email address"
                className="rounded-md bg-white 
                  shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-10 
                  placeholder:text-[#9A9595] 
                  font-normal text-sm pl-2"
              />
            </div>
            <div>
              <label className="font-medium text-sm text-[#0F0F0F]">
                Phone no:
              </label>
              <input
                type="text"
                placeholder="Enter phone number"
                className="rounded-md bg-white 
                  shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-3 
                  placeholder:text-[#9A9595] 
                  font-normal text-sm pl-2"
              />
            </div>
          </div>
          <div className="flex flex-col justify-start">
            <div className="flex flex-row pt-1 ml-[9.5rem]">
              <label className="font-medium text-sm text-[#0F0F0F] pt-2">
                Role:
              </label>
              <div className="ml-[3rem]">
                <DropDownButton
                  first="Select Role"
                  second="Role 1"
                  third="Role 2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-10 justify-end pr-[10rem]">
            <div>
              <Buton
                className="border border-[#bd4143] w-[80px] h-[40px]
                cursor-pointer text-[#0F0F0F] 
                text-sm font-medium rounded-md"
                text="Cancel"
              />
            </div>
            <div>
              <Buton
                className="border border-[#34A739] w-[80px] 
                h-[40px] cursor-pointer bg-[#34A739] 
                text-white text-sm font-medium rounded-md"
                text="Create"
              />
            </div>
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default AdminNewStaff;
