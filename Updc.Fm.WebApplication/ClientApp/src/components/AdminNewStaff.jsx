import React, { useState } from 'react';
import NavContainer from './NavContainer';
import { adminNewStaff } from './NavLists';
import Buton from '../Utilities/Buton';
import { useFormik } from 'formik';
import { PostRequest } from '../Auth/hooks/useGet';
import { stringToBase64 } from '../Services/Converter';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';

const AdminNewStaff = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      role: '',
    },
    onSubmit: async (values) => {
      console.log(values);
      setIsLoading(true);
      const headers = {
        headers: {
          'x-access-pwd': `Bearer ${stringToBase64(values.last_name)}`,
        },
      };
      const { status, data } = await PostRequest(
        '/api/staffs',
        values,
        headers,
      );
      if (status === 201) {
        console.log(data);
        navigate('/admin/staff');
        setIsLoading(false);
      }
      setIsLoading(false);
    },
  });
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <NavContainer dashboard={adminNewStaff}>
          <div className="flex flex-col px-4 py-8 space-y-8">
            <div className="flex flex-row">
              <div className="flex flex-row" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 font-normal">
                  <li className="items-center">
                    <a
                      href="/accounts"
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
                        href="/accounts"
                        className="inline-flex ml-1 items-center text-sm text-gray-500 hover:text-[#a73439]"
                      >
                        Staff
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
                        New Staff
                      </span>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col space-y-5">
                <div className="flex flex-row space-x-5">
                  <div className="flex flex-row">
                    <div>
                      <label className="font-medium text-sm text-[#0F0F0F]">
                        First Name:
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        onChange={formik.handleChange}
                        placeholder="Enter first name"
                        className="rounded-md bg-white 
                  shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-3 
                  text-gray-400 
                  font-medium text-xs pl-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row">
                    <label className="font-medium text-sm text-[#0F0F0F] pt-2">
                      Last Name:
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      onChange={formik.handleChange}
                      placeholder="Enter last name"
                      className="rounded-md bg-white 
                  shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-3 
                  text-gray-400 
                  font-medium text-xs pl-2"
                    />
                  </div>
                </div>
                <div className="flex flex-row space-x-5">
                  <div className="flex flex-row">
                    <label className="font-medium text-sm text-[#0F0F0F] ml-[-0rem] pt-2">
                      Email:
                    </label>
                    <input
                      type="text"
                      name="email"
                      onChange={formik.handleChange}
                      placeholder="Enter email address"
                      className="rounded-md bg-white 
                  shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-[2.9rem] 
                  text-gray-400
                  font-medium text-xs pl-2"
                    />
                  </div>
                  <div className="flex flex-row">
                    <label className="font-medium text-sm text-[#0F0F0F] pt-2">
                      Phone no:
                    </label>
                    <input
                      type="text"
                      name="phone_number"
                      onChange={formik.handleChange}
                      placeholder="Enter phone number"
                      className="rounded-md bg-white 
                  shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-[1.2rem] 
                  ext-gray-400
                  font-medium text-xs pl-2"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="flex flex-row">
                    <label className="font-medium text-sm text-[#0F0F0F] pt-2">
                      Role:
                    </label>
                    <select
                      name="role"
                      onChange={formik.handleChange}
                      id=""
                      className="rounded-md bg-white 
                    shadow-sm shadow-[#a73439]/25 w-[300px] h-[40px] ml-[3.3rem]
                    text-gray-400 
                    font-medium text-xs pl-2"
                    >
                      <option>--- select role ---</option>
                      <option value={'FM'}>Facility Manager</option>
                      <option className="CM">Cluster Manager</option>
                      <option value={'BS'}>Backend Office Staff</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-row space-x-5 justify-end pr-[7.5rem] pt-20">
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

export default AdminNewStaff;
