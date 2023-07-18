import React, { useState } from 'react';
import {
  MdArrowCircleLeft,
  MdArrowCircleRight,
  MdUploadFile,
} from 'react-icons/md';
import { createInspection } from '../components/NavLists';
import NavContainer from '../components/NavContainer';
import ModalForm from '../components/ScheduleInspectionModal';
import AddNote from '../components/AddNoteModal';
import { formatDate } from '../Services/Converter';
import LogoutTimer from '../components/LogoutTimer';

const inspectJob = createInspection;

export const CreateInspection = () => {
  const [tableData, setTableData] = useState([]);
  const addRow = (formData) => {
    setTableData([...tableData, formData]);
  };

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
              <ModalForm addRow={addRow} setTableData={setTableData} />
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
                {/* Rendering table rows based on table data */}
                {tableData.map((formData, index) => (
                  <tr key={index} className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-3 py-2 font-normal whitespace-nowrap"
                    >
                      {index + 1}
                    </th>
                    <td className="px-3 py-2">
                      {formatDate(formData.selectedDate)}
                    </td>
                    <td className="px-3 py-2">{formData.name}</td>
                    <td className="px-3 py-2">
                      <span className="flex items-center text-yellow-600">
                        {formData.status}
                      </span>
                    </td>
                    <td className="px-3 py-2">
                      <AddNote />
                    </td>
                    <td className="px-3 py-2">
                      <div className="border-dashed border border-red-600 w-fit px-2 py-1 rounded-md">
                        <label
                          id="inspection_file"
                          className="inline-flex items-center font-medium text-red-600 cursor-pointer"
                        >
                          <MdUploadFile className="mr-1" /> Upload Report
                          <input
                            id="inspection_file"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Pagination */}
            <div className="flex flex-row justify-between mt-4">
              {/* Pagination Details */}
              <span className="text-xs text-gray-600">
                Showing
                <span className="font-semibold text-[#0f0f0f] ">
                  {' '}
                  {tableData.length > 0 ? 1 : 0}{' '}
                </span>
                to
                <span className="font-semibold text-[#0f0f0f] ">
                  {' '}
                  {tableData.length}{' '}
                </span>
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
      </NavContainer>
      <LogoutTimer timeout={10} />
    </>
  );
};
