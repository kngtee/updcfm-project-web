import React from 'react';
import Table from '../Utilities/Table';
import DropDownButton from '../Utilities/DropDownButton';
import { MdFilterAlt } from 'react-icons/md';

const SalesAllocation = () => {
  return (
    <div className=" w-[800px] h-[100v] ">
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
        </button>
      </div>
      <div className="mt-10">
        <Table
          textCol1="Full Name"
          textCol2="Email"
          textCol3="Phone No"
          textCol4="Estate"
          textCol5="Status"
        />
      </div>
      <div className="flex justify-between h-[36px] mt-10 w-[800px]">
        <span className=" text-gray-400">
          Searching 1 to 10 of 10,000 entries
        </span>
      </div>
    </div>
  );
};

export default SalesAllocation;
