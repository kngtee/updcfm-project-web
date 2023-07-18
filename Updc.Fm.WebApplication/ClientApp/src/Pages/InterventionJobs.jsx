import React, { useEffect, useState } from 'react';
// import { MdFilterAlt } from 'react-icons/md';
import NavContainer from '../components/NavContainer';
import { viewallJobs } from '../components/NavLists';
import { GetRequest } from '../Auth/hooks/useGet';
import Loader from '../components/Loader';
import Table from '../Utilities/Table';
import SearchBox from '../Utilities/SearchBox';
import LogoutTimer from '../components/LogoutTimer';

const viewJobs = viewallJobs;
let tableHeader = [
  { categoryId: 'Category' },
  { issueId: 'Issue' },
  { location: 'Location' },
  { unit: 'Unit' },
];

export const InterventionJobs = () => {
  // const [hidden, setHidden] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [interventionJob, setInterventionJob] = useState([]);

  useEffect(() => {
    const getInterventionJob = async () => {
      setIsLoading(true);
      const { status, data } = await GetRequest('api/interventionjobs');
      if (status === 200) {
        console.log(data);
        data.forEach((e) => {
          let newE = {
            categoryId: e.categoryId,
            issueId: e.issueId,
            location: e.location,
            unit: e.unit.unit_number,
            path: '/jobs/' + e.id,
          };
          setInterventionJob((i) => [...i, newE]);
        });
        setIsLoading(false);
        // setInterventionJob(data);
      }
    };

    getInterventionJob();
  }, []);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
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

                <li aria-current="page" className="inline-flex">
                  <div className="inline-flex items-center">
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
            <div className="flex flex-row justify-end">
              
              {/* Search Bar */}
              <div className="">
                <SearchBox query={handleSearch} />
                {/* <label htmlFor="search" className="sr-only">
                  Search
                </label>
                <div className="flex flex-row">
                  <input
                    type="search"
                    id="search"
                    placeholder="Search for jobs..."
                    className="bg-white text-gray-400 h-[35px] text-sm font-medium rounded shadow-sm shadow-[#a73439]/25 block px-3 py-2.5"
                  />
                  {/* <button className="flex h-[35px] w-[40px] items-center justify-center bg-[#a73439] rounded-r shadow-sm shadow-[#a73439]/25">
                    <svg
                      aria-hidden="true"
                      fill="white"
                      viewBox="0 0 24 24"
                      className="w-[20px] h-[20px]"
                      xmlns="http://www.w3.org/2000/svg"
                      stroke="white"
                    >
                      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18ZM11 6C10.3434 6 9.69321 6.12933 9.08658 6.3806C8.47995 6.63188 7.92876 7.00017 7.46447 7.46447C7.00017 7.92876 6.63188 8.47996 6.3806 9.08658C6.12933 9.69321 6 10.3434 6 11C6 11.5523 6.44772 12 7 12C7.55228 12 8 11.5523 8 11C8 10.606 8.0776 10.2159 8.22836 9.85195C8.37913 9.48797 8.6001 9.15726 8.87868 8.87868C9.15726 8.6001 9.48797 8.37913 9.85195 8.22836C10.2159 8.0776 10.606 8 11 8C11.5523 8 12 7.55228 12 7C12 6.44772 11.5523 6 11 6Z"
                          fill="white"
                        ></path>
                        <path
                          d="M20 20L18 18"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
            {/* Table */}
            {interventionJob ? (
              <Table
                header={tableHeader}
                data={interventionJob && interventionJob}
                filter={['categoryId', 'issueId']}
                query={searchQuery}
              />
            ) : null}
          </div>
        </NavContainer>
      )}
      
      <LogoutTimer  />
    </>
  );
};
