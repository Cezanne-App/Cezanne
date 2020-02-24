import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import moment from 'moment';
import BidFormContainer from '../../containers/BidModal/bidForm';
import BidChartContainer from '../../containers/BidModal/bidChart';

const BidModal = ({ artwork, highestBid, modalIsOpen, setModalIsOpen }) => {
  const expirationDate = moment(artwork.expirationDate).format('LL');

  var subtitle;
  const handleModalClose = () => {
    setModalIsOpen(false);
  };

  Modal.setAppElement('#app');
    
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleModalClose}
      id='bid-modal'
      className="Modal" 
      overlayClassName="ModalOverlay"
      contentLabel="bidding"
      >
      <div id='bidding-modal-wrapper'>
        <button className='close-modal-button' onClick={handleModalClose}>&times;</button>
        <div id='bidding-modal-container'>
          <div className="modal-header">
            {<h2 ref={_subtitle => (subtitle = _subtitle)}>{artwork.title}</h2>}
          </div>
          <div className='bid-form-info'>
            <p>Base price: $ {artwork.basePrice}</p>
            <p>{highestBid === null || highestBid === undefined ? 'No bids for this artwork yet!' : `Highest Bid: $ ${highestBid}`}</p>
            <p className='bid-expiration-date'>The bidding period ends on {expirationDate}</p>
          </div> 
          <BidChartContainer />
          <BidFormContainer basePrice={artwork.basePrice} artworkId={artwork._id} />
        </div>
      </div>
    </Modal >
  );
};

export default BidModal;