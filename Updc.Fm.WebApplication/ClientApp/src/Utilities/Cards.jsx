import React from 'react'


const Cards = (props) => {
  return (
    <div className="flex flex-row space-x-12">
    <div className="flex flex-col items-center justify-between p-6 bg-white rounded-md shadow-sm shadow-[#a73439]/25 md:flex-row md:max-w-[250px] md:max-h-[100px]">
      <div className="flex flex-col justify-between leading-normal">
        <p className="text-xs font-medium text-gray-400">
          {props.textname}
        </p>
        <p className="text-4xl font-bold text-[#0f0f0f]">{props.num}</p>
      </div>
      <img src={props.icon} alt="jobs" className="ml-6 w-14 h-14" />
    </div>
 </div>

  )
}

export default Cards