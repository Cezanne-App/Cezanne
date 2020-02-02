import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import BidForm from './bidForm.jsx';
import BiddingChart from './biddingChart.jsx';

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
      <div className='bid-form-info'>
        <p>Base price: $ {bidArtwork.basePrice}</p>
        <p>{highestBid === null || highestBid === undefined? 'No bids for this artwork yet!' : `Highest Bid: $ ${highestBid}`}</p>
        <p className='bid-expiration-date'>The bidding period ends on {bidArtwork.expirationDate}</p>
      </div>
 
      <BiddingChart />
      <BidForm basePrice={bidArtwork.basePrice} artworkId={bidArtwork._id} highestBid={highestBid} setHighestBid={setHighestBid} setArtworks={setArtworks} />
    </Modal >
  );
};

export default BidModal;