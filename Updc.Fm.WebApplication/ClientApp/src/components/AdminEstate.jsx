import React, { useEffect, useState } from 'react';
import NavContainer from './NavContainer';
import { adminEstate } from './NavLists';
import DropDownButton from '../Utilities/DropDownButton';
import { MdArrowLeft, MdArrowRight } from 'react-icons/md';
import AdminCard from '../Utilities/AdminCard';
import RealEstate from '../assets/img/Real Estate.png';
import { GetRequest } from '../Auth/hooks/useGet';
import Loader from './Loader';

const AdminEstate = () => {
  const [estates, setEstates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getEstates = async () => {
      setIsLoading(true);
      const { status, data } = await GetRequest('/api/estates');

      if (status === 200) {
        setIsLoading(false);
        setEstates(data);
        console.log(data);
      } else {
        setIsLoading(false);
        console.log(data, status);
      }
    };

    getEstates();
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={adminEstate}>
          <div>
            <div className="flex flex-row pt-7 justify-center">
              <div>
                <p className="text-[#9A9595] cursor-pointer">
                  Dashboard&nbsp;/&nbsp;
                </p>
              </div>
              <div>
                <p className="text-[#bd4143] cursor-pointer">&nbsp;Estate</p>
              </div>
              <div>
                <button
                  className="ml-[650px] border-2 rounded 
              border-[#bd4143] w-[80px] 
              h-[40px] cursor-pointer text-[#bd4143] text-sm font-medium"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="flex flex-row gap-x-[24rem] mt-10 justify-center">
              <div className="flex flex-row gap-3">
                <div>
                  <DropDownButton
                    first="Select State"
                    second="State 1"
                    third="State 2"
                  />
                </div>
                <div>
                  <DropDownButton
                    first="Select Cluster"
                    second="Cluster 1"
                    third="Cluster 2"
                  />
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div>
                  <button className="shadow-sm shadow-[#a73439]/25 bg-white h-[30px] w-[25px] rounded">
                    <MdArrowLeft />
                  </button>
                </div>
                <div>
                  <button className="shadow-sm shadow-[#a73439]/25 bg-white h-[30px] w-[25px] rounded">
                    <MdArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-7 mt-5">
              <div className="flex flex-row justify-start gap-20">
                {estates &&
                  estates.map((estate) => (
                    <div key={estate.id}>
                      <AdminCard
                        Header="Yaba Estate"
                        Name={estate.estate_Name}
                        Manager={
                          estate.manager.first_Name +
                          ' ' +
                          estate.manager.last_Name
                        }
                        Icon={RealEstate}
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
