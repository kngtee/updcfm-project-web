import React from 'react';
import NavContainer from '../components/NavContainer';
import { salesDashboard } from '../components/NavLists';
import Cards from '../Utilities/Cards';
import DropDownButton from '../Utilities/DropDownButton';
import { MdFilterAlt } from 'react-icons/md';
import Jobs from '../assets/img/jobs.svg';
import JobsDone from '../assets/img/job-done-ok.svg';
import Vendors from '../assets/img/staff.svg';

const sales = salesDashboard;

const Sales = () => {
  return (
    <NavContainer dashboard={sales}>
      
      <div className=" W-[800px]">
        <div className='ml-8 mt-3'>
        <div className="flex flex-row " >
            <ol className="inline-flex items-center space-x-1 md:space-x-2 font-normal">
              <li aria-current="page" class="inline-flex">
                <a
                  href="/jobs"
                  class="inline-flex items-center text-sm text-[#d36360]"
                >
                  SalesOverview
                </a>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <div className=" flex h-[40px] justify-around ml-6  w-[650px] mt-[30px] ">
            <div className=" bg-white text-gray-400 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block  p-1 shadow-[#a73439]/25">
              <DropDownButton first="Select Cluster" second="Select Cluster" third="Unit" />
            </div>
            <div className=" bg-white text-gray-400 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block  p-1 shadow-[#a73439]/25">
              <DropDownButton 
                first="Select Estate"
                second="Select Estate"
                third="Jobs"
              />
            </div>
            <button className=" mr-40 h-[40px] w-[40px] flex justify-center  bg-[#A73439] rounded-md">
              <MdFilterAlt class=" mt-2.5" size={20} color="white" />
            </button>
          </div>
        </div>
        <div className="flex justify-around mt-8 w-[800px]">
          <Cards className=""  textname="Total Unit" num="100" icon={Jobs}/>
          <Cards textname="Available Unit" num="75" icon={JobsDone} />
          <Cards textname="Allocated Unit" num="50" icon={Vendors} />
        </div>
      </div>
    </NavContainer>
  );
};

export default Sales;
