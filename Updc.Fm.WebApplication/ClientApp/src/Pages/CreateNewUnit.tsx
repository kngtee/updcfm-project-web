import React from 'react';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { GetRequest, PostRequest } from '../Auth/hooks/useGet';
import Loader from '../components/Loader';
import NavContainer from '../components/NavContainer';
import unitCreationSchema from '../Validators/unitCreation.validator';
import Buton from '../Utilities/Buton';
import { useNavigate, useParams } from 'react-router-dom';

const CreateNewUnit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [estates, setEstates] = useState([]);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getEstates = async () => {
      setIsLoading(true);
      const { status, data } = await GetRequest('/api/estates');

      if (status === 200) {
        setEstates(data);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    };

    getEstates();
  }, []);

  const formik = useFormik({
    initialValues: {
      estate_id: id,
      unit_number: '',
    },
    validationSchema: unitCreationSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      const { status, data } = await PostRequest(
        `/api/estates/${id}/units`,
        values,
      );

      if (status === 201) {
        navigate('/admin/estates/' + id);
        setIsLoading(false);
        console.log(data, status);
      } else {
        setIsLoading(false);
        console.log(data, status);
      }
    },
  });

  const unitCreation = {
    overview: {
      title: 'Create Unit',
      navs: [
        {
          name: 'New Unit',
          path: '',
        },
      ],
    },
    manage: {
      title: 'Manage',
      navs: [],
    },
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={unitCreation}>
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
                        Estate:
                      </label>
                      <select
                        name="estate_id"
                        className="rounded-md bg-white 
                      shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-3 
                      text-gray-400 
                      font-medium text-xs pl-2"
                        onChange={formik.handleChange}
                        disabled
                      >
                        <option>--- select estate ---</option>
                        {isLoading ? (
                          <option>Loading...</option>
                        ) : (
                          estates.map((estate) => (
                            <option
                              key={estate.id}
                              value={estate.id}
                              selected={id && id === estate.id}
                            >
                              {estate.estate_Name}
                            </option>
                          ))
                        )}
                      </select>
                    </div>
                    {formik.errors.estate_id && formik.touched.estate_id && (
                      <span className="text-[red] text-[12px] ml-[110px] mt-[10px]">
                        {formik.errors.estate_id}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div>
                      <label className="pt-2 font-medium text-sm text-[#0F0F0F]">
                        Unit Name
                      </label>
                      <input
                        type="text"
                        name="unit_number"
                        placeholder="Enter unit name"
                        className="rounded-md bg-white 
                        shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-3 
                        text-gray-400 
                          font-medium text-xs pl-2"
                        onChange={formik.handleChange}
                      />
                    </div>
                    {formik.errors.unit_number &&
                      formik.touched.unit_number && (
                        <span className="text-[red] text-[12px] ml-[110px] mt-[10px]">
                          {formik.errors.unit_number}
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

export default CreateNewUnit;
