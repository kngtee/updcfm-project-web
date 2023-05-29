import React, { useState } from 'react';
import DropDownButton from '../Utilities/DropDownButton';
import Buton from '../Utilities/Buton';
import NavContainer from './NavContainer';
import { newUnitDashboard } from '../components/NavLists';
// import {data} from '../Utilities/TableData'

const SalesNewUnit = () => {
  // const [tableData, setTableData] = useState({data});
  const [formData, setformData] = useState({
    First_Name: '',
    LastName: '',
    Email: '',
    PhoneNum: '',
  });
  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };
  // const handleSubmit = (e) => {
  //   onSubmit(console.log(formData));
  // };
  return (
    <NavContainer dashboard={newUnitDashboard}>
      <form onSubmit={{}}>
        <div className=" flex justify-around mt-20 ml-20 rounded-lg w-[700px] p-1 h-[400px]">
          <div className=" w-[45%] ">
            <div className=" flex mt-[1.5rem] justify-between w-[300px] ">
              <span>
                <h5 className="w-[30px] h-[35px]">FirstName: </h5>
              </span>
              <input
                className="w-[200px] shadow-lg h-[35px] rounded-md px-4 "
                type="text"
                name="First_Name"
                placeholder="Enter first name"
                value={formData.First_Name}
                onChange={handleChange}
              />
            </div>
            <div className=" flex mt-[1.5rem] justify-between w-[300px]">
              {' '}
              <span>
                <h5 className="w-[60px] h-[35px]">Email:</h5>{' '}
              </span>
              <input
                className="w-[200px] shadow-lg h-[35px] rounded-md px-4 "
                type="text"
                name="Email"
                placeholder="Enter email address"
                value={formData.Email}
                onChange={handleChange}
              />
            </div>
            <div className="mt-[1.5rem] flex justify-between w-[300px]">
              <span>
                <h5 className="w-[30px] h-[35px]">Cluster: </h5>
              </span>
              <div className=' bg-white text-gray-400 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block   shadow-[#a73439]/25"'>
                <DropDownButton
                  className=""
                  first="Cluster"
                  second="Estate"
                  third="Unit"
                />
              </div>
            </div>
            <div className="mt-[1.5rem] flex justify-between w-[300px]">
              {' '}
              <span>
                <h5 className="w-[30px] h-[35px]"> Unit: </h5>{' '}
              </span>
              <div className=' bg-white text-gray-400 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block   shadow-[#a73439]/25"'>
                <DropDownButton
                  value=''
                  className=""
                  first="Unit"
                  second="Jobs"
                  third="Unit"
                />
              </div>
            </div>
          </div>
          <div className="w-[45%] ">
            <div className=" flex justify-between mt-[1.5rem] w-[300px]">
              <span>
                <h5 className="w-[30px] h-[35px]">LastName:</h5>{' '}
              </span>
              <input
                className="w-[200px] shadow-lg h-[35px] rounded-md px-4 "
                type="text"
                placeholder="Enter Last name"
                name="LastName"
                value={formData.LastName}
                onChange={handleChange}
              />
            </div>
            <div className=" flex justify-between mt-[1.5rem] w-[300px]">
              {' '}
              <span>
                <h5 className="w-[30px] h-[35px]">PhoneNo: </h5>{' '}
              </span>
              <input
                className="w-[200px] shadow-lg h-[35px] rounded-md px-4 boxShadow:2px 5px 10px grey"
                type="text"
                placeholder="Enter Phone number"
                value={formData.PhoneNum}
                name="PhoneNum"
                onChange={handleChange}
              />
            </div>
            <div className="mt-[1.5rem] flex justify-between w-[300px]">
              {' '}
              <span>
                <h5 className="w-[30px] h-[35px]">Estate:</h5>{' '}
              </span>
              <div className=" bg-white text-gray-400 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block   shadow-[#a73439]/25">
                {' '}
                <DropDownButton
                  className=" "
                  first="Select Estate"
                  second="Estate"
                  third="Unit"
                />
              </div>
            </div>
            <div className=" flex  justify-end gap-4 mr-2 mt-36">
              {' '}
              <Buton
                className="px-3 py-1 bg-white rounded-md hover:bg-red-600 hover:text-white text-black border border-red-600 "
                text="Cancel"
              />{' '}
              <span className="">
                <Buton
                  className=" px-3 py-1 bg-green-500 text-white shadow-green-500/50 rounded-md hover:bg-white hover:text-green-500"
                  text="Allocate"
                  onClick={() => {
                    setformData(console.log(formData));
                  }}
                />{' '}
              </span>
            </div>
          </div>
        </div>
      </form>
    </NavContainer>
  );
};

export default SalesNewUnit;
