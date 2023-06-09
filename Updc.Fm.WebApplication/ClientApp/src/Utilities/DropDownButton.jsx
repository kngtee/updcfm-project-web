import React from 'react';

const DropDownButton = (props) => {
  return (
    <select
      id="clusters"
      className="bg-white text-gray-400 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-[200px] h-[35px] p-1 shadow-sm shadow-[#a73439]/25"
    >
      <option>{props.first}</option>
      <option>{props.second}</option>
      <option>{props.third}</option>
    </select>
  );
};

export default DropDownButton;
