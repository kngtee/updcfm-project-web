import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForgetPassword = () => {
  const nav = useNavigate();
  return (
    <div className=" flex justify-centre">
      <div className=" flex flex-col rounded-md gap-4 px-4 py-8 w-[500px] h-[300px] ml-[400px] mt-24 bg-slate-300">
        <div className="flex justify-center mt-4"></div>
        <div className="flex justify-center text-sm font-semibold">
          <h4>Reset password</h4>
        </div>
        <div className=" flex flex-col gap-1">
          <label className=" text-sm" htmlFor="">
            Kindly enter your email
          </label>
          <input
            className=" rounded-md text-sm px-2 py-1.5"
            placeholder="Email address"
          ></input>
        </div>
        <div className=" flex justify-between">
          <button
            onClick={() => {
              nav('/verifyotp');
            }}
            className=" rounded-md px-2 py-1.5 text-sm bg-[#a73439] text-white"
          >
            Submit
          </button>
          <button
            onClick={() => {
              nav('/resetpassword');
            }}
            className=" text-sm"
          >
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
