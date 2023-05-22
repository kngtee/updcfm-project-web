import React, { useState } from 'react';
import {
  MdFilterAlt,
  MdArrowCircleRight,
  MdArrowCircleLeft,
} from 'react-icons/md';
import NavContainer from '../components/NavContainer';
import { viewallJobs } from '../components/NavLists';

const viewJobs = viewallJobs;

export const InterventionJobs = () => {
  const [hidden, setHidden] = useState(false);

  const handleHidden = () => {
    setHidden(!hidden);
    console.log('object');
    console.log(hidden);
  };

  return (
    <>
      <NavContainer dashboard={viewJobs}>
        <div className="space-y-8 px-4 py-8">
          <div className="flex flex-row" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 font-normal">
              <li className="items-center">
                <a
                  href="/accounts"
                  className="inline-flex items-center text-sm text-gray-500 hover:text-[#a73439]"
                >
                  Dashboard
                </a>
              </li>

              <li aria-current="page" class="inline-flex">
                <div class="inline-flex items-center">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    className="w-3 h-3 text-gray-400 ml-1 md:ml-2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    transform="rotate(160)"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path d="M21.71,3.29a1,1,0,0,0-1.42,0l-18,18a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l18-18A1,1,0,0,0,21.71,3.29Z"></path>
                    </g>
                  </svg>
                  <span className="ml-1 text-sm text-[#d36360] md:ml-2">
                    Intervention Jobs
                  </span>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex flex-row justify-between">
            {/* Filter */}
            <div className="flex-col items-start justify-start">
              <button
                id="dropdownDefault"
                data-dropdown-toggle="dropdown"
                className="text-gray-400 bg-white font-medium text-sm h-[35px] px-3 py-2.5 text-center inline-flex items-center rounded shadow-sm shadow-[#a73439]/25"
                type="button"
                onClick={handleHidden}
              >
                Filter
                <div className="ml-5 text-black text-sm">
                  <MdFilterAlt />
                </div>
              </button>
              {/* Filter dropdown */}
              <div
                id="dropdown"
                className={
                  hidden
                    ? 'z-10 w-fit p-3 absolute bg-white rounded shadow-sm shadow-[#a73439]/25'
                    : 'hidden'
                }
              >
                <h6 className="mb-3 text-sm font-medium text-gray-400">
                  Status
                </h6>
                <ul
                  className="space-y-2 text-sm"
                  aria-labelledby="dropdownDefault"
                >
                  <li className="flex items-center">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      className="w-3 h-3 bg-gray-100 focus:ring-blue-500"
                    />
                    <label
                      for="pending"
                      class="ml-2 text-xs font-medium text-gray-900"
                    >
                      Pending
                    </label>
                  </li>
                  <li className="flex items-center">
                    <input
                      id=""
                      type="checkbox"
                      value=""
                      className="w-3 h-3 bg-gray-100 focus:ring-blue-500"
                    />
                    <label
                      for="pending"
                      class="ml-2 text-xs font-medium text-gray-900"
                    >
                      Completed
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            {/* Search Bar */}
            <div className="">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="flex flex-row">
                <input
                  type="search"
                  id="search"
                  placeholder="Search for jobs..."
                  className="bg-white text-gray-400 h-[35px] text-sm font-medium rounded-l shadow-sm shadow-[#a73439]/25 block px-3 py-2.5"
                />
                <button className="flex h-[35px] w-[40px] items-center justify-center bg-[#a73439] rounded-r shadow-sm shadow-[#a73439]/25">
                  <svg
                    aria-hidden="true"
                    fill="white"
                    viewBox="0 0 24 24"
                    className="w-[20px] h-[20px]"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="white"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM11 6C10.3434 6 9.69321 6.12933 9.08658 6.3806C8.47995 6.63188 7.92876 7.00017 7.46447 7.46447C7.00017 7.92876 6.63188 8.47996 6.3806 9.08658C6.12933 9.69321 6 10.3434 6 11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11C8 10.606 8.0776 10.2159 8.22836 9.85195C8.37913 9.48797 8.6001 9.15726 8.87868 8.87868C9.15726 8.6001 9.48797 8.37913 9.85195 8.22836C10.2159 8.0776 10.606 8 11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6Z"
                        fill="white"
                      ></path>
                      <path
                        d="M20 20L18 18"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                      ></path>
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/* Table */}
          <div className="relative overflow-x-auto justify-between rounded-t-lg">
            <table className="w-full text-sm text-left text-[#0f0f0f] shadow-md ">
              <thead className="text-xs text-[#F8F7FF] uppercase bg-[#a73439]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Job ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Job Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-normal whitespace-nowrap"
                  >
                    JB001
                  </th>
                  <td className="px-6 py-4">35B</td>
                  <td className="px-6 py-4">johndoe@example.com</td>
                  <td className="px-6 py-4">Plumbing</td>
                  <td className="px-6 py-4">
                    <span class="flex items-center">
                      <span class="flex w-2.5 h-2.5 bg-yellow-400 rounded-full mr-1.5 flex-shrink-0"></span>
                      Pending
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="/singlejob"
                      class="font-medium text-blue-600 dark:text-blue-500 underline"
                    >
                      Open Job
                    </a>
                  </td>
                </tr>
                <tr className="bg-[#D9D9D9] border-b">
                  <th
                    scope="row"
                    className="px-6 py-4 font-normal whitespace-nowrap"
                  >
                    JB002
                  </th>
                  <td className="px-6 py-4"> 21A</td>
                  <td className="px-6 py-4"> sample@example.com</td>
                  <td className="px-6 py-4"> Leakage</td>
                  <td className="px-6 py-4">
                    <span class="flex items-center">
                      <span class="flex w-2.5 h-2.5 bg-green-600 rounded-full mr-1.5 flex-shrink-0"></span>
                      Done
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <a
                      href="/"
                      class="font-medium text-blue-600 dark:text-blue-500 underline"
                    >
                      Open Job
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Pagination */}
            <div className="flex flex-row justify-between mt-4">
              {/* Pagination Details */}
              <span className="text-xs text-gray-600">
                Showing
                <span className="font-semibold text-[#0f0f0f] "> 1 </span>
                to
                <span className="font-semibold text-[#0f0f0f] "> 10 </span>
                of
                <span className="font-semibold text-[#0f0f0f] "> 100 </span>
                Entries
              </span>
              {/* Pagination Button */}
              <div className="inline-flex items-center">
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#0f0f0f]  rounded-l-md hover:bg-[#a73439] hover:text-white">
                  <MdArrowCircleLeft className="mr-1" />
                  Prev
                </button>
                <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-[#0f0f0f]  border-1 border-l border-[#a73439] rounded-r-md hover:bg-[#a73439] hover:text-white">
                  Next
                  <MdArrowCircleRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </NavContainer>
    </>
  );
};
