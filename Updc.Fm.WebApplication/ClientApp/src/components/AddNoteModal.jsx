import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdNoteAdd } from 'react-icons/md';
import './ModalForm.css'; // CSS file for modal styles
import { PostRequest } from '../Auth/hooks/useGet';
import { errorMessage, successMessage } from '../toast-message/toastMessage';
import { useParams } from 'react-router-dom';

function AddNote({ inspectionId, addRow }) {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    note: '',
  });
  const [updateRow, setUpdateRow] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    // alert(id);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleChange = (e) => {
    setFormData({ note: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { status, data, error } = await PostRequest(
      `/api/interventionjobs/${id}/inspection/${inspectionId}`,
      {
        shortDescription: formData.note,
      },
    );
    if (status === 200) {
      addRow();
      successMessage({
        title: 'Inspection Creation.',
        message: 'inspection created successfully.',
      });
    } else {
      errorMessage({
        title: 'Something went wrong',
        message: error,
      });
      console.log(data);
    }
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
