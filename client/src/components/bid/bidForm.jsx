import React, { useState } from 'react';

const BidForm = ({ currentValue }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [bidPrice, setBidPrice] = useState(null);
  const [submitMessage, setSubmitMessage] = useState('x');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bidPrice <= currentValue || bidPrice === null || isNaN(bidPrice) ) {
      setIsInvalid(true);
      setSubmitMessage('Bid is not valid!');
    } else {
      setIsInvalid(false);
      setSubmitMessage('Great! You are now the highest bidder!');
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
        color: 'red'
      }
    } else {
      return {
        visibility: 'visible',
        color: 'green'
      }
    }
  };

  return (
    <div id='bid-form-container'>
      <div id='bid-form-subcontainer'>
        <form id='bidForm' onSubmit={(e) => handleSubmit(e)}>
          <input type='text' placeholder='Enter your bid' onChange={({target}) => setBidPrice(parseInt(target.value))}/>
        </form>
        <button form='bidForm'>Bid</button>
      </div>
      <div style={getSubmitMessageStyle()}>{submitMessage}</div>
    </div>
  );
};

export default BidForm;