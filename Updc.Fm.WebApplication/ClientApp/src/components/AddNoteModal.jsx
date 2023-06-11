import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdNoteAdd } from 'react-icons/md';
import './ModalForm.css'; // CSS file for modal styles

function AddNote() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    note: '',
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission here
    closeModal();
  };

  return (
    <div>
      {/* Modal Button */}
      <button
        onClick={openModal}
        className="inline-flex items-center font-medium text-red-600 underline"
        type="button"
      >
        <MdNoteAdd className="mr-1" /> Add Note
      </button>

      {/* Modal Content */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="AddNoteModal"
        className="addnote-modal py-5 px-8"
        overlayClassName="custom-modal-overlay"
      >
        <h2 className="text-2xl font-bold mb-5">Add Inspection Note</h2>

        <form className="flex flex-col space-y-10" onSubmit={handleSubmit}>
          <div className="flex sm:flex-col md:flex-row">
            <textarea
              id="message"
              rows="6"
              class="block p-2.5 w-full text-sm rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your inspection note here..."
              value={formData.name}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="py-1 px-3 rounded-sm text-md font-normal text-white items-center justify-center bg-green-600 hover:bg-green-500 shadow-sm shadow-[#a73439]/25"
          >
            Add
          </button>
        </form>
      </Modal>
    </div>
  );
}

export default AddNote;
