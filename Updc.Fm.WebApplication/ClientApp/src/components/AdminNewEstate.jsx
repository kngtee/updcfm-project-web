import React, { useEffect, useState } from 'react';
import NavContainer from './NavContainer';
import { adminNewEstate } from './NavLists';
import Buton from '../Utilities/Buton';
import { useFormik } from 'formik';
import { GetRequest, PostRequest } from '../Auth/hooks/useGet';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from './Loader';
import estateCreationSchema from '../Validators/estateCreation.validator';

const AdminNewEstate = () => {
  const [clusters, setClusters] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clusterIsloading, setClusterIsLoading] = useState(false);
  const [StaffIsloading, setStaffIsLoading] = useState(false);

  const route = useParams();

  // const id = route.params;

  const navigate = useNavigate();

  useEffect(() => {
    const getStaffs = async () => {
      setStaffIsLoading(true);
      const { status, data } = await GetRequest('/api/staffs', {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
          'Content-Type': 'application/json',
        },
      });
      if (status === 200) {
        setStaffIsLoading(false);
        setStaffs(data);
        console.log(data);
      }
    };

    getStaffs();
  }, []);
  useEffect(() => {
    const getClusters = async () => {
      setClusterIsLoading(true);
      const { status, data } = await GetRequest('/api/clusters');

      if (status === 200) {
        setClusterIsLoading(false);
        setClusters(data);
        console.log(data);
      }
    };
    getClusters();
  }, []);

  const formik = useFormik({
    initialValues: {
      estate_name: '',
      estate_address: '',
      cluster_id: route ? route.id : '',
      facility_manager: '',
    },

    validationSchema: estateCreationSchema,

    onSubmit: async (values) => {
      setIsLoading(true);
      console.log(values);
      const { status, data } = await PostRequest('/api/estates', values);

      if (status === 201) {
        setIsLoading(false);
        // console.log(data);
        if (route.id) {
          navigate('/admin/clusters/' + route.id);
        } else {
          navigate('/admin/estate');
        }
      } else {
        setIsLoading(false);
        console.log(data, status);
      }
    },
  });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={adminNewEstate}>
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
                        href="/admin/estates"
                        className="inline-flex ml-1 items-center text-sm text-gray-500 hover:text-[#a73439]"
                      >
                        Estate
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
                        New Estate
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              {/* Form fields for estate name and address*/}
              <div className="flex flex-col space-y-5">
                <div className="flex flex-row space-x-5">
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <label className="font-medium text-sm text-[#0F0F0F]">
                        Estate Name:
                      </label>
                      <input
                        type="text"
                        placeholder="Estate name"
                        name="estate_name"
                        onChange={formik.handleChange}
                        className="rounded-md bg-white 
                    shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-3 
                    text-gray-400
                    font-medium text-xs pl-2"
                      />
                    </div>
                    {formik.errors.estate_name &&
                      formik.touched.estate_name && (
                        <span className="text-[red] text-[12px] ml-[100px] mt-[10px]">
                          {formik.errors.estate_name}
                        </span>
                      )}
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <label className="font-medium text-sm text-[#0F0F0F] pt-1">
                        Estate Address:
                      </label>
                      <input
                        type="text"
                        placeholder="Estate Address"
                        name="estate_address"
                        onChange={formik.handleChange}
                        className="rounded-md bg-white 
                    shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-3 
                    text-gray-400
                    font-medium text-xs pl-2"
                      />
                    </div>
                    {formik.errors.estate_address &&
                      formik.touched.estate_address && (
                        <span className="text-[red] text-[12px] ml-[110px] mt-[10px]">
                          {formik.errors.estate_address}
                        </span>
                      )}
                  </div>
                </div>
                {/* Cluster and facility manager */}
                <div className="flex flex-row space-x-5">
                  <div className="flex flex-col">
                    <div>
                      <label className="font-medium text-sm text-[#0F0F0F] pt-2">
                        Cluster:
                      </label>
                      <select
                        name="cluster_id"
                        defaultValue={route.id}
                        onChange={formik.handleChange}
                        disabled={route && route.id}
                        className="rounded-md bg-white 
                    shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-12
                    text-gray-400 
                    font-medium text-xs pl-2"
                      >
                        <option>--- select cluster ---</option>
                        {clusterIsloading ? (
                          <option>Loading...</option>
                        ) : (
                          clusters.map((cluster) => (
                            <option
                              key={cluster.id}
                              value={cluster.id}
                              selected={route && route.id === cluster.id}
                            >
                              {cluster.cluster_name}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                    {formik.errors.cluster_id && formik.touched.cluster_id && (
                      <span className="text-[red] text-[12px] ml-[100px] mt-[10px]">
                        {formik.errors.cluster_id}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <label className="font-medium text-sm text-[#0F0F0F] pt-2">
                        Facility Mangr:
                      </label>
                      <select
                        name="facility_manager"
                        onChange={formik.handleChange}
                        className="rounded-md bg-white 
                    shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-3 
                    text-gray-400 
                    font-medium text-xs pl-2"
                      >
                        <option>--- select facility manager ---</option>
                        {StaffIsloading ? (
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
                    {formik.errors.facility_manager &&
                      formik.touched.facility_manager && (
                        <span className="text-[red] text-[12px] ml-[110px] mt-[10px]">
                          {formik.errors.facility_manager}
                        </span>
                      )}
                  </div>
                </div>
                <div className="flex flex-row space-x-5 justify-end pr-[5rem] pt-20">
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

export default AdminNewEstate;
