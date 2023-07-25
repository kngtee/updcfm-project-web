import React, { useState, useEffect } from 'react';
import NavContainer from './NavContainer';
import { adminClusterInfos } from './NavLists';
import { GetRequest } from '../Auth/hooks/useGet';
import { errorMessage } from '../toast-message/toastMessage';
import TableVariantAdminClusterInfo from '../Utilities/TableVariantAdminClusterInfo';
import { useParams } from 'react-router-dom';
import Table from '../Utilities/Table';

let tableHeader = [
  { cluster_Id: 'Cluster Id' },
  { estate_Address: 'Estate Address' },
  { estate_Name: 'Estate Name' },
];

const AdminClusterInfo = () => {
  const [clusters, setClusters] = useState({});
  const [estates, setEstates] = useState([]);
  const { id } = useParams();

  const truncateText = (str) => {
    return str.length > 15 ? str.substring(0, 12) + '....' : str;
  };

  const getCluster = async () => {
    const { status, data } = await GetRequest('/api/clusters/' + id);
    if (status === 200) {
      setClusters(data);
      console.log(clusters);
    }
  };

  const getEstates = async () => {
    const { status, data } = await GetRequest(
      '/api/clusters/' + id + '/estates',
    );
    if (status === 200) {
      data.forEach((e) => {
        let newE = {
          cluster_Id: e.cluster_Id,
          estate_Address: e.estate_Address,
          estate_Name: e.estate_Name,
        };
        setEstates((i) => [...i, newE]);
      });
      console.log(estates);
    }
  };

  useEffect(() => {
    getCluster();
    getEstates();
  }, []);

  return (
    <>
      <NavContainer dashboard={adminClusterInfos}>
        <div className="space-y-8 px-4 py-8">
          <div className="flex flex-row" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 font-normal">
              <li className="items-center">
                <a
                  href="/admin"
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
                    href="/admin/cluster"
                    className="ml-1 items-center text-sm text-gray-500 hover:text-[#a73439] md:ml-2"
                  >
                    Cluster
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
                    {clusters && truncateText(String(clusters.cluster_manager))}
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="flex flex-col items-start justify-between px-6 py-4 w-fit bg-white rounded-md shadow-sm shadow-[#a73439]/25 md:flex-row md:w-[300px] md:max-h-[300px]">
            <div className="text-xs font-medium justify-between leading-normal">
              <p className="text-gray-400 text-sm">
                {clusters && clusters.cluster_name}
              </p>
              <ol className="mt-1 text-[#0f0f0f]">
                <li className="font-bold">
                  Manager:
                  <span className="font-medium">
                    {' '}
                    {clusters &&
                      clusters.manager?.first_Name +
                        ' ' +
                        clusters.manager?.last_Name}
                    {clusters && console.log(clusters)}
                  </span>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="mt-4">
          {estates ? (
            <TableVariantAdminClusterInfo
              filter={['estate_Address', 'estate_Name']}
              header={tableHeader}
              data={estates && estates}
              query={''}
            />
          ) : null}
        </div>
      </NavContainer>
    </>
  );
};

export default AdminClusterInfo;
