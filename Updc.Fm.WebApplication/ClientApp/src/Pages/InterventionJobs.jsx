import React, { useEffect, useState } from 'react';
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
            <div className="flex flex-row justify-start">
              
              {/* Search Bar */}
              <div className="">
                <SearchBox query={handleSearch} />
                
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
