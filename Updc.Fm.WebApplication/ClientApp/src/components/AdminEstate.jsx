import React, { useEffect, useState } from 'react';
import NavContainer from './NavContainer';
import { adminEstate } from './NavLists';
import AdminCard from '../Utilities/AdminCard';
import { GetRequest } from '../Auth/hooks/useGet';
import Loader from './Loader';
import Estate from '../../src/assets/img/estate.svg';
import SearchBox from '../Utilities/SearchBox';
import { useNavigate } from 'react-router-dom';

const AdminEstate = () => {
  const [estates, setEstates] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  let [id, setId] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getEstates = async () => {
      setIsLoading(true);
      const { status, data } = await GetRequest('/api/estates');

      if (status === 200) {
        setEstates(data);
        console.log(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.log(data, status);
      }
    };

    getEstates();
  }, []);

  const handleQuery = (query) => {
    setSearch(query);
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={adminEstate}>
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
                        Estate
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
              <div>
                <button
                  className="border-2 rounded 
              border-[#bd4143] w-[80px] 
              h-[40px] cursor-pointer text-[#bd4143] text-sm font-medium ml-[40rem]"
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
                {estates &&
                  estates
                    .filter((e) =>
                      e.estate_Name
                        .toLowerCase()
                        .includes(search.toLowerCase()),
                    )
                    .map((estate) => (
                      <div
                        key={estate.id}
                        onClick={() => {
                          setId((id = estate.id));
                          console.log(id);
                          navigate('/admin/estates/' + id);
                        }}
                      >
                        <AdminCard
                          Header={estate.estate_Name}
                          Name={estate.estate_Name}
                          Manager={
                            estate.manager?.first_Name +
                            ' ' +
                            estate.manager?.last_Name
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

export default AdminEstate;
