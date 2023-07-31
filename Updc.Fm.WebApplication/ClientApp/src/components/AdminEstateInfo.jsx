import React, { useState, useEffect } from 'react';
import NavContainer from './NavContainer';
import { GetRequest } from '../Auth/hooks/useGet';
import TableVariantAdminEstateInfo from '../Utilities/TableVariantAdminEstateInfo';
import { useParams } from 'react-router-dom';
import Loader from './Loader';

let tableHeader = [{ unit_number: 'Unit Number' }];

const AdminEstateInfo = () => {
  const [units, setUnits] = useState([]);
  const [estates, setEstates] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  const truncateText = (str) => {
    return str.length > 15 ? str.substring(0, 12) + '....' : str;
  };

  const getEstates = async () => {
    const { status, data } = await GetRequest('/api/estates/' + id);
    if (status === 200) {
      setEstates(data);
      //console.log(data);
    }
  };

  const getUnits = async () => {
    const { status, data } = await GetRequest('/api/estates/' + id + '/units');
    if (status === 200) {
      data.forEach((e) => {
        let newE = {
          unit_number: e.unit_number,
        };
        setUnits((i) => [...i, newE]);
      });
      console.log(data);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getEstates();
    getUnits();
  }, []);

  const estateNav = {
    overview: {
      title: 'Cluster Info',
      navs: [
        {
          name: 'Estate',
          path: '',
        },
      ],
    },
    manage: {
      title: 'Manage',
      navs: [
        {
          name: 'Add New Unit',
          path: '/admin/estates/' + id + '/unit/new',
        },
      ],
    },
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={estateNav}>
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
                      href="/admin/estates"
                      className="ml-1 items-center text-sm text-gray-500 hover:text-[#a73439] md:ml-2"
                    >
                      Estate
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
                      {estates &&
                        truncateText(String(estates.facility_Manager))}
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
                  {estates && estates.estate_Name}
                </p>
                <ol className="mt-1 text-[#0f0f0f]">
                  <li className="font-bold">
                    Estate Address:
                    <span className="font-medium">
                      {' '}
                      {estates && estates.estate_Address}
                    </span>
                  </li>
                </ol>
                <ol className="mt-1 text-[#0f0f0f]">
                  <li className="font-bold">
                    Facility Manager:
                    <span className="font-medium">
                      {' '}
                      {estates &&
                        String(estates.manager?.first_Name) +
                          ' ' +
                          String(estates.manager?.last_Name)}
                    </span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div className="mt-4">
            {units ? (
              <TableVariantAdminEstateInfo
                filter={['unit_number']}
                header={tableHeader}
                data={units && units}
                query={''}
              />
            ) : null}
          </div>
        </NavContainer>
      )}
    </>
  );
};

export default AdminEstateInfo;
