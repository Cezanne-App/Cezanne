import React from 'react';
import Modal from 'react-modal';
import BidForm from './bidForm.jsx'

const BidModal = ({ bidArtwork , modalIsOpen, setModalIsOpen }) => {
  bidArtwork = bidArtwork === null ? {} : bidArtwork 
  var subtitle;

  const handleModalClose = (e) => {
    e.preventDefault();
    setModalIsOpen(false);
  };

  Modal.setAppElement('#app');

  const setHighestBid = () => {
    if (bidArtwork.highestBid === null) {
      return 'No bids for this artwork yet!'
    } else {
      return `$${bidArtwork.highestBid}`;
    }
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={(e) => handleModalClose(e)}
      id="bidModal"
      className="Modal" overlayClassName="ModalOverlay"
      contentLabel="Example Modal">
      <div className="modal-header">
        {<h2 ref={_subtitle => (subtitle = _subtitle)}>{bidArtwork.title}</h2>}
      </div>
      <span>Base price: ${bidArtwork.basePrice}</span><span>{setHighestBid()}</span>
      <span>The bidding period ends on {bidArtwork.expirationDate}</span>
      <BidForm />
    </Modal >
  );
};

export default BidModal;