import React from 'react';
import AdminIcon from '../assets/img/admin.svg';
import AccountIcon from '../assets/img/account.svg';
import SalesIcon from '../assets/img/sales.svg';
import LogoutTimer from '../components/LogoutTimer';
import HomeNavMenu from '../components/HomeNavMenu';

const Home = () => {
  return (
    <>
      <HomeNavMenu />

      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 items-center justify-center pt-24">
        <MenuItem icon={AdminIcon} link="/admin" label="Admin" />
        <MenuItem icon={AccountIcon} link="/accounts" label="Account" />
        <MenuItem icon={SalesIcon} link="/sales" label="Sales" />
      </div>
      <LogoutTimer />
    </>
  );
};

const MenuItem = ({ icon, link, label }) => {
  return (
    <a href={link}>
      <div className="inline-flex items-center justify-center w-48 h-48 bg-[#a73439] hover:bg-[#bd4143] rounded-full text-white shadow-md shadow-rose-500/20">
        <img src={icon} alt={label} className="w-14 h-14" />
      </div>
      <div className="text-center pt-2 justify-center text-[#0f0f0f] text-lg font-semibold">
        {label}
      </div>
    </a>
  );
};
export default Home;
