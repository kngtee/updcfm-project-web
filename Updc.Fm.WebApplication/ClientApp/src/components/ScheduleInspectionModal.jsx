import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdAdd } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Datepicker default styles
import './ModalForm.css'; // CSS file for modal styles

// Modal.setAppElement('#root'); // The root element of the app

function ModalForm({ addRow }) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '', // Inspected by
    selectedDate: null, // New state for the selected date
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDate: date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      addRow(formData);
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
          <div className="flex sm:flex-col md:flex-row">
            <label>
              Date:
              <DatePicker
                className="border border-gray-400 rounded-md p-1.5"
                selected={formData.selectedDate}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                placeholderText="Pick a date"
              />
              {formErrors.selectedDate && (<p className='text-red-500'>{formErrors.selectedDate}</p>)}
            </label>

            <label>
              <p>Inspected by:</p>
              <input
                type="text"
                name="name"
                className="border border-gray-400 rounded-md p-1.5"
                placeholder="Enter a name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (<p className='text-red-500'>{formErrors.name}</p>)}
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
