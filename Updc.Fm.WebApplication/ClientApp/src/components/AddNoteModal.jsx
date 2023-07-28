import React, { useState } from 'react';
import Modal from 'react-modal';
import { MdNoteAdd, MdRemoveRedEye } from 'react-icons/md';
import './ModalForm.css'; // CSS file for modal styles
import { PostRequest } from '../Auth/hooks/useGet';
import { errorMessage, successMessage } from '../toast-message/toastMessage';
import { useParams } from 'react-router-dom';

function AddNote({ inspectionId, addRow, note }) {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    note: '',
  });
  const [viewNote, setViewNote] = useState('');
  const [isEditMode, setIsEditMode] = useState(note === 'n/a' ? false : true);

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

  const handleViewNote = () => {
    setViewNote(formData.note);
    setIsEditMode(false);
    setIsOpen(true);
  };

  const handleEditNote = () => {
    setIsEditMode(true);
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
      setViewNote(formData.note);
      setIsEditMode(false);
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
      {/* Add/View Note Button */}
      {note !== 'n/a' ? (
        <button
          onClick={handleViewNote}
          className="inline-flex items-center font-medium text-red-600 underline"
          type="button"
        >
          <MdRemoveRedEye className="mr-1" /> View Note
        </button>
      ) : (
        <button
          onClick={openModal}
          className="inline-flex items-center font-medium text-red-600 underline"
          type="button"
        >
          <MdNoteAdd className="mr-1" /> Add Note
        </button>
      )}

      {/* View Note Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="AddNoteModal"
        className="addnote-modal py-5 px-8"
        overlayClassName="custom-modal-overlay"
      >
        <span className="text-2xl font-bold mb-5">
          {note === 'n/a' ? (
            <>{isEditMode ? 'Add Inspection Note' : <div>Add Inspection Note</div>}</>
          ) : (
            <>{isEditMode ? 'Edit Inspection Note' : <div>Edit Inspection Note</div>}</>
          )}
        </span>
        {isEditMode ? (
          <div className="flex flex-col space-y-10">
            <div className="flex sm:flex-col md:flex-row">
              <textarea
                id="message"
                rows="6"
                class="block p-2.5 w-full text-sm rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500"
                defaultValue={isEditMode ? viewNote : formData.name}
                // readOnly={!isEditMode}
                onChange={handleChange}
              ></textarea>
            </div>

            {isEditMode ? (
              <button
                type="button"
                onClick={handleSubmit}
                className="py-1 px-3 rounded-sm text-md font-normal text-white items-center justify-center bg-green-600 hover:bg-green-500 shadow-sm shadow-[#a73439]/25"
              >
                Save
              </button>
            ) : (
              <button
                type="button"
                onClick={handleEditNote}
                className="py-1 px-3 rounded-sm text-md font-normal text-white items-center justify-center bg-green-600 hover:bg-green-500 shadow-sm shadow-[#a73439]/25"
              >
                Edit
              </button>
            )}
          </div>
        ) : (
          <p>{note}</p>
        )}
      </Modal>
    </div>
  );
}

export default AddNote;
