import React, { useState } from 'react';
import { updateBid, getArtworks, saveBid } from '../../../helpers/index.js';

const BidForm = ({ artworkId, basePrice, highestBid, setHighestBid, bids, setBids, emit }) => {
  const [bidPrice, setBidPrice] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('null');

  // const sendBids = (value, date) => {
  //   // socket.emit('bid', {
  //   //   artworkId: artworkId,
  //   //   value: value,
  //   //   date: date
  //   // });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bidPrice <= highestBid || bidPrice === null || isNaN(bidPrice) || bidPrice < basePrice) {
      setIsInvalid(true);
      setSubmitMessage('Bid is not valid!');
    } else {
      setIsInvalid(false);
      saveBid({
        artworkId: artworkId,
        bidderId: '1',
        ownerId: '1',
        value: bidPrice
      })
      .then(() => {
        let newBids = {...bids};
        const date = Date.now();
        newBids.values.push(bidPrice);
        newBids.dates.push(date);
        setBids(newBids);
        emit.bid(artworkId, bidPrice, date)
        setHighestBid(bidPrice);
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
        <div id='bid-form-input-box'>
        <form id='bidForm' onSubmit={(e) => handleSubmit(e)}>
          <input type='text' placeholder='Enter your bid' onChange={({target}) => setBidPrice(parseInt(target.value))}/>
        </form>
        <button form='bidForm'>Bid!</button>
        </div>
        <div className='form-submit-message' style={getSubmitMessageStyle()}>{submitMessage}</div>
      </div>
    </div>
  );
};

export default BidForm;