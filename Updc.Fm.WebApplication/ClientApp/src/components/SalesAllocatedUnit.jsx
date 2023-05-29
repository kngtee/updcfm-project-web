import React from 'react';
import { FiDownload } from 'react-icons/fi';
import { FaPen } from 'react-icons/fa';

const SalesAllocatedUnit = () => {
  return (
    <div className=" ">
      <div className=" relative mt-[95px] ml-[64px] w-[480px] h-[180px] font-medium text-lg shadow-lg rounded-lg ">
        <div className="w-[480px] p-8 flex h-[60%] ">
          <div className="w-[20%]">
            <div className=" flex justify-center  rounded-full w-[60px] h-[60px] bg-gray-500">
              <FiDownload className="mt-5" size={20} />
            </div>
          </div>
          <div className="w-[70%] ">
            Abel Yinka <br />
            <h4 className=" text-gray-400 text-sm">Unit 001</h4>
          </div>
          <div className="w-[10%] mt-2">
            <FaPen size={20} color="#A73439" />
          </div>
        </div>
        <div className="w-[460px] px-8 h-[30%]">
          <div className="ml-2">
            <span className=" mr-8 text-gray-400">Email:</span>
            abelayinla@gmail.com
            <br />
            <span className=" mr-6 text-gray-400">Phone:</span>090223333
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAllocatedUnit;
