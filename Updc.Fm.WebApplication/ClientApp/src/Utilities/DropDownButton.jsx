import React from 'react'


   const DropDownButton = (props) => {
   
  return (
    
    <select  className='w-[180px] h-[40px] shadow-lg px-4 '>
        <option>{props.first}</option>
        <option>{props.second}</option>
        <option>{props.third}</option>
    </select>
  );
}



export default DropDownButton;