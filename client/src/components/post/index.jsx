import React, { useState } from 'react';
import { getAllBids } from '../../helpers/index';

const Post = ({ artwork, setArtwork, setBids, setModalIsOpen, setImageModalIsOpen }) => {

  const handleBidClick = () => {
    setArtwork(artwork);
    getAllBids(artwork._id)
      .then(({ data }) => setBids(data))
      .catch(err => console.error(err))
    setModalIsOpen(true);
  };

  const handleImageClick = () => {
    setArtwork(artwork);
    setImageModalIsOpen(true);
  };

  return (
    <div className='post'>
      <div className='post-user-header'>{artwork.author}</div>
      <div className='post-img-container' onClick={handleImageClick}><img className='post-image' src={artwork.image} height='100px' width='100px'/></div>
      <div className='post-info-container'>
        <div className='post-info'>
          <h4>{artwork.title}</h4>
          <span>{`${artwork.technique}, ${artwork.height} x ${artwork.width}`}</span>
        </div>
        <div className='post-bid-button'>
          <button onClick={handleBidClick}><img className='post-icon' src='./images/post_icon.png' height='30px' width='30px'/></button>
          <div className='post-prices'>
            <span>{`${artwork.highestBid === null || artwork.highestBid === undefined? 'No bids yet!' : `Highest: $ ${artwork.highestBid}`}`}</span>
            <span>{`Base: $ ${artwork.basePrice}`}</span>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Post;