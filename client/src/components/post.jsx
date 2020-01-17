import React, { useState } from 'react';
import moment from 'moment';

const Post = ({ artWork, setBidArtwork, setModalIsOpen }) => {
  const handleBidClick = () => {
    setModalIsOpen(true);
    setBidArtwork(artWork);
  }
  return (
    <div className='post'>
      <div className='post-user-header'>{artWork.author}</div>
      <div className='post-img-container'><img className='post-image' src={artWork.image} height='100px' width='100px'/></div>
      <div className='post-info-container'>
        <div className='post-info'>
          <h4>{artWork.title}</h4>
          <span>{`${artWork.technique}, ${artWork.height} x ${artWork.width}`}</span>
          <span className='post-prices'>{`Base: $${artWork.basePrice}${artWork.highestBid === null ? '' : ` Highest: $${artWork.highestBid}`}`}</span>
        </div>
        <div className='post-bid-button'><button onClick={handleBidClick}><img className='post-icon' src='./images/post_icon.png' height='30px' width='30px'/></button></div>
      </div>
    </div>
  );
};

export default Post;