import React from 'react';
import NavContainer from '../components/NavContainer';
import { adminOverView } from '../components/NavLists';
import Cards from '../Utilities/Cards';
import Region from '../assets/img/Region.png';
import RealEstate from '../assets/img/Real Estate.png';
import Staff from '../assets/img/Staff.png';

function Admin() {
  return (
    <NavContainer dashboard={adminOverView}>
      <div className="">
        <div className="mt-7 ml-7">
          <ul>
            <li className="text-[#9A9595]">Dashboard</li>
          </ul>
        </div>
        <div className="flex flex-row">
          <div className="w-[300px]">
            <Cards textname="Total Cluster" num="50" icon={Region} />
          </div>
          <div className="w-[300px]">
            <Cards textname="Total Estate" num="1,000" icon={RealEstate} />
          </div>
          <div className="w-[300px]">
            <Cards textname="Total Staff" num="100" icon={Staff} />
          </div>
        </div>
        <div className="flex flex-row justify-center">
          <div className="bg-[#FFFFFF] w-[852px] shadow-2xl h-[300px] rounded-lg ml-[-1rem]">
            <div>
              <h1 className="text-gray-400 font-medium pt-[13px] pl-[19px]">
                Notification
              </h1>
            </div>
            <div className="flex justify-center">
              <div>
                <h1 className="text-gray-400 font-medium text-4xl pt-[100px]">
                  No new notification
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </NavContainer>
  );
}

export default Admin;
