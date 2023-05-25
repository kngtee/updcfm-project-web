import React from 'react';


const Cards = (props) => {
  return (
<<<<<<< HEAD
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
=======
    <div
      className={props.className}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '200px',
        width: '850px',
        marginTop: '1rem',
        marginLeft: '1rem',
        padding: '20px',
      }}
    >
      <div
        style={{
          display: 'Flex',
          justifyContent: 'space-between',
          padding: '30px',
          alignItems: 'center',
          height: '150px',
          width: '250px',
          borderRadius: '20px',
        }}
        className="shadow-lg bg-[#FFFFFF]"
      >
        <div>
          <h6 className=" text-gray-400 font-medium">{props.textname}</h6>
          <h1 className=" font-bold font-medium text-5xl">{props.num}</h1>
        </div>
        <img className="h-[50px] w-[50px] mt-5" src={props.icon} alt="" />
      </div>
    </div>
  );
};
>>>>>>> bunmi

export default Cards;
