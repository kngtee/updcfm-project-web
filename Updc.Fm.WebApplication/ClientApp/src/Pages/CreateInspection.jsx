import React, { useEffect, useState } from 'react';
// import { MdUploadFile } from 'react-icons/md';
import { createInspection } from '../components/NavLists';
import NavContainer from '../components/NavContainer';
import ModalForm from '../components/ScheduleInspectionModal';

// import { formatDate } from '../Services/Converter';
import LogoutTimer from '../components/LogoutTimer';
import { GetRequest } from '../Auth/hooks/useGet';
import { useParams } from 'react-router-dom';
import Pagination from '../Utilities/Pagination';
import { useMemo } from 'react';
import Loader from '../components/Loader';
import FileUpload from '../Utilities/FileUpload';
import AddNote from '../components/AddNote';

const inspectJob = createInspection;

const pageSize = 6;

export const CreateInspection = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [tableData, setTableData] = useState([]);
  const [isNewRow, setIsNewRow] = useState(false);
  const addRow = () => {
    setIsNewRow(true);
  };

  useEffect(() => {
    const getInspections = async () => {
      const { status, data } = await GetRequest('/api/interventionjobs/' + id);
      if (status === 200) {
        setTableData(data?.inspection);
        console.log(data?.inspection);
        setIsLoading(false);
        setIsNewRow(false);
      } else {
        console.log(data);
        setIsLoading(false);
      }
    };

    getInspections();
  }, [isNewRow, id]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;

    setTotalCount(tableData?.length);

    return tableData.slice(firstPageIndex, lastPageIndex);
    // eslint-disable-next-line
  }, [currentPage, totalCount, tableData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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
                    {currentTableData.map((formData, index) => (
                      <tr key={index} className="bg-white border-b">
                        <th
                          scope="row"
                          className="px-3 py-2 font-normal whitespace-nowrap"
                        >
                          {index + 1}
                        </th>
                        <td className="px-3 py-2">
                          {formData.dateOfInspection}
                        </td>
                        <td className="px-3 py-2">{formData.inspectorName}</td>
                        <td className="px-3 py-2">
                          <span className="flex items-center text-yellow-600">
                            {formData.shortDescription === 'n/a' ? (
                              <span>pending</span>
                            ) : (
                              <span>done</span>
                            )}
                          </span>
                        </td>
                        <td className="px-3 py-2">
                          <AddNote
                            addRow={addRow}
                            note={formData.shortDescription}
                            inspectionId={formData.id}
                          />
                        </td>
                        <td className="px-3 py-2">
                          <div className="border-dashed border border-red-600 w-fit px-2 py-1 rounded-md">
                            {/* <label
                              id="inspection_file"
                              className="inline-flex items-center font-medium text-red-600 cursor-pointer"
                            >
                              <MdUploadFile className="mr-1" /> Upload Report
                              <input
                                id="inspection_file"
                                type="file"
                                className="hidden"
                              />
                            </label> */}
                            <FileUpload />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Pagination */}
                <Pagination
                  currentPage={currentPage}
                  totalCount={totalCount}
                  pageSize={pageSize}
                  onPageChange={(page) => setCurrentPage(page)}
                />
              </div>
            </div>
          </NavContainer>
          <LogoutTimer />
        </>
      )}
    </>
  );
};
