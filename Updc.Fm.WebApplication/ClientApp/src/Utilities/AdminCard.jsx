import React from 'react';

const AdminCard = (props) => {
  return (
    <div className="flex relative bg-white w-[240px] h-[120px] rounded-md shadow-sm shadow-[#a73439]/25">
      <div className="flex absolute right-0 flex-row justify-end">
        <div>
          <input type="checkbox" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center gap-20">
          <div className="pl-5">
            <h1 className="font-medium text-[#B9B0B0]">{props.Header}</h1>
          </div>
          <div>
            <img
              src={props.Icon}
              alt="Real Estate"
              className="h-[50px] w-[50px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center pt-[-45rem] ml-[-3.5rem]">
          <div className=" mt-[-1rem]">
            <h1 className="font-medium text-[#0f0f0f] text-sm">
              Name: {props.Name}
            </h1>
          </div>
          <div>
            <h1 className="font-medium text-[#0f0f0f] text-sm">
              Manager: {props.Manager}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
