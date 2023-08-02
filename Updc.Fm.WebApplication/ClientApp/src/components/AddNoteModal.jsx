import React from 'react';
import Modal from 'react-modal';
import './ModalForm.css';

function AddNoteModal({
  isOpen,
  closeModal,
  viewNote,
  isEditMode,
  handleChange,
  handleSubmit,
  handleEditNote,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="AddNoteModal"
      className="addnote-modal py-5 px-8"
      overlayClassName="custom-modal-overlay"
    >
      <span className="text-2xl font-bold mb-5">
        {isEditMode ? 'Edit Inspection Note' : 'Add Inspection Note'}
      </span>
      {isEditMode ? (
        <div className=" flex flex-col space-y-10">
          <div className="flex sm:flex-col md:flex-row">
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full text-sm rounded-lg border border-gray-400 focus:ring-blue-500 focus:border-blue-500"
              defaultValue={viewNote}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="py-1 px-3 rounded-sm text-base font-normal text-white items-center justify-center bg-green-600 hover:bg-green-500 shadow-sm shadow-[#a73439]/25"
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <p>{viewNote}</p>
          <button
            type="button"
            onClick={handleEditNote}
            className="py-1 px-3 rounded-sm text-base font-normal text-white items-center justify-center bg-green-600 hover:bg-green-500 shadow-sm shadow-[#a73439]/25"
          >
            Edit
          </button>
        </div>
      )}
    </Modal>
  );
}

export default AddNoteModal;
