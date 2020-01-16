import React from 'react';
import Modal from 'react-modal';

const BidModal = ({ bidArtwork , modalIsOpen, setModalIsOpen }) => {

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
        {<h2 ref={_subtitle => (subtitle = _subtitle)}>{bidArtwork === null ? '' : bidArtwork.title}</h2>}
      </div>
    </Modal >
  );
};

export default BidModal;