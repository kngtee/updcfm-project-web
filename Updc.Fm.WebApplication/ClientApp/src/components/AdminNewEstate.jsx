import React from 'react';
import NavContainer from './NavContainer';
import { adminNewEstate } from './NavLists';
import DropDownButton from '../Utilities/DropDownButton';
import Buton from '../Utilities/Buton';

const AdminNewEstate = () => {
  return (
    <NavContainer dashboard={adminNewEstate}>
      <div className="">
        <div className="flex flex-row pt-7">
          <div>
            <p className="text-[#9A9595] cursor-pointer">
              Dashboard&nbsp;/&nbsp;
            </p>
          </div>
          <div>
            <p className="text-[#9A9595] cursor-pointer">
              &nbsp;Estate&nbsp;/&nbsp;
            </p>
          </div>
          <div>
            <p className="text-[#bd4143] cursor-pointer">&nbsp;New Estate</p>
          </div>
        </div>
        <div className="flex flex-col gap-10 justify-center mt-28">
          <div className="flex flex-row gap-20 justify-center">
            <div>
              <label className="font-medium text-sm text-[#0F0F0F]">
                Estate Name:
              </label>
              <input
                type="text"
                placeholder="Enter estate name"
                className="rounded-md bg-white 
                  shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-3 
                  placeholder:text-[#9A9595] 
                  font-normal text-sm pl-2"
              />
            </div>
            <div>
              <div className="flex flex-row pt-1">
                <label className="font-medium text-sm text-[#0F0F0F] pt-1">
                  State:
                </label>
                <div className="ml-3">
                  <DropDownButton
                    first="Select State"
                    second="State 1"
                    third="State 3"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-row pt-1 ml-[10rem]">
              <label className="font-medium text-sm text-[#0F0F0F] pt-1">
                Cluster:
              </label>
              <div className="ml-[3.0rem]">
                <DropDownButton
                  first="Select Cluster"
                  second="Cluster 1"
                  third="Cluster 2"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-5 mt-32 justify-end pr-[10rem]">
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

export default AdminNewEstate;
