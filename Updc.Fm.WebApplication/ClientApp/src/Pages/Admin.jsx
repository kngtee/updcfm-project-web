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
      setIsEstatesLoading(true);
      const { status, data } = await GetRequest('api/estates');
      if (status === 200) {
        setIsEstatesLoading(false);
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
      setIsStaffsLoading(true);
      const { status, data } = await GetRequest('/api/staffs', {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-Type': 'application/json',
        },
      });
      if (status === 200) {
        setCountAllStaffs(Number(data.length));
        setIsStaffsLoading(false);
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
      setIsClustersLoading(true);
      const { status, data } = await GetRequest('/api/clusters');
      if (status === 200) {
        setIsClustersLoading(false);
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
                  num={countAllStaffs}
                  icon={staff}
                  isLoading={isStaffsLoading}
                />
              </div>
              <div>
                <Cards
                  title="Total Estate"
                  num={countAllEstates}
                  icon={estate}
                  isLoading={isEstatesLoading}
                />
              </div>
              <div>
                <Cards
                  title="Total Cluster"
                  num={countAllCluster}
                  icon={cluster}
                  isLoadin={isClustersLoading}
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
