import React, { useEffect, useState } from 'react';
import { accountDashboard } from '../components/NavLists';
import Jobs from '../assets/img/jobs.svg';
import JobsDone from '../assets/img/job-done-ok.svg';
import NavContainer from '../components/NavContainer';
import LogoutTimer from '../components/LogoutTimer';
import { GetRequest } from '../Auth/hooks/useGet';

const accounts = accountDashboard;

export const Accounts = () => {
  const [totalJobs, setTotalJobs] = useState(null);
  const [isFetchAllJobs, setIsFetchAllJobs] = useState(false);

  useEffect(() => {
    const fetchTotalJobs = async () => {
      try {
        const { status, data } = await GetRequest('api/interventionjobs');

        if (status === 200) {
          setIsFetchAllJobs(true);
          setTotalJobs(data.length);
          console.log(data);
        } else {
          setIsFetchAllJobs(false);
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

          {/* Info Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            <InfoCard
              title="Pending Jobs"
              value={
                isFetchAllJobs === true ? (
                  totalJobs
                ) : (
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
                )
              }
              icon={Jobs}
            />
            <InfoCard title="Total Jobs Done" value={0} icon={JobsDone} />
          </div>
        </div>
      </NavContainer>
      <LogoutTimer />
    </>
  );
};

const InfoCard = ({ title, value, icon }) => {
  return (
    <div className="flex flex-col items-center justify-between p-6 bg-white rounded-md shadow-sm shadow-[#a73439]/25 md:flex-row md:max-w-[250px] md:max-h-[100px]">
      <div className="flex flex-col justify-between leading-normal">
        <p className="text-xs font-medium text-gray-400">{title}</p>
        <p className="text-4xl font-bold text-[#0f0f0f]">{value}</p>
      </div>
      <img src={icon} alt={title} className="ml-6 w-14 h-14" />
    </div>
  );
};
