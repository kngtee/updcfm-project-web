import React, { useEffect, useState } from 'react';
import NavContainer from './NavContainer';
import { adminCluster } from './NavLists';
import AdminCard from '../Utilities/AdminCard';
import { GetRequest } from '../Auth/hooks/useGet';
import Loader from './Loader';
import Estate from '../../src/assets/img/estate.svg';
import SearchBox from '../Utilities/SearchBox';
import { useNavigate } from 'react-router-dom';

const AdminCluster = () => {
  const [clusters, setClusters] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  let [id, setId] = useState();

  const handleQuery = (query) => {
    setSearch(query);
  };

  const navigate = useNavigate();

  useEffect(() => {
    const getCluster = async () => {
      const { status, data } = await GetRequest('/api/residents/clusters');
      setIsLoading(true);
      if (status === 200) {
        setClusters(data);
        console.log(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.log(data, status);
      }
    };

    getCluster();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={adminCluster}>
          <div className="flex flex-col px-4 py-8 space-y-8">
            {/* Breadcrumbs and delete button */}
            <div className="flex flex-row space-x-10">
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
                        Clusters
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
              <div>
                <button
                  className="border-2 rounded 
            border-[#bd4143] w-[80px] 
            h-[40px] cursor-pointer text-[#bd4143] text-sm font-medium ml-[39.5rem]"
                >
                  Delete
                </button>
              </div>
            </div>
            {/* Dropdown, prev and nxt btn */}
            <div className="flex flex-row ml-[44rem]">
              {/* Search */}
              <div>
                <SearchBox query={handleQuery} />
              </div>
            </div>
            {/* Admin cards alignment*/}
            <div className="flex flex-col overflow-y-scroll h-[22rem]">
              {/* Admin card contents */}
              <div className="grid grid-cols-3 gap-4">
                {clusters
                  .filter((e) =>
                    e.cluster_name.toLowerCase().includes(search.toLowerCase()),
                  )
                  .map((cluster) => (
                    <div
                      onClick={() => {
                        setId((id = cluster.id));
                        console.log(id);
                        navigate('/admin/clusters/' + id);
                      }}
                    >
                      <AdminCard
                        Header="Cluster Info"
                        Name={cluster.cluster_name}
                        Manager={
                          cluster.manager?.first_Name +
                          ' ' +
                          cluster.manager?.last_Name
                        }
                        Icon={Estate}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </NavContainer>
      )}
    </>
  );
};

export default AdminCluster;
