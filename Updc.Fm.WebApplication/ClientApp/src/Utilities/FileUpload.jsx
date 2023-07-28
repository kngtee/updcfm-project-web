import React, { useState } from 'react';
import { MdUploadFile } from 'react-icons/md';
import '../components/ModalForm.css';
import Modal from 'react-modal';

export default function FileUpload() {
  const [file, setFile] = useState(null);
  const [previewSrc, setPreviewSrc] = useState('');
  const [fileType, setFileType] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setPreviewSrc('');
    setFileType('');
  };

  function handleFile(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      const reader = new FileReader();
      reader.onloadend = () => {
        if (selectedFile.type.includes('image')) {
          setPreviewSrc(reader.result);
          setFileType('image');
        } else if (selectedFile.type.includes('pdf')) {
          setPreviewSrc(reader.result);
          setFileType('pdf');
        } else {
          setPreviewSrc('');
          setFileType('');
          alert(
            'Unsupported file format. Please upload an image or a PDF doc.',
          );
        }
        openModal();
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  function handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    fetch('url', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        console.log('succes', result);
      })
      .catch((error) => {
        // console.error('Error:', error);
      });
    console.log('File to upload:', file);
    closeModal();
  }
  return (
    <div>
      <label
        id="inspection_file"
        className="inline-flex items-center font-medium text-red-600 cursor-pointer"
      >
        <MdUploadFile className="mr-1" /> Upload Report
        <input
          id="inspection_file"
          type="file"
          className="hidden"
          onChange={handleFile}
        />
      </label>

      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
        className="custom-modal py-5 px-8"
        overlayClassName="custom-modal-overlay"
      >
        <form onSubmit={handleUpload}>
          <div className="flex flex-col items-center justify-between">
            {/* File Display */}
            <div>
              {fileType === 'image' && previewSrc && (
                <img
                  src={previewSrc}
                  alt="Preview"
                  className="max-w-60 max-h-60 mx-auto mb-4"
                />
              )}
              {fileType === 'pdf' && previewSrc && (
                <iframe
                  src={previewSrc}
                  title="PDF Preview"
                  className="max-w-60 h-60 mx-auto mb-6 mt-2"
                />
              )}
              {!previewSrc && (
                <span className=" font-semibold text-2xl text-gray-400">
                  No Preview
                </span>
              )}
            </div>
            {/* Send n Cancel Btn */}
            <div className="flex flex-col">
              <button
                type="submit"
                className=" text-white font-semibold text-sm rounded-sm mb-2 py-2 px-4 w-80 bg-green-600"
              >
                Submit
              </button>
              <button
                type="button"
                className="text-red-600 font-semibold text-sm underline"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
}
