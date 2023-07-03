// import React, { useEffect } from 'react';
import NavContainer from '../components/NavContainer';
import { salesDashboard } from '../components/NavLists';
import Cards from '../Utilities/Cards';
import DropDownButton from '../Utilities/DropDownButton';
// import { MdFilterAlt } from 'react-icons/md';
import Jobs from '../assets/img/jobs.svg';
import JobsDone from '../assets/img/job-done-ok.svg';
import Vendors from '../assets/img/staff.svg';

const sales = salesDashboard;

const Sales = () => {
  // useEffect(() => {
  //   const getUnits = () => {};
  // });
  return (
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
          {/* <button className=" inline-flex w-[35px] h-[35px] bg-[#a73439] text-white items-center justify-center rounded shadow-sm shadow-[#a73439]/25">
              <MdFilterAlt />
            </button> */}
        </div>
        <div className="flex flex-row space-x-12">
          <Cards title="Total Unit" num="100" icon={Jobs} />
          <Cards title="Available Unit" num="75" icon={JobsDone} />
          <Cards title="Allocated Unit" num="50" icon={Vendors} />
        </div>
      </div>
    </NavContainer>
  );
};

export default Sales;
