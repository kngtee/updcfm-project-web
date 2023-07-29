import React, { useState } from 'react';
// import Modal from 'react-modal';
import { MdNoteAdd, MdRemoveRedEye } from 'react-icons/md';
// import './ModalForm.css';
import { PostRequest } from '../Auth/hooks/useGet';
// import { errorMessage, successMessage } from '../toast-message/toastMessage';
import { useParams } from 'react-router-dom';
import AddNoteModal from './AddNoteModal';

function AddNote({ inspectionId, addRow, note }) {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState('');
  const [viewNote, setViewNote] = useState('');
  const [isEditMode, setIsEditMode] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleViewNote = () => {
    setFormData(viewNote);
    setIsEditMode(false);
    openModal();
  };

  const handleEditNote = () => {
    setIsEditMode(true);
  };

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const { status, data } = await PostRequest(
        `/api/interventionjobs/${id}/inspection/${inspectionId}`,
        {
          shortDescription: formData,
        },
      );

      if (status === 200) {
        addRow();
        setViewNote(formData);
        setIsEditMode(false);
        closeModal();
      } else {
        console.error(data);
      }
    } catch (error) {
      console.error('Something went wrong:', error);
    }
  };

  return (
    <div>
      {note !== 'n/a' ? (
        <button
          type="button"
          onClick={handleViewNote}
          className="inline-flex items-center font-medium text-red-600 underline"
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

      <AddNoteModal
        isOpen={isOpen}
        closeModal={closeModal}
        formData={formData}
        viewNote={note}
        isEditMode={isEditMode}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleEditNote={handleEditNote}
      />
    </div>
  );
}

export default AddNote;
