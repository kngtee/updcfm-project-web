import React from 'react';

const DropDownButton = (props) => {
  return (
    <select
      id="clusters"
      className="bg-white text-gray-400 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-[200px] h-[35px] p-1 shadow-sm shadow-[#a73439]/25"
    >
      <option selected>{props.first}</option>
      <option selected>{props.second}</option>
      <option selected>{props.third}</option>
    </select>
  );
};

export default DropDownButton;
