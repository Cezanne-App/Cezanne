import React from 'react';
import Modal from 'react-modal';
import AddForm from './addForm';

const AddModal = ({ setArtworks, addModalIsOpen, setAddModalIsOpen }) => {
  const handleModalClose = e => {
    e.preventDefault();
    setAddModalIsOpen(false);
  };

  Modal.setAppElement('#app');

  return (
    <Modal
      isOpen={addModalIsOpen}
      onRequestClose={e => handleModalClose(e)}
      id="addModal"
      className="Modal"
      overlayClassName="ModalOverlay"
      contentLabel="Example Modal"
    >
      <div className="modal-header">
        <h2>Share your art!</h2>
      </div>
      <AddForm setArtworks={setArtworks} />
    </Modal>
  );
};

export default AddModal;
