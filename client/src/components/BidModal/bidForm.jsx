import React, { useState } from 'react';
import { updateBid, saveBid } from '../../helpers/index';
import { sendBid } from '../../helpers/sockets';

const BidForm = ({ artworkId, basePrice, highestBid, setHighestBid, addBid }) => {
  const [bidPrice, setBidPrice] = useState(null);
  const [isInvalid, setIsInvalid] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('null');

  const handleSubmit = event => {
    event.preventDefault();
    if (
      bidPrice <= highestBid ||
      bidPrice < basePrice ||
      bidPrice === null ||
      typeof bidPrice !== 'number'
    ) {
      setIsInvalid(true);
      setSubmitMessage('Bid is not valid!');
    } else {
      saveBid({
        artworkId,
        bidderId: '1',
        ownerId: '1',
        value: bidPrice,
      })
        .then(() => {
          updateBid(artworkId, bidPrice);
          setHighestBid(bidPrice);
          const date = Date.now();
          const bid = {
            artworkId,
            value: bidPrice,
            date,
          };
          addBid(bid);
          sendBid(bid);
          setIsInvalid(false);
          setSubmitMessage('You are now the highest bidder!');
        })
        .catch(err => {
          setIsInvalid(true);
          setSubmitMessage('Could not save the bid. Try again!');
          throw new Error(err);
        });
    }
  };

  const getSubmitMessageStyle = () => {
    if (submitMessage === 'null') {
      return { visibility: 'hidden' };
    }
    return { visibility: 'visible' };
  };

  return (
    <div id="bid-form-container">
      <div id="bid-form-subcontainer">
        <div id="bid-form-input">
          <div id="bid-form-input-box">
            <form id="bidForm" onSubmit={e => handleSubmit(e)}>
              <input
                type="text"
                placeholder="Enter your bid"
                onChange={({ target }) => setBidPrice(parseInt(target.value, 10))}
              />
            </form>
            <button type="submit" form="bidForm">
              Bid!
            </button>
          </div>
          <div className="form-submit-message" style={getSubmitMessageStyle()}>
            {submitMessage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BidForm;
