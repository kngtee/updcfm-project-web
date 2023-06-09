import React, { useEffect, useState } from 'react';
import NavContainer from './NavContainer';
import { adminClusterInfos } from './NavLists';

const AdminClusterInfo = () => {
  const truncateText = (str) => {
    return str.length > 15 ? str.substring(0, 12) + '....' : str;
  };

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
                    {truncateText('680E6AF6-67DA-4F0E-9E6A-0AC923DB9B54')}
                  </span>
                </div>
              </li>
            </ol>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-12">
          <div className="flex flex-col items-start justify-between px-6 py-4 w-fit bg-white rounded-md shadow-sm shadow-[#a73439]/25 md:flex-row md:w-[230px] md:max-h-[200px]">
            <div className="text-xs font-medium justify-between leading-normal">
              <p className="text-gray-400 text-sm">Cluster Name</p>
              <ol className="mt-1 text-[#0f0f0f]">
                <li>
                  Estates:
                  <span className="font-bold"></span>
                </li>
                <li>
                  Units:
                  <span className="font-bold"> johndoe@example.com</span>
                </li>
                {/* <li>
                  Estate:<span className="font-bold"> Victoria Bay</span>
                </li>
                <li>
                  Tenant:<span className="font-bold"> Abel Ayinla</span>
                </li> */}
              </ol>
            </div>
          </div>
        </div>
      </NavContainer>
    </>
  );
};

export default AdminClusterInfo;
