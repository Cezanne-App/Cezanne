import React, { useState } from 'react';

const BidForm = ({ currentValue }) => {
  const [isInvalid, setIsInvalid] = useState(false);
  const [bidPrice, setBidPrice] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bidPrice <= currentValue || bidPrice === null || typeof bidPrice !== 'number' ) {
      setIsInvalid(true);
    } else {
      //submit
    }
  };
  return (
    <div id='bid-form-container'>
      <form id='bidForm' onSubmit={(e) => handleSubmit(e)}>
        <input type='text' placeholder='Enter your bid'/>
      </form>
      <button form='bidForm'>Bid</button>
    </div>
  );
};

export default BidForm;