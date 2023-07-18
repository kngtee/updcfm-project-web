import React from 'react';
import NavContainer from '../components/NavContainer';
import { adminOverView } from '../components/NavLists';
import Cards from '../Utilities/Cards';
import staff from '../../src/assets/img/staff.svg';
import estate from '../../src/assets/img/estate.svg';
import cluster from '../../src/assets/img/cluster.svg';
import LogoutTimer from '../components/LogoutTimer';

function Admin() {
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
                <Cards title="Total Unit" num="100" icon={staff} />
              </div>
              <div>
                <Cards title="Total Unit" num="100" icon={estate} />
              </div>
              <div>
                <Cards title="Total Unit" num="100" icon={cluster} />
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
      <LogoutTimer timeout={10} />
    </>
  );
}

export default Admin;
