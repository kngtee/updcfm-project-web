import React from "react";
import NavMenu from "./NavMenu";
import AdminIcon from "../assets/img/admin.svg";
import AccountIcon from "../assets/img/account.svg";
import SalesIcon from "../assets/img/sales.svg";

function Home() {
  return (
    <>
      <NavMenu />
      <div className="flex flex-row space-x-6 items-center justify-center pt-24">
        <div className="">
          <div className="inline-flex items-center justify-center w-48 h-48 bg-[#a73439] hover:bg-[#bd4143] rounded-full text-white shadow-md shadow-rose-500/20">
            <img src={AdminIcon} alt="admin" className="w-14 h-14" />
          </div>
          <div className="text-center pt-2 justify-center text-[#0F0F0F] text-lg font-semibold">
            Admin
          </div>
        </div>
        <div>
          <div className="inline-flex items-center justify-center w-48 h-48 bg-[#a73439] hover:bg-[#bd4143] rounded-full text-white shadow-md shadow-rose-500/20">
            <img src={AccountIcon} alt="accounts" className="w-14 h-14" />
          </div>
          <div className="text-center pt-2 justify-center text-[#0F0F0F] text-lg font-semibold">
            Account
          </div>
        </div>
        <div>
          <div className="inline-flex items-center justify-center w-48 h-48 bg-[#a73439] hover:bg-[#bd4143] rounded-full text-white shadow-md shadow-rose-500/20">
            <img src={SalesIcon} alt="sales" className="w-14 h-14" />
          </div>
          <div className="text-center pt-2 justify-center text-[#0F0F0F] text-lg font-semibold">
            Sales
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
