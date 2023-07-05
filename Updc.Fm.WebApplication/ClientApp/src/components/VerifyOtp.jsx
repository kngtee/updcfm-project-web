import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const VerifyOtp = () => {
  const nav = useNavigate();
  const [otp, setOtp] = useState('');

  return (
    <div className="flex ">
      <div className=" w-[350px] h-[150px] flex flex-col gap-6 rounded-md ml-[450px] mt-32  bg-slate-300">
        <div className=" flex px-14 ml-6 mt-2  font-bold">
          <h2>Enter verification code</h2>
        </div>
        <div className="flex px-20 gap-2 ">
          <input
            maxLength={1}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            className="w-[30px] h-[30px] font-bold flex justify-centre"
            type="text"
          />
          <input
            maxLength={1}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            className="w-[30px] h-[30px] font-bold flex justify-centre"
            type="text"
          />
          <input
            maxLength={1}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            className="w-[30px] h-[30px] font-bold flex justify-centre"
            type="text"
          />
          <input
            maxLength={1}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            className="w-[30px] h-[30px] font-bold flex justify-centre"
            type="text"
          />
          <input
            maxLength={1}
            onChange={(e) => {
              setOtp(e.target.value);
            }}
            className="w-[30px] h-[30px] font-bold flex justify-centre"
            type="text"
          />
        </div>
        <div className=" flex justify-between px-6">
          <button
            onClick={() => {
              nav('/login');
            }}
            className=" rounded-md px-2 py-1.5 text-sm bg-[#a73439] text-white"
          >
            Submit
          </button>
          <button
            onClick={() => {
              nav('/forgetpassword');
            }}
            className=" text-sm"
          >
            Resend OTP
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyOtp;
