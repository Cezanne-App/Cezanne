import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import BidForm from './bidForm.jsx'

const BidModal = ({ bidArtwork, setArtworks, modalIsOpen, setModalIsOpen }) => {
  bidArtwork = bidArtwork === null ? {} : bidArtwork 
  var subtitle;
  const handleModalClose = (e) => {
    e.preventDefault();
    setModalIsOpen(false);
  };
  Modal.setAppElement('#app');

  const [highestBid, setHighestBid] = useState(bidArtwork.highestBid);
  useEffect(() => {
    setHighestBid(bidArtwork.highestBid);
  }, [bidArtwork]);
  
  
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
      <span>Base price: ${bidArtwork.basePrice}</span><span>{highestBid === null ? 'No bids for this artwork yet!' : highestBid}</span>
      <span>The bidding period ends on {bidArtwork.expirationDate}</span>
      <BidForm artworkId={bidArtwork._id} highestBid={highestBid} setHighestBid={setHighestBid} setArtworks={setArtworks} />
    </Modal >
  );
};

export default BidModal;