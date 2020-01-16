import React from 'react';
import Modal from 'react-modal';

const BidModal = ({ modalIsOpen, setModalIsOpen }) => {

  var subtitle;
  const header = () => {
    return (
      <div>
        <h2>Comparison</h2>
      </div>
    );
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    setModalIsOpen(false);
  };

  Modal.setAppElement('#app');

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={(e) => handleModalClose(e)}
      id="bidModal"
      className="Modal" overlayClassName="ModalOverlay"
      contentLabel="Example Modal">
      <div className="modal-header">
        {<h2 ref={_subtitle => (subtitle = _subtitle)}>Comparison</h2>}
        <button onClick={(e) => handleModalClose(e)}>
          x
        </button>
      </div>
    </Modal >
  );
};

export default BidModal;