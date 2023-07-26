import React, { useEffect, useState } from 'react';
// import { MdFilterAlt } from 'react-icons/md';
import { accountDashboard } from '../components/NavLists';
import Jobs from '../assets/img/jobs.svg';
import JobsDone from '../assets/img/job-done-ok.svg';
// import Vendors from '../assets/img/staff.svg';
import NavContainer from '../components/NavContainer';
import LogoutTimer from '../components/LogoutTimer';
import { GetRequest } from '../Auth/hooks/useGet';

const accounts = accountDashboard;

export const Accounts = () => {
  const [totalJobs, setTotalJobs] = useState(null);

  useEffect(() => {
    const fetchTotalJobs = async () => {
      try {
        const { status, data } = await GetRequest('api/interventionjobs');
       
        if (status === 200) {
          setTotalJobs(data.length);
        } else {
          setTotalJobs(0);
        }
      } catch (error) {
        console.error('Error fetching total jobs:', error);
      }
    };
    fetchTotalJobs();
  }, []);

  return (
    <>
      <NavContainer dashboard={accounts}>
        <div className="space-y-8 px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex flex-row" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 font-normal">
              <li aria-current="page" className="inline-flex">
                <span className="inline-flex items-center text-sm text-[#d36360]">
                  Dashboard
                </span>
              </li>
            </ol>
          </div>
          {/* Select Box Filter */}
          {/* <div className="flex flex-col space-x-1 md:flex-row md:space-x-3 font-medium items-center">
            <select
              id="clusters"
              className="bg-white text-gray-400 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-[200px] h-[35px] p-1 shadow-sm shadow-[#a73439]/25"
            >
              <option selected>Select Cluster</option>
            </select>
            <select
              id="clusters"
              className="bg-white text-gray-400 text-xs rounded focus:ring-blue-500 focus:border-blue-500 block w-[200px] h-[35px] p-1 shadow-sm shadow-[#a73439]/25"
            >
              <option selected>Select Estate</option>
            </select>
          </div> */}
          {/* Info Cards */}
          <div className="flex flex-row space-x-12">
            <div className="flex flex-col items-center justify-between p-6 bg-white rounded-md shadow-sm shadow-[#a73439]/25 md:flex-row md:max-w-[250px] md:max-h-[100px]">
              <div className="flex flex-col justify-between leading-normal">
                <p className="text-xs font-medium text-gray-400">
                  Pending Jobs
                </p>
                {totalJobs !== null ? (
                  <p className="text-4xl font-bold text-[#0f0f0f]">
                    {totalJobs}
                  </p>
                ) : (
                  <p className=" text-4xl font-bold text-gray-400">n/a</p>
                )}
              </div>
              <img src={Jobs} alt="jobs" className="ml-6 w-14 h-14" />
            </div>
            <div className="flex flex-col items-center justify-between p-6 bg-white rounded-md shadow-sm shadow-[#a73439]/25 md:flex-row md:max-w-[250px] md:max-h-[100px]">
              <div className="flex flex-col justify-between leading-normal">
                <p className="text-xs font-medium text-gray-400">
                  Total Jobs Done
                </p>
                <p className="text-4xl font-bold text-[#0f0f0f]">0</p>
              </div>
              <img src={JobsDone} alt="jobs" className="ml-6 w-14 h-14" />
            </div>
            {/* <div className="flex flex-col items-center justify-between p-6 bg-white rounded-md shadow-sm shadow-[#a73439]/25 md:flex-row md:max-w-[250px] md:max-h-[100px]">
              <div className="flex flex-col justify-between leading-normal">
                <p className="text-xs font-medium text-gray-400">
                  Total Vendors
                </p>
                <p className="text-4xl font-bold text-[#0f0f0f]">0</p>
              </div>
              <img src={Vendors} alt="jobs" className="ml-6 w-14 h-14" />
            </div> */}
          </div>
        </div>
      </NavContainer>

      <LogoutTimer />
    </>
  );
};
