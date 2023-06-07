import React from 'react';
import {
  MdArrowCircleLeft,
  MdArrowCircleRight,
  MdNoteAdd,
  MdUploadFile,
  MdAdd,
} from 'react-icons/md';
import { createInspection } from '../components/NavLists';
import NavContainer from '../components/NavContainer';

const inspectJob = createInspection;

export const CreateInspection = () => {
  return (
    <>
      <NavContainer dashboard={inspectJob}>
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

              <li className="inline-flex">
                <div className="inline-flex items-center">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    className="w-3 h-3 text-gray-400"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    transform="rotate(160)"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path d="M21.71,3.29a1,1,0,0,0-1.42,0l-18,18a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l18-18A1,1,0,0,0,21.71,3.29Z"></path>
                    </g>
                  </svg>

                  <a
                    href="/jobs"
                    className="ml-1 items-center text-sm text-gray-500 hover:text-[#a73439] md:ml-2"
                  >
                    Intervention Job
                  </a>
                </div>
              </li>
              <li className="inline-flex">
                <div className="inline-flex items-center">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    className="w-3 h-3 text-gray-400"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    transform="rotate(160)"
                  >
                    <g id="SVGRepo_iconCarrier">
                      <path d="M21.71,3.29a1,1,0,0,0-1.42,0l-18,18a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l18-18A1,1,0,0,0,21.71,3.29Z"></path>
                    </g>
                  </svg>

                  <a
                    href="/jobs"
                    className="ml-1 items-center text-sm text-gray-500 hover:text-[#a73439] md:ml-2"
                  >
                    JB001
                  </a>
                </div>
              </li>
              <li aria-current="page" className="inline-flex">
                <div className="inline-flex items-center">
                  <svg
                    aria-hidden="true"
                    fill="currentColor"
                    className="w-3 h-3 text-gray-400"
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
                    Inspection
                  </span>
                </div>
              </li>
            </ol>
          </div>
          <div className="flex flex-row justify-end">
            {/* Schedule Modal Button */}
            <div className="flex flex-row">
              <button
                data-modal-target="schedule-modal"
                data-modal-toggle="schedule-modal"
                className="flex py-1 px-3 rounded-sm text-md font-normal text-white items-center justify-center bg-green-600 shadow-sm shadow-[#a73439]/25"
                type="button"
              >
                <MdAdd className="mr-2" />
                Schedule
              </button>
            </div>
          </div>
          
          {/* Table */}
          <div className="relative overflow-x-auto justify-between rounded-t-lg">
            <table className="w-full text-sm text-left text-[#0f0f0f] shadow-md ">
              <thead className="text-xs text-[#F8F7FF] uppercase bg-[#a73439]">
                <tr>
                  <th scope="col" className="px-3 py-1.5">
                    S/N
                  </th>
                  <th scope="col" className="px-3 py-1.5">
                    Inspection Date
                  </th>
                  <th scope="col" className="px-3 py-1.5">
                    Inspected By
                  </th>
                  <th scope="col" className="px-3 py-1.5">
                    Status
                  </th>
                  <th scope="col" className="px-3 py-1.5">
                    Action
                  </th>
                  <th scope="col" className="px-3 py-1.5"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="px-3 py-2 font-normal whitespace-nowrap"
                  >
                    1
                  </th>
                  <td className="px-3 py-2">29-APRIL-2023</td>
                  <td className="px-3 py-2">Abel Ayinla</td>
                  <td className="px-3 py-2">
                    <span className="flex items-center">
                      <span className="flex w-2.5 h-2.5 bg-yellow-400 rounded-full mr-1.5 flex-shrink-0"></span>
                      New
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <a
                      href="/singlejob"
                      className="inline-flex items-center font-medium text-red-600 underline"
                    >
                      <MdNoteAdd className="mr-1" /> Add Note
                    </a>
                  </td>
                  <td className="px-3 py-2">
                    <div className="border-dashed border border-red-600 w-fit px-2 py-1 rounded-md">
                      <a
                        href="/singlejob"
                        className="inline-flex items-center font-medium text-red-600"
                      >
                        <MdUploadFile className="mr-1" /> Upload Report
                      </a>
                    </div>
                  </td>
                </tr>
                <tr className="bg-[#D9D9D9] border-b">
                  <th
                    scope="row"
                    className="px-3 py-2 font-normal whitespace-nowrap"
                  >
                    2
                  </th>
                  <td className="px-3 py-2">29-APRIL-2023</td>
                  <td className="px-3 py-2">Abel Ayinla</td>
                  <td className="px-3 py-2">
                    <span className="flex items-center">
                      <span className="flex w-2.5 h-2.5 bg-green-600 rounded-full mr-1.5 flex-shrink-0"></span>
                      Done
                    </span>
                  </td>
                  <td className="px-3 py-2">
                    <a
                      href="/singlejob"
                      className="inline-flex items-center font-medium text-red-600 underline"
                    >
                      <MdNoteAdd className="mr-1" /> Add Note
                    </a>
                  </td>
                  <td className="px-3 py-2">
                    <div className="border-dashed border border-red-600 w-fit px-2 py-1 rounded-md">
                      <a
                        href="/singlejob"
                        className="inline-flex items-center font-medium text-red-600"
                      >
                        <MdUploadFile className="mr-1" /> Upload Report
                      </a>
                    </div>
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
                <button className="inline-flex items-center px-2 py-1 text-sm font-medium text-[#0f0f0f]  rounded-l-md hover:bg-[#a73439] hover:text-white">
                  <MdArrowCircleLeft className="mr-1" />
                  Prev
                </button>
                <button className="inline-flex items-center px-2 py-1 text-sm font-medium text-[#0f0f0f]  border-1 border-l border-[#a73439] rounded-r-md hover:bg-[#a73439] hover:text-white">
                  Next
                  <MdArrowCircleRight className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* Schedule Modal */}
      <div
            id="schedule-modal"
            tabindex="-1"
            aria-hidden="true"
            className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
          >
            <div className="relative w-full max-w-md max-h-full">
              {/* Schedule Modal Content */}
              <div className="relative bg-white rounded-lg shadow">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  data-modal-hide="schedule-modal"
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="px-6 py-6 lg:px-8">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Sign in to our platform
                  </h3>
                  <form className="space-y-6" action="#"></form>
                </div>
              </div>
            </div>
          </div>
      </NavContainer>
    </>
  );
};
