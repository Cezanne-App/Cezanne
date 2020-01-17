import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import AddForm from './addForm.jsx';

const AddModal = ({ setArtworks, addModalIsOpen, setAddModalIsOpen }) => {
  var subtitle;
  const handleModalClose = (e) => {
    e.preventDefault();
    setAddModalIsOpen(false);
  };

  Modal.setAppElement('#app');

  return (
    <Modal
      isOpen={addModalIsOpen}
      onRequestClose={(e) => handleModalClose(e)}
      id="addModal"
      className="Modal" overlayClassName="ModalOverlay"
      contentLabel="Example Modal">
      <div className="modal-header">
        {<h2 ref={_subtitle => (subtitle = _subtitle)}>Share your art!</h2>}
      </div>
      <AddForm setArtworks={setArtworks}/>
    </Modal >
  );
};

export default AddModal;