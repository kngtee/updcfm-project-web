import React from 'react'


   const DropDownButton = (props) => {
   
  return (
    
    <select  className='w-[200px] h-[35px] shadow-lg text-base px-4 '>
        <option  value={props.value} >{props.first}</option>
        <option>{props.second}</option>
        <option>{props.third}</option>
    </select>
  );
}



export default DropDownButton;