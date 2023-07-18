import React, { useEffect, useState } from 'react';
import NavContainer from '../components/NavContainer';
import { singleJob } from '../components/NavLists';
import { useParams } from 'react-router-dom';
import { GetRequest } from '../Auth/hooks/useGet';
import Loader from '../components/Loader';
import TruncatedText from '../components/TruncatedText';
import LogoutTimer from '../components/LogoutTimer';

const viewSingleJob = singleJob;

export const SingleJob = () => {
  const [interventionJob, setInterventionJob] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const interventionJob = async () => {
      setIsLoading(true);
      const { status, data } = await GetRequest('/api/interventionjobs/' + id);
      if (status === 200) {
        setInterventionJob({
          unit: data.unit.unit_number,
          id: data.id,
          categoryId: data.categoryId,
          issueId: data.issueId,
        });
        console.log(data);
        setIsLoading(false);
      }
      setIsLoading(false);
    };

    interventionJob();
  }, [id]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={viewSingleJob}>
          <div className="space-y-8 px-4 py-8">
            {/* Breadcrumbs */}
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

                <li class="inline-flex">
                  <div class="inline-flex items-center">
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
                <li aria-current="page" class="inline-flex">
                  <div class="inline-flex items-center">
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
                      <TruncatedText text={interventionJob.id} maxLength={14} />
                    </span>
                  </div>
                </li>
              </ol>
            </div>
            {/* Info Cards */}
            <div className="flex flex-col md:flex-row md:space-x-12">
              <div className="flex flex-col items-start justify-between px-6 py-4 w-fit bg-white rounded-md shadow-sm shadow-[#a73439]/25 md:flex-row md:w-[230px] md:max-h-[200px]">
                <div className="text-xs font-medium justify-between leading-normal">
                  <p className="text-gray-400 text-sm">Apartment Details</p>
                  <ol className="mt-1 text-[#0f0f0f]">
                    <li>
                      Unit No:
                      <span className="font-bold"> {interventionJob.unit}</span>
                    </li>
                    <li>
                      Email:
                      <span className="font-bold"> johndoe@example.com</span>
                    </li>
                    <li>
                      Estate:<span className="font-bold"> Victoria Bay</span>
                    </li>
                    <li>
                      Tenant:<span className="font-bold"> Abel Ayinla</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between px-6 py-4 w-fit bg-white rounded-md shadow-sm shadow-[#a73439]/25 md:flex-row md:w-[230px] md:max-h-[200px]">
                <div className="text-xs font-medium justify-between leading-normal">
                  <p className="text-gray-400 text-sm">Job Details</p>
                  <ol className="mt-1 text-[#0f0f0f]">
                    <li>
                      ID:
                      <span className="font-bold">
                        {' '}
                        <TruncatedText
                          text={interventionJob.id}
                          maxLength={14}
                        />
                      </span>
                    </li>
                    <li>
                      Type:
                      <span className="font-bold">
                        {' '}
                        {interventionJob.categoryId}
                      </span>
                    </li>
                    <li>
                      Issue:
                      <span className="font-bold">
                        {' '}
                        {interventionJob.issueId}
                      </span>
                    </li>
                    <li>
                      FM:<span className="font-bold"> Abel Ayinla</span>
                    </li>
                  </ol>
                </div>
              </div>
              <div className="flex flex-col items-start justify-between px-6 py-4 w-fit bg-white rounded-md shadow-sm shadow-[#a73439]/25 md:flex-row md:w-[230px] md:max-h-[200px]">
                <div className="text-xs font-medium justify-between leading-normal">
                  <p className="text-gray-400 text-sm">Job Status</p>
                  <span className="inline-flex items-center text-4xl font-medium text-[#0f0f0f]">
                    <span class="flex w-2.5 h-2.5 bg-yellow-400 rounded-full mr-1.5 flex-shrink-0"></span>
                    Pending
                  </span>
                </div>
              </div>
            </div>
          </div>
        </NavContainer>
      )}
      <LogoutTimer  />
    </>
  );
};
