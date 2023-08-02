import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdAdd } from 'react-icons/md';
import 'react-datepicker/dist/react-datepicker.css';
import './ModalForm.css';
import { PostRequest } from '../Auth/hooks/useGet';
import { useParams } from 'react-router-dom';
import { errorMessage, successMessage } from '../toast-message/toastMessage';
import { formatDate } from '../Services/Converter';

function ModalForm({ addRow }) {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    selectedDate: null,
  });

  const [formErrors, setFormErrors] = useState({});

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setFormData({ name: '', selectedDate: null });
    setFormErrors({});
  };

  const handleChange = (e) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const handleDateChange = (e) => {
    setFormData({ ...formData, selectedDate: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    addRow();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      const { status, error } = await PostRequest(
        `/api/interventionjobs/${id}/inspection`,
        {
          inspectorName: formData.name,
          createdBy: formData.name,
          dateOfInspection: formatDate(formData.selectedDate),
        },
      );
      if (status === 200) {
        successMessage({
          title: 'Inspection Creation.',
          message: 'inspection created successfully.',
        });
      } else {
        errorMessage({
          title: 'Something went wrong',
          message: error,
        });
      }
      closeModal();
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.selectedDate) {
      errors.selectedDate = 'Please select a date.';
    }
    if (!data.name.trim()) {
      errors.name = 'Please enter a name.';
    }
    return errors;
  };

  const currentDate = new Date().toISOString().split('T')[0];

  return (
    <div>
      {/* Modal Button */}
      <button
        onClick={openModal}
        className="flex py-1 px-3 rounded-sm text-md font-normal text-white items-center justify-center bg-green-600 shadow-sm shadow-[#a73439]/25"
        type="button"
      >
        <MdAdd className="mr-2" />
        Schedule
      </button>

      {/* Modal Contents */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="custom-modal py-5 px-8"
        overlayClassName="custom-modal-overlay"
      >
        <h2 className="text-2xl font-bold mb-5">Schedule an Inspection</h2>

        <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
          <div className="flex sm:flex-col md:flex-row justify-between">
            <label className="flex flex-col">
              <span>Date:</span>
              <input
                type="date"
                min={currentDate}
                className="border border-gray-400 rounded-md p-1.5 w-52"
                onChange={handleDateChange}
              />
              {formErrors.selectedDate && (
                <p className="text-red-500">{formErrors.selectedDate}</p>
              )}
            </label>

            <label>
              <span className="flex flex-col">Inspected by:</span>
              <input
                type="text"
                className="border border-gray-400 rounded-md p-1.5 w-52"
                placeholder="Enter a name"
                onChange={handleChange}
              />
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
            </label>
          </div>

          <button
            type="submit"
            className="py-1 px-3 rounded-sm text-md font-normal text-white items-center justify-center bg-green-600 hover:bg-green-500 shadow-sm shadow-[#a73439]/25"
          >
            Submit
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default ModalForm;
