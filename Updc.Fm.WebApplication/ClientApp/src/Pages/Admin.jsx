import React, { useEffect, useState } from 'react';
import NavContainer from '../components/NavContainer';
import { adminOverView } from '../components/NavLists';
import Cards from '../Utilities/Cards';
import staff from '../../src/assets/img/staff.svg';
import estate from '../../src/assets/img/estate.svg';
import cluster from '../../src/assets/img/cluster.svg';
import LogoutTimer from '../components/LogoutTimer';
import { GetRequest } from '../Auth/hooks/useGet';

function Admin() {
  const [countAllEstates, setCountAllEstates] = useState();
  const [countAllStaffs, setCountAllStaffs] = useState();
  const [countAllCluster, setCountAllClusters] = useState();
  const [isEstatesLoading, setIsEstatesLoading] = useState(false);
  const [isClustersLoading, setIsClustersLoading] = useState(false);
  const [isStaffsLoading, setIsStaffsLoading] = useState(false);

  const getCountAllEstates = async () => {
    try {
      const { status, data } = await GetRequest('api/estates');
      if (status === 200) {
        setIsEstatesLoading(true);
        setCountAllEstates(Number(data.length));
      } else {
        setCountAllEstates(0);
        setIsEstatesLoading(false);
      }
    } catch (error) {
      console.log('Error fetching all estates:', error);
    }
  };

  const getCountAllStaffs = async () => {
    try {
      const { status, data } = await GetRequest('/api/staffs', {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-Type': 'application/json',
        },
      });
      if (status === 200) {
        setCountAllStaffs(Number(data.length));
        setIsStaffsLoading(true);
      } else {
        setIsStaffsLoading(false);
        setCountAllStaffs(0);
      }
    } catch (error) {
      console.log('Error fetching all staffs:', error);
    }
  };

  const getCountAllClusters = async () => {
    try {
      const { status, data } = await GetRequest('/api/clusters');
      if (status === 200) {
        setIsClustersLoading(true);
        setCountAllClusters(Number(data.length));
      } else {
        setIsClustersLoading(false);
        setCountAllClusters(0);
      }
    } catch (error) {
      console.log('Error fetching all clusters:', error);
    }
  };

  useEffect(() => {
    getCountAllEstates();
    getCountAllStaffs();
    getCountAllClusters();
  }, []);

  return (
    <>
      <NavContainer dashboard={adminOverView}>
        <div className="flex flex-col px-4 py-8 space-y-8">
          {/* Bread crumbs */}
          <div>
            <div className="flex flex-row" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 md:space-x-2 font-normal">
                <li className="items-center">
                  <a
                    href="/admin"
                    className="inline-flex items-center text-sm text-[#a73439]"
                  >
                    Dashboard
                  </a>
                </li>
              </ol>
            </div>
          </div>
          {/* Cards */}
          <div>
            <div className="flex flex-row  space-x-12">
              <div>
                <Cards
                  title="Total Staff"
                  num={
                    isStaffsLoading === true ? (
                      countAllStaffs
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
                  icon={staff}
                />
              </div>
              <div>
                <Cards
                  title="Total Estate"
                  num={
                    isEstatesLoading === true ? (
                      countAllEstates
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
                  icon={estate}
                />
              </div>
              <div>
                <Cards
                  title="Total Cluster"
                  num={
                    isClustersLoading === true ? (
                      countAllCluster
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
                  icon={cluster}
                />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div>
            <div className=" bg-white rounded-md shadow-sm shadow-[#a73439]/25 h-[300px]">
              <div className="flex flex-col">
                <div>
                  <h1 className="text-sm font-medium text-[#B9B0B0] pt-3 pl-3">
                    Notification
                  </h1>
                </div>
                <div className="flex justify-center">
                  <h1 className="font-medium text-4xl text-[#B9B0B0] pt-20">
                    No new notification
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </NavContainer>
      <LogoutTimer />
    </>
  );
}

export default Admin;
