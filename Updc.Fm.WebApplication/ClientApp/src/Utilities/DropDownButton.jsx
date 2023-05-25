import React from 'react';

const DropDownButton = (props) => {
  return (
<<<<<<< HEAD
    
    <select  className='w-[200px] h-[35px] shadow-lg text-base px-4 '>
        <option  value={props.value} >{props.first}</option>
        <option>{props.second}</option>
        <option>{props.third}</option>
=======
    <select className="px-4 bg-white text-gray-400 text-xs rounded font-medium focus:ring-blue-500 focus:border-blue-500 block w-[200px] h-[35px] p-1 shadow-sm shadow-[#a73439]/25">
      <option>{props.first}</option>
      <option>{props.second}</option>
      <option>{props.third}</option>
>>>>>>> bunmi
    </select>
  );
};

export default DropDownButton;
