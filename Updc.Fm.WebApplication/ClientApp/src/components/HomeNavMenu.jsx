import React from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
// import { MdNotifications, MdSettings } from 'react-icons/md';
import './NavMenu.css';
import ProfilePic from '../assets/img/profilepic.png';
import LogoutIcon from '../assets/img/logout-circle.svg';
import { useAuth } from '../Auth/hooks/useAuth';

const HomeNavMenu = () => {
  const { handleLogout } = useAuth();
  return (
    <div className="flex items-center mx-10 h-[50px]">
      <div className=" flex items-center justify-between w-screen">
        <NavLink
          tag={Link}
          className="font-bold text-lg text-[#a73439] hover:text-[#bd4143]"
          to="/"
        >
          FACILITY MANAGER
        </NavLink>

        {/* <div className="flex md:flex-row space-x-0">
          <div className="px-6 py-2 text-sm font-medium text-[#a73439] hover:bg-[#bd4143] hover:text-white rounded-full ">
            <NavLink tag={Link} className="" to="/admin">
              Admin
            </NavLink>
          </div>
          <div className="px-6 py-2 text-sm font-medium text-[#a73439] hover:bg-[#bd4143] hover:text-white rounded-full">
            <NavLink tag={Link} className="" to="/accounts">
              Account
            </NavLink>
          </div>
          <div className="px-6 py-2 text-sm font-medium text-[#a73439] hover:bg-[#bd4143] hover:text-white rounded-full">
            <NavLink tag={Link} className="" to="/sales">
              Sales
            </NavLink>
          </div>
        </div> */}

        <div className="flex md:flex-row space-x-3">
          {/* <div className="inline-flex items-center justify-center w-8 h-8 bg-[#a73439] rounded-full text-white shadow-md shadow-rose-500/20">
            <NavLink tag={Link} className="" to="/">
              <MdNotifications />
            </NavLink>
          </div> */}
          {/* <div className="inline-flex items-center justify-center w-8 h-8 bg-[#a73439] rounded-full text-white shadow-md shadow-rose-500/20">
            <NavLink tag={Link} className="" to="/">
              <MdSettings />
            </NavLink>
          </div> */}
          <div className="inline-flex items-center justify-center w-8 h-8 bg-[#a73439] rounded-full text-white shadow-md shadow-rose-500/20 group relative">
            <NavLink tag={Link} className="" onClick={handleLogout}>
              <img src={LogoutIcon} alt="logout" className="w-4 h-4" />
            </NavLink>
            <span
              class="group-hover:opacity-100 transition-opacity bg-gray-600 p-1 text-xs font-semibold text-gray-100 rounded-md absolute left-1/2 
    -translate-x-1/2 translate-y-full opacity-0 mt-4 mx-auto"
            >
              Logout
            </span>
          </div>
          <div className="inline-flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full text-white shadow-md shadow-rose-500/20">
            <img
              src={ProfilePic}
              className="w-8 h-8 rounded-full"
              alt="profile pic"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomeNavMenu;