import React from 'react';

const StaffRoleCard = (props) => {
  return (
    <div className="flex flex-col gap-3 justify-center items-center bg-[#FFFFFF] rounded-lg w-[300px] h-[170px]">
      <div className="flex flex-col gap-2">
        <div>
          <h1 className="font-medium text-lg text-[#9A9595]">Add Role</h1>
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex flex-col gap-1">
            <ul>
              <li>
                <input type="checkbox" />
                <span className="font-medium text-sm text-[#0F0F0F] pl-1">
                  {props.firstList}
                </span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="font-medium text-sm text-[#0F0F0F] pl-1">
                  {props.secondList}
                </span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="font-medium text-sm text-[#0F0F0F] pl-1">
                  {props.thirdList}
                </span>
              </li>
              <li>
                <input type="checkbox" />
                <span className="font-medium text-sm text-[#0F0F0F] pl-1">
                  {props.fourthList}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffRoleCard;
