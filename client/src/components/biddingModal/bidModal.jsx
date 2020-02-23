import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import BidFormContainer from '../../containers/BidModal/bidForm';
import BidChartContainer from '../../containers/BidModal/bidChart';

const BidModal = ({ artwork, setArtworks, modalIsOpen, setModalIsOpen, bids, setBids, emit }) => {
  const [highestBid, setHighestBid] = useState(null);
  if (!artwork) artwork = {};
  useEffect(() => {
    if (artwork._id) {
      setHighestBid(artwork.highestBid);
    }
  }, [artwork]);

  var subtitle;
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
        {<h2 ref={_subtitle => (subtitle = _subtitle)}>{artwork.title}</h2>}
      </div>
      <div className='bid-form-info'>
        <p>Base price: $ {artwork.basePrice}</p>
        <p>{highestBid === null || highestBid === undefined ? 'No bids for this artwork yet!' : `Highest Bid: $ ${highestBid}`}</p>
        <p className='bid-expiration-date'>The bidding period ends on {artwork.expirationDate}</p>
      </div>
 
      <BidChartContainer />
      <BidFormContainer basePrice={artwork.basePrice} artworkId={artwork._id} highestBid={highestBid} setHighestBid={setHighestBid} bids={bids} setBids={setBids} emit={emit} />
    </Modal >
  );
};

export default BidModal;