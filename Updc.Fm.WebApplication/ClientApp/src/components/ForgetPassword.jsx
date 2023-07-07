import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Buton from '../Utilities/Buton';
import { PostRequest } from '../Auth/hooks/useGet';

const ForgetPassword = () => {
  const [status, setStatus] = useState('');
  const [pin, setPin] = useState('');
  const [otp, setOtp] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const nav = useNavigate();
  let formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      localStorage.setItem('email', values.email);
      const { status, data } = await PostRequest('api/auths/forget-password', {
        email: values.email,
      });

      if (status === 200) {
        setOtp(data.passcode);
        setStatus(status);
        console.log(status, data);
      } else {
        setIsLoading(false);
      }
    },
  });
  return (
    <div className=" flex h-screen w-screen items-center justify-center bg-slate-300">
      <div className=" bg-white w-96 h-80 p-8 rounded shadow-md">
        <h4 className="text-lg font-bold text-[#A73439] text-center pb-3">
          Reset password
        </h4>

        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          {/* Email Textfield */}
          <div>
            <label
              className=" text-sm text-[#0f0f0f] font-medium leading-6"
              htmlFor="email"
            >
              Enter your email
            </label>
            <div className="mt-2">
              <input
                className=" block w-full p-1.5 rounded border-0 bg-[#D9D9D9] shadow-sm"
                placeholder="Email address"
                name="email"
                type="email"
                required
                onChange={formik.handleChange}
              />
            </div>
          </div>
          {/* OTP Textfield */}

          {status === 200 ? (
            <div className="pb-3">
              <input
                className=" block w-full p-1.5 rounded border-0 bg-[#D9D9D9] shadow-sm"
                placeholder="Enter OTP"
                name="pin"
                type="password"
                onChange={(e) => {
                  setPin(e.target.value);
                }}
              />
            </div>
          ) : null}

          {status === 200 ? null : (
            <div className=" flex justify-between pt-3">
              <button
                onClick={() => {
                  nav('/login');
                }}
                className=" text-sm border border-[#bd4143] p-2 rounded leading-tight"
              >
                Back to login
              </button>

              <Buton
                className=" w-[80px] h-[40px] bg-[#BD4143]
                    cursor-pointer text-white 
                    text-sm font-medium rounded shadow-sm"
                text={
                  isLoading ? (
                    <svg
                      aria-hidden="true"
                      className="inline w-6 h-6 mr-2 text-gray-200 animate-spin fill-white"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  ) : (
                    'Submit'
                  )
                }
                type="submit"
                disabled={isLoading}
              />
            </div>
          )}
        </form>
        {status === 200 ? (
          <div className=" flex justify-between">
            <button
              onClick={() => {
                nav('/login');
              }}
              className=" text-sm border border-[#bd4143] p-2 rounded leading-tight"
            >
              Back to login
            </button>

            <button
              className="w-[80px] h-[40px] bg-[#BD4143]
              cursor-pointer text-white 
              text-sm font-medium rounded shadow-sm"
              onClick={() => {
                if (otp === parseInt(pin)) {
                  nav('/resetpassword');
                } else {
                  alert('wrong otp');
                }
              }}
            >
              Submit
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ForgetPassword;
