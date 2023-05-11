import React, { Component } from "react";
import estate from "../assets/estate.jpg";

export class Login extends Component {
  static displayName = Login.name;

  render() {
    return (
      <div className="h-screen flex flex-row">
        {/* Left side of the screen */}
        <div className="w-full">
          <img
            src={estate}
            className="max-h-full w-full"
            alt="estate"
            loading="lazy"
          />
        </div>
        {/* Right side of the screen */}
        <div className="flex w-full items-center justify-center bg-[#A73439]">
          <div className="flex flex-col bg-white mx-auto w-[50%] p-10 rounded shadow-xl">
            {/* Form Div */}
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="flex items-center pt-1 justify-between">
                  <div
                    href="#"
                    className="font-normal text-xs text-gray-800 hover:text-indigo-500"
                  >
                    Remember me
                  </div>
                  <div
                    href="#"
                    className="font-normal text-xs text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot Password?
                  </div>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#d36360] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#bd4143] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#bd4143]"
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
}
