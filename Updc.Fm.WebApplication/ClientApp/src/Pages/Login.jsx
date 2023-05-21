import React, { useState } from 'react';
import estate from '../assets/img/estate.jpg';
import { useAuth } from '../Auth/hooks/useAuth';


function Login() {
  const { handleLogin } = useAuth();

  // const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    
    handleLogin(payload);
  }

  return (
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
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  className="block w-full p-1.5 rounded border-0 bg-[#D9D9D9] shadow-sm"
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
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
