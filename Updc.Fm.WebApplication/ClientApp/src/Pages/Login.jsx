import React, { useState } from 'react';
import estate from '../assets/img/estate.jpg';
import { useAuth } from '../Auth/hooks/useAuth';
// import Loader from '../components/Loader';
// import { useNavigate } from 'react-router-dom';

function Login() {
  // const [isLoading, setIsLoading] = useState(false);
  const { handleLogin, isLoading } = useAuth();
  //  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    // setIsLoading(true);

    // Loading delay simulation timer
    // setTimeout(async () => {
    //   setIsLoading(false);
    handleLogin(payload);
    // console.log(loading);
    // }, 3000);
  }

  // const handleClick = () => {

  // };

  return (
    <>
      <div className="h-screen flex md:flex-row sm:flex-col flex-col">
        {/* Left side of the screen */}
        <div className="sm:w-full">
          <img
            src={estate}
            className="md:max-h-full md:w-full"
            alt="estate"
            loading="lazy"
          />
        </div>
        {/* Right side of the screen */}
        <div className="flex sm:w-full items-center justify-center bg-[#A73439]">
          <div className="md:flex-col bg-white md:w-[50%] p-8 rounded shadow-md">
            <form className="space-y-3" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="text-sm text-[#0f0f0f] font-medium leading-6"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="block w-full p-1.5 rounded border-0 bg-[#D9D9D9] shadow-sm"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="text-sm text-[#0f0f0f] font-medium leading-6"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    type="password"
                    name="password"
                    autoComplete="current-password"
                    required
                    className="block w-full p-1.5 rounded border-0 bg-[#D9D9D9] shadow-sm"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center pt-2 justify-between align-middle">
                  <span className="font-medium text-xs text-gray-800">
                    <input type="checkbox" className="mr-1" />
                    Remember me
                  </span>
                  <span
                    href="#"
                    className="font-medium text-xs text-indigo-600 cursor-pointer"
                  >
                    Forgot Password?
                  </span>
                </div>
              </div>

              <div className="pt-5">
                <button
                  type="submit"
                  className="flex w-full justify-center rounded bg-[#d36360] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#bd4143] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd4143]"
                  disabled={isLoading}
                >
                  {isLoading ? (
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
                    'Login'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
