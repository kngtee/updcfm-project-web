import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buton from '../Utilities/Buton';
import { PostRequest } from '../Auth/hooks/useGet';

const ForgetPassword = () => {
  const [status, setStatus] = useState('');
  const [pin, setPin] = useState('');
  const [otp, setOtp] = useState('');

  const nav = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      alert(values.email);
      const { status, data } = await PostRequest('api/auths/forget-password', {
        email: values.email,
      });

      setOtp(data.passcode);
      setStatus(status);
      console.log(status, data);
    },
  });
  return (
    <div className=" flex justify-centre">
      <div className=" flex flex-col rounded-md gap-4 px-4 py-8 w-[500px] h-[300px] ml-[400px] mt-24 bg-slate-300">
        <div className="flex justify-center mt-4"></div>
        <div className="flex justify-center text-sm font-semibold">
          <h4>Reset password</h4>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className=" flex flex-col gap-1">
            <label className=" text-sm" htmlFor="">
              Kindly enter your email
            </label>
            <input
              className=" rounded-md text-sm px-2 py-1.5"
              placeholder="Email address"
              name="email"
              onChange={formik.handleChange}
            />
            {status === 200 ? (
              <input
                className=" rounded-md text-sm px-2 py-1.5"
                placeholder="enter otp"
                name="pin"
                onChange={(e) => {
                  setPin(e.target.value);
                }}
              />
            ) : null}
          </div>
          {status === 200 ? null : (
            <div className=" flex justify-between">
              <Buton
                className="border border-[#bd4143] w-[80px] h-[40px] bg-[#BD4143]
                    cursor-pointer text-[#FFF] 
                    text-sm font-medium rounded-md"
                text="Submit"
                type="submit"
              />
              <button
                onClick={() => {
                  nav('/login');
                }}
                className=" text-sm"
              >
                Back to login
              </button>
            </div>
          )}
        </form>
        {status === 200 ? (
          <div className=" flex justify-between">
            <button
              className="border border-[#bd4143] w-[80px] h-[40px] bg-[#BD4143]
            cursor-pointer text-[#FFF] 
            text-sm font-medium rounded-md"
              onClick={() => {
                // alert(pin);
                // alert(otp);
                if (otp === parseInt(pin)) {
                  alert(pin);
                  nav('/login');
                } else {
                  alert('wrong otp');
                }
              }}
            >
              Submit
            </button>
            <button
              onClick={() => {
                nav('/login');
              }}
              className=" text-sm"
            >
              Back to login
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ForgetPassword;
