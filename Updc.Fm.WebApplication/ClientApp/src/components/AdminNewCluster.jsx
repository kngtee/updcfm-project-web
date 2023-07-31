import React, { useEffect, useState } from 'react';
import NavContainer from './NavContainer';
import { adminNewCluster } from './NavLists';
import Buton from '../Utilities/Buton';
import { GetRequest, PostRequest } from '../Auth/hooks/useGet';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import { successMessage } from '../toast-message/toastMessage';
import clusterCreationSchema from '../Validators/clusterCreation.validator';

const AdminNewCluster = () => {
  const [staffs, setStaffs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getStaff = async () => {
      setIsLoading(true);
      const { status, data } = await GetRequest('api/staffs', {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-Type': 'application/json',
        },
      });

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

    validationSchema: clusterCreationSchema,

    onSubmit: async (values) => {
      console.log(values);
      setIsLoading(true);
      const { status, data } = await PostRequest('/api/clusters', values);
      if (status === 201) {
        navigate('/admin/cluster');
        successMessage({
          message: 'Cluster Created Successfully.',
          title: 'Creation of Cluster',
        });
        setIsLoading(false);
      } else {
        console.log(data, status);
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
          <div className="flex flex-col px-4 py-8 space-y-8">
            <div className="flex flex-row">
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
                      <a
                        href="/admin/clusters"
                        className="inline-flex ml-1 items-center text-sm text-gray-500 hover:text-[#a73439]"
                      >
                        Cluster
                      </a>
                    </div>
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
                        New Cluster
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="">
                <div className="flex flex-row space-x-20 items-center">
                  <div className="flex flex-col">
                    <div>
                      <label className="pt-2 font-medium text-sm text-[#0F0F0F]">
                        Cluster Name:
                      </label>
                      <input
                        type="text"
                        name="clusterName"
                        placeholder="Enter cluster name"
                        className="rounded-md bg-white 
                    shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-3 
                    text-gray-400 
                      font-medium text-xs pl-2"
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.errors.clusterName &&
                      formik.touched.clusterName && (
                        <span className="text-[red] text-[12px] ml-[110px] mt-[10px]">
                          {formik.errors.clusterName}
                        </span>
                      )}
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <label className="pt-2 font-medium text-sm text-[#0F0F0F]">
                        Cluster Manager:
                      </label>
                      <select
                        name="clusterManager"
                        className="rounded-md bg-white 
                      shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-3 
                      text-gray-400 
                      font-medium text-xs pl-2"
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
                    {formik.errors.clusterManager &&
                      formik.touched.clusterManager && (
                        <span className="text-[red] text-[12px] ml-[110px] mt-[10px]">
                          {formik.errors.clusterManager}
                        </span>
                      )}
                  </div>
                </div>
                <div className="flex flex-row space-x-5 pt-20 justify-end pr-[5rem]">
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
