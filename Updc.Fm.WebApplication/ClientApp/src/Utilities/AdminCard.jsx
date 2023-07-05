import React from 'react';

const AdminCard = (props) => {
  const truncateText = (str) => {
    return str.length > 15 ? str.substring(0, 12) + '....' : str;
  };

  return (
    <div className="flex flex-col space-y-1 relative bg-white w-[240px] h-[120px] hover:cursor-pointer rounded-md shadow-sm shadow-[#a73439]/25">
      <div className="flex absolute right-0 flex-row justify-end">
        <div>
          <input type="checkbox" />
        </div>
      </div>
      {/* Estate name and Icon */}
      <div className="flex flex-row justify-center space-x-20 pt-2">
        <div>
          <h1 className="font-medium text-[#B9B0B0]">{props.Header}</h1>
        </div>
        <div>
          <img
            src={props.Icon}
            alt="Estate pics"
            className="h-[40px] w-[40px]"
          />
        </div>
      </div>
      {/* Name and title */}
      <div className="flex flex-col">
        <div className="pl-5">
          <h1 className="font-medium text-[#0f0f0f] text-sm">
            Name: {truncateText(props.Name)}
          </h1>
        </div>
        <div className="pl-5">
          <h1 className="font-medium text-[#0f0f0f] text-sm">
            Manager: {truncateText(props.Manager)}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AdminCard;
