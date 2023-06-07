import React, { useEffect, useState } from 'react';
import NavContainer from './NavContainer';
import { adminNewCluster } from './NavLists';
import DropDownButton from '../Utilities/DropDownButton';
import Buton from '../Utilities/Buton';
import { GetRequest, PostRequest } from '../Auth/hooks/useGet';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { successMessage } from '../toast-message/toastMessage';

const AdminNewCluster = () => {
  const [staffs, setStaffs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getStaff = async () => {
      setIsLoading(true);
      const { status, data } = await GetRequest('api/staffs');

      if (status === 200) {
        setStaffs(data);
        setIsLoading(false);
        console.log(data);
      } else {
        setStaffs([]);
      }
    };

    getStaff();
  }, []);

  const formik = useFormik({
    initialValues: {
      clusterName: '',
      clusterManager: '',
    },

    onSubmit: async (values) => {
      console.log(values);
      setIsLoading(true);
      const { status, data } = await PostRequest('/api/clusters', values);
      if (status === 200) {
        navigate('/admin/cluster');
        successMessage({
          message: 'Cluster Created Successfully.',
          title: 'Creation of Cluster',
        });
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    },
  });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={adminNewCluster}>
          <div className="">
            <div className="flex flex-row pt-7">
              <div>
                <p className="text-[#9A9595] cursor-pointer">
                  Dashboard&nbsp;/&nbsp;
                </p>
              </div>
              <div>
                <p className="text-[#9A9595] cursor-pointer">
                  &nbsp;Cluster&nbsp;/&nbsp;
                </p>
              </div>
              <div>
                <p className="text-[#bd4143] cursor-pointer">
                  &nbsp;New Cluster
                </p>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-10 justify-center mt-28">
                <div className="flex flex-row gap-20 justify-center">
                  <div>
                    <label className="font-medium text-sm text-[#0F0F0F]">
                      Cluster Name:
                    </label>
                    <input
                      type="text"
                      name="clusterName"
                      placeholder="Enter cluster name"
                      className="rounded-md bg-white 
                      shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-3 
                      placeholder:text-[#9A9595] 
                      font-normal text-sm pl-2"
                      onChange={formik.handleChange}
                    />
                  </div>
                  <div>
                    <div className="flex flex-row pt-1 items-center">
                      <label className="font-medium text-sm text-[#0F0F0F] pt-1">
                        Manager:
                      </label>
                      <div className="ml-3">
                        <select
                          name="clusterManager"
                          className="rounded-md bg-white 
                      shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-3 
                      text-[#9A9595] 
                      font-normal text-sm pl-2"
                          onChange={formik.handleChange}
                        >
                          <option>--- select manager ---</option>
                          {isLoading ? (
                            <option>Loading...</option>
                          ) : (
                            staffs.map((staff) => (
                              <option key={staff.id} value={staff.id}>
                                {staff.first_Name + ' ' + staff.last_Name}
                              </option>
                            ))
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mt-32 justify-end pr-[10rem]">
                  <div>
                    <Buton
                      className="border border-[#bd4143] w-[80px] h-[40px]
                    cursor-pointer text-[#0F0F0F] 
                    text-sm font-medium rounded-md"
                      text="Cancel"
                      type="cancel"
                    />
                  </div>
                  <div>
                    <Buton
                      className="border border-[#34A739] w-[80px] 
                    h-[40px] cursor-pointer bg-[#34A739] 
                    text-white text-sm font-medium rounded-md"
                      text="Create"
                      type="submit"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </NavContainer>
      )}
    </>
  );
};

export default AdminNewCluster;
