import React from 'react';
import NavContainer from './NavContainer';
import { adminStaffOverview } from './NavLists';
import StaffOverviewCard from '../Utilities/StaffOverviewCard';
import StaffRoleCard from '../Utilities/StaffRoleCard';

const AdminStaffOverView = () => {
  return (
    <NavContainer dashboard={adminStaffOverview}>
      <div className="ml-24">
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
            <p className="text-[#bd4143] cursor-pointer">&nbsp;Details</p>
          </div>
        </div>
        <div className="flex flex-row gap-20 mt-10">
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
