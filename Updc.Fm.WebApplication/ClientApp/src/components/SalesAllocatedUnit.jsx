import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SalesAllocatedUnit = ({ selectedRow }) => {
  console.log(selectedRow);
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav('/sales/allocation');
      }}
      className=" "
    >
      <div className="  bg-white relative mt-[100px] m-auto py-4 w-[480px] h-[250px] font-medium text-lg shadow-lg rounded-lg ">
        <div className="flex flex-row justify-center space-x-28">
          <div className="">
            <div className=" flex justify-center  rounded-full w-[60px] h-[60px] bg-gray-500">
              <FiDownload className="mt-5" size={20} />
            </div>
          </div>
          <div className="pt-2">
            {selectedRow && (
              <h4 className='text-[20px] font-bold'>
                {selectedRow.first_name + ' ' + selectedRow.last_name}
                {/* <h4 className="text-gray-400 text-sm">{selectedRow.unit}</h4> */}
              </h4>
            )}
          </div>
          <div className="w-[10%] mt-2">
            <FaPen size={20} color="#A73439" />
          </div>
        </div>
        <div className="flex flex-row px-4 mt-4">
          {selectedRow && (
            <div className="flex flex-col">
              <div className="ml-2">
                <span className="mr-8 text-gray-400">Email:</span>
                {selectedRow.email}
                <br />
                <span className="mr-6 text-gray-400">Phone:</span>
                {selectedRow.phone_number}
                <br />
                <span className="mr-10 text-gray-400">Unit:</span>
                {selectedRow.unit}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesAllocatedUnit;
