import React from 'react';
import NavContainer from './NavContainer';
import { adminStaffOverview } from './NavLists';
import StaffOverviewCard from '../Utilities/StaffOverviewCard';
import StaffRoleCard from '../Utilities/StaffRoleCard';

const AdminStaffOverView = () => {
  return (
    <NavContainer dashboard={adminStaffOverview}>
      <div className="flex flex-col px-4 py-8 space-y-8">
        <div className="flex flex-row">
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
                  <a
                    href="/admin/staff"
                    className="inline-flex ml-1 items-center text-sm text-gray-500 hover:text-[#a73439]"
                  >
                    Staff
                  </a>
                </div>
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
                    Details
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-row gap-20">
          <div>
            <StaffOverviewCard
              StaffName="Ayinla Abel"
              StaffType="Cluster Manager"
              StaffEmail="abelayinla@gmail.com"
              StaffPhoneNumb="09011001011"
            />
          </div>
          <div>
            <StaffRoleCard
              firstList="Cluster manager (CM)"
              secondList="Facility manager (FM)"
              thirdList="Backend Staff (BS)"
              fourthList="Super Amin (SM)"
            />
          </div>
        </div>
      </div>
    </NavContainer>
  );
};

export default AdminStaffOverView;
