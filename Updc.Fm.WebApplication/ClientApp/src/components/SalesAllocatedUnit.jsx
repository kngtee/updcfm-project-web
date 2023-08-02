import React, { useState } from 'react';
import { FiDownload } from 'react-icons/fi';
import { FaPen } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const SalesAllocatedUnit = ({ selectedRow }) => {
  const [formData, setFormData] = useState({
    email: selectedRow?.email,
    first_name: selectedRow?.first_name,
    last_name: selectedRow?.last_name,
    unit: selectedRow?.unit,
    phone_number: selectedRow?.phone_number,
  });
  const [isEditing, setIsEditing] = useState(false);
  const nav = useNavigate();

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div
      onClick={() => {
        nav('/sales/allocation');
      }}
      className=" "
    >
      <div className="  bg-white relative mt-[100px] m-auto py-4 w-[480px] h-[250px] font-medium text-lg shadow-lg rounded-lg ">
        <div className="flex flex-row justify-center space-x-28">
          <div className="">
            <div className=" flex justify-center  rounded-full w-[60px] h-[60px] bg-gray-500">
              <FiDownload className="mt-5" size={20} />
            </div>
          </div>
          <div className="pt-2">
            {selectedRow && (
              <h4 className="text-[20px] font-bold">
                {selectedRow.first_name + ' ' + selectedRow.last_name}
              </h4>
            )}
          </div>
          <div className="w-[10%] mt-2">
            {!isEditing && (
              <FaPen onClick={handleEdit} size={20} color="#A73439" />
            )}
          </div>
        </div>
        <div className="flex flex-row px-4 mt-4">
          {selectedRow && (
            <div className="flex flex-col">
              <div className="ml-2">
                <span className="mr-8 text-gray-400">Email:</span>
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    defaultValue={selectedRow?.email}
                    onChange={handleChange}
                  />
                ) : (
                  <span>{selectedRow?.email}</span>
                )}
                <br />

                <span className="mr-6 text-gray-400">Phone:</span>
                {isEditing ? (
                  <input />
                ) : (
                  <span>{selectedRow?.phone_number}</span>
                )}
                <br />
                <span className="mr-10 text-gray-400">Unit:</span>
                {isEditing ? <input /> : <span>{selectedRow?.unit}</span>}
              </div>
              {isEditing && (
                <button
                  className="  bg-green-600 ml-24  text-white mt-4 rounded-md"
                  onClick={handleSave}
                >
                  Save
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalesAllocatedUnit;
