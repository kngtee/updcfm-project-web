import React from 'react';
import Upload from '../assets/img/upload.png';
import pencil from '../assets/img/pencil.png';

const StaffOverviewCard = (props) => {
  return (
    <div className=" flex flex-row justify-center items-center bg-[#FFFFFF] rounded-lg w-[400px] h-[170px]">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row gap-36">
          <div>
            <img src={Upload} alt="Upload" className="w-[45px] h-[45px]" />
          </div>
          <div className="ml-[-8rem]">
            <h1 className="font-medium text-lg">{props.StaffName}</h1>
            <p className="text-[#9A9595] text-sm font-medium">
              {props.StaffType}
            </p>
          </div>
          <div>
            <img src={pencil} alt="Pencil" className="w-[15px] h-[15px]" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div>
            <p>
              <span className="text-[#9A9595] text-sm font-medium">Email:</span>{' '}
              <span className="text-[#0F0F0F] text-sm font-medium">
                {props.StaffEmail}
              </span>
            </p>
          </div>
          <div>
            <p>
              <span className="text-[#9A9595] text-sm font-medium">Phone:</span>{' '}
              <span className="text-[#0F0F0F] text-sm font-medium">
                {props.StaffPhoneNumb}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffOverviewCard;
