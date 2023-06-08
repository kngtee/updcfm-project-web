import React, { useEffect, useState } from 'react';
import NavContainer from './NavContainer';
import { adminNewEstate } from './NavLists';
import DropDownButton from '../Utilities/DropDownButton';
import Buton from '../Utilities/Buton';
import { useFormik } from 'formik';
import { GetRequest, PostRequest } from '../Auth/hooks/useGet';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const AdminNewEstate = () => {
  const [clusters, setClusters] = useState([]);
  const [staffs, setStaffs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [clusterIsloading, setClusterIsLoading] = useState(false);
  const [StaffIsloading, setStaffIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getStaffs = async () => {
      setStaffIsLoading(true);
      const { status, data } = await GetRequest('/api/staffs');
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
      cluster_id: '',
      facility_manager: '',
    },
    onSubmit: async (values) => {
      setIsLoading(true);
      console.log(values);
      const { status, data } = await PostRequest('/api/estates', values);

      if (status === 201) {
        setIsLoading(false);
        console.log(data);
        navigate('/admin/estate');
      }
    },
  });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={adminNewEstate}>
          <div className="">
            <div className="flex flex-row pt-7">
              <div>
                <p className="text-[#9A9595] cursor-pointer">
                  Dashboard&nbsp;/&nbsp;
                </p>
              </div>
              <div>
                <p className="text-[#9A9595] cursor-pointer">
                  &nbsp;Estate&nbsp;/&nbsp;
                </p>
              </div>
              <div>
                <p className="text-[#bd4143] cursor-pointer">
                  &nbsp;New Estate
                </p>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-10 justify-center mt-28">
                <div className="flex flex-row gap-20 justify-center">
                  <div>
                    <label className="font-medium text-sm text-[#0F0F0F]">
                      Estate Name:
                    </label>
                    <input
                      type="text"
                      placeholder="Estate name"
                      name="estate_name"
                      onChange={formik.handleChange}
                      className="rounded-md bg-white 
                    shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-3 
                    placeholder:text-[#9A9595] 
                    font-normal text-sm pl-2"
                    />
                  </div>
                  <div>
                    <div className="flex flex-row pt-1">
                      <label className="font-medium text-sm text-[#0F0F0F] pt-1">
                        Estate Address:
                      </label>
                      <div className="ml-3">
                        <input
                          type="text"
                          placeholder="Estate Address"
                          name="estate_address"
                          onChange={formik.handleChange}
                          className="rounded-md bg-white 
                    shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-3 
                    placeholder:text-[#9A9595] 
                    font-normal text-sm pl-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row pt-1 ml-[10rem]">
                    <label className="font-medium text-sm text-[#0F0F0F] pt-1">
                      Cluster:
                    </label>
                    <select
                      name="cluster_id"
                      onChange={formik.handleChange}
                      className="rounded-md bg-white 
                    shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-3 
                    placeholder:text-[#9A9595] 
                    font-normal text-sm pl-2"
                    >
                      <option>--- select cluster ---</option>
                      {clusterIsloading ? (
                        <option>Loading...</option>
                      ) : (
                        clusters.map((cluster) => (
                          <option key={cluster.id} value={cluster.id}>
                            {cluster.cluster_name}
                          </option>
                        ))
                      )}
                    </select>
                  </div>
                </div>
                <div>
                  <div className="flex flex-row pt-1 ml-[10rem]">
                    <label className="font-medium text-sm text-[#0F0F0F] pt-1">
                      Facility Manager:
                    </label>
                    <select
                      name="facility_manager"
                      onChange={formik.handleChange}
                      className="rounded-md bg-white 
                    shadow-sm shadow-[#a73439]/25 w-[195px] h-[40px] ml-3 
                    placeholder:text-[#9A9595] 
                    font-normal text-sm pl-2"
                    >
                      <option>--- select cluster ---</option>
                      {clusterIsloading ? (
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

export default AdminNewEstate;
