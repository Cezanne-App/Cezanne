import React, { useState } from 'react';
import { getPosts } from '../../../helpers/index.js';
import { updateBid } from '../../../helpers/index.js';

const BidForm = ({ artworkId, highestBid, setHighestBid, setArtworks }) => {
  const [bidPrice, setBidPrice] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('x');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bidPrice <= highestBid || bidPrice === null || isNaN(bidPrice) ) {
      setIsInvalid(true);
      setSubmitMessage('Bid is not valid!');
    } else {
      updateBid(artworkId, bidPrice)
      .then(() => getPosts())
      .then(({data}) => {
        setArtworks(data);
        setHighestBid(bidPrice);
        setIsInvalid(false);
        setSubmitMessage('You are now the highest bidder!');
      })
      .catch(e => {
        setIsInvalid(true);
        setSubmitMessage('Could not save the bid. Try again!');
        console.error(e);
      });
    }
  };

  const getSubmitMessageStyle = () => {
    if (submitMessage === 'x') {
      return {
        visibility: 'hidden'
      }
    } else if (isInvalid === true) {
      return {
        visibility: 'visible',
      }
    } else {
      return {
        visibility: 'visible',
      }
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