import React, { useEffect, useState } from 'react';
import Buton from '../Utilities/Buton';
import NavContainer from './NavContainer';
import { newUnitDashboard } from '../components/NavLists';
import { useFormik } from 'formik';
import { GetRequest, PostRequest } from '../Auth/hooks/useGet';
import { useNavigate } from 'react-router-dom';
import { successMessage } from '../toast-message/toastMessage';
import Loader from './Loader';

const SalesNewUnit = () => {
  const [clusters, setClusters] = useState([]);
  const [clusterIsLoading, setClusterIsLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [estateisLoading, setEstateIsLoading] = useState(false);
  const [unitisLoading, setUnitIsLoading] = useState(false);
  const [estates, setEstates] = useState([]);
  const [units, setUnits] = useState([]);
  const [clusterId, setClusterId] = useState(null);
  const [estateId, setEstateId] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getCluster = async () => {
      setClusterIsLoading(true);
      const res = await GetRequest('/api/residents/clusters');
      if (res.status === 200) {
        setIsLoading(false);
        setClusters(res.data);
      }
    };
    getCluster();
  }, []);

  useEffect(() => {
    const getEstates = async () => {
      setEstateIsLoading(true);
      const res = await GetRequest(
        '/api/residents/clusters/' + clusterId + '/estates',
      );
      if (res.status === 200) {
        setEstateIsLoading(false);
        setEstates(res.data);
        console.log(res);
      }
    };
    getEstates();
  }, [clusterId]);

  useEffect(() => {
    const getUnits = async () => {
      setUnitIsLoading(true);
      const res = await GetRequest(
        '/api/residents/estates/' + estateId + '/units',
      );
      if (res && res.status === 200) {
        setUnitIsLoading(false);
        setUnits(res.data);
        console.log(res.data);
      }
    };
    getUnits();
  }, [estateId]);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      unitId: '',
      email: '',
      phoneNumber: '',
    },

    onSubmit: async (values) => {
      setIsLoading(true);
      const payload = {
        firstName: values.firstName,
        lastName: values.lastName,
        unitId: values.unitId,
        contact: {
          email: [values.email],
          phoneNumber: [values.phoneNumber],
        },
      };
      const headers = {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))}`,
        },
      };
      const res = await PostRequest('/api/residents', payload, headers);
      if (res.status === 201) {
        setIsLoading(false);
        successMessage({
          message: 'Resident created successfully',
          title: 'Resident Created',
        });
        navigate('/sales/allocation');
      }
      console.log(res);
    },
  });
  return (
    <NavContainer dashboard={newUnitDashboard}>
      {isLoading ? (
        <Loader />
      ) : (
        <form
          onSubmit={formik.handleSubmit}
          className="w-[900px] h-full flex justify-center"
        >
          <div>
            <div className="w-full flex mb-4 gap-5">
              <div className="flex items-center flex-1 h-[35px]">
                <h5 className="w-[100px]">First Name: </h5>
                <input
                  className="w-full flex-1 shadow-lg h-full rounded-md px-4 focus:outline-none"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex items-center flex-1 h-[35px]">
                <h5 className="w-[100px]">Last Name:</h5>
                <input
                  className="w-full flex-1 shadow-lg h-full rounded-md px-4 focus:outline-none"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="w-full flex mb-4 gap-5">
              <div className="flex items-center flex-1">
                <h5 className="w-[100px]">Email:</h5>
                <input
                  className="w-full flex-1 shadow-lg h-[35px] rounded-md px-4 focus:outline-none"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="flex items-center flex-1">
                <h5 className="w-[100px]">PhoneNo: </h5>
                <input
                  className="w-full flex-1 shadow-lg h-[35px] rounded-md px-4 focus:outline-none"
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="w-full flex mb-4 gap-5">
              <div className="flex items-center flex-1">
                <h5 className="w-[100px]">Cluster: </h5>
                <div className='w-full flex-1 text-gray-400 rounded block shadow-[#a73439]/25"'>
                  <select
                    onChange={(e) => {
                      setClusterId(e.target.value);
                      setEstateId(null);
                    }}
                    className="w-full flex-1 shadow-lg h-[35px] rounded-md px-4 focus:outline-none"
                  >
                    <option>--- Select Cluster ---</option>
                    {isLoading ? (
                      <option>Loading...</option>
                    ) : (
                      clusters.map((cluster) => (
                        <option value={cluster.id} key={cluster.id}>
                          {cluster.cluster_name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>
              <div className="flex items-center flex-1">
                <h5 className="w-[100px]">Estate:</h5>
                <div className="w-full flex-1 text-gray-400 rounded block shadow-[#a73439]/25">
                  <select
                    onChange={(e) => {
                      setEstateId(e.target.value);
                    }}
                    className="w-full flex-1 shadow-lg h-[35px] rounded-md px-4 focus:outline-none"
                  >
                    <option>--- Select Estate ---</option>
                    {estateisLoading ? (
                      <option>Loading...</option>
                    ) : (
                      estates.map((estate) => (
                        <option value={estate.id} key={estate.id}>
                          {estate.estate_Name}
                        </option>
                      ))
                    )}
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full flex mb-4 gap-5">
              <div className="flex items-center h-[35px]">
                <h5 className="w-[100px]"> Unit: </h5>
                <div className='w-full h-full flex-1 bg-white text-gray-400 rounded block shadow-[#a73439]/25"'>
                  <select
                    name="unitId"
                    onChange={formik.handleChange}
                    value={formik.values.unitId}
                    className="w-full flex-1 shadow-lg h-full rounded-md px-4 focus:outline-none"
                  >
                    <option>--- Select Unit ---</option>
                    {units.map((unit) => (
                      <option value={unit.id} key={unit.id}>
                        {unit.unit_number}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex-1"></div>
            </div>
            <div className=" flex  justify-end gap-4 mr-2">
              <span>
                <Buton
                  className="px-3 py-1 bg-white rounded-md hover:bg-red-600 hover:text-white text-black border border-red-600 "
                  text="Cancel"
                  type="cancel"
                />
              </span>
              <span className="">
                <Buton
                  className=" px-3 py-1 bg-green-500 text-white shadow-green-500/50 rounded-md hover:bg-white hover:text-green-500"
                  text="Allocate"
                  type="submit"
                />
              </span>
            </div>
          </div>
        </form>
      )}
    </NavContainer>
  );
};

export default SalesNewUnit;
