import React, { useState } from 'react';
import { updateBid, getArtworks, saveBid } from '../../helpers/index.js';
import { sendBid } from '../../helpers/sockets';

const BidForm = ({ artworkId, basePrice, highestBid, setHighestBid, addBid }) => {
  const [bidPrice, setBidPrice] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('null');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bidPrice <= highestBid || bidPrice === null || isNaN(bidPrice) || bidPrice < basePrice) {
      setIsInvalid(true);
      setSubmitMessage('Bid is not valid!');
    } else {
      saveBid({
        artworkId: artworkId,
        bidderId: '1',
        ownerId: '1',
        value: bidPrice
      })
      .then(() => {
        updateBid(artworkId, bidPrice);
        setHighestBid(bidPrice);
        const date = Date.now();
        const bid = {
          artworkId,
          value: bidPrice,
          date
        };
        addBid(bid);
        sendBid(bid);
        setIsInvalid(false);
        setSubmitMessage('You are now the highest bidder!');
      })
      .catch(e => {
        setIsInvalid(true);
        setSubmitMessage('Could not save the bid. Try again!');
        throw new Error(e);
      });
    }
  };

  const getSubmitMessageStyle = () => {
    if (submitMessage === 'null') {
      return { visibility: 'hidden' }
    } else {
      return { visibility: 'visible'}
    }
  };

  return (
    <div id='bid-form-container'>
      <div id='bid-form-subcontainer'>
        <div id='bid-form-input'>
          <div id='bid-form-input-box'>
            <form id='bidForm' onSubmit={(e) => handleSubmit(e)}>
              <input type='text' placeholder='Enter your bid' onChange={({ target }) => setBidPrice(parseInt(target.value))}/>
            </form>
            <button form='bidForm'>Bid!</button>
          </div>
          <div className='form-submit-message' style={getSubmitMessageStyle()}>{submitMessage}</div>
        </div>
      </div>
    </div>
  );
};

export default BidForm;