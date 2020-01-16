import React, { useState } from 'react';
import moment from 'moment';

const Post = ({ artWork }) => {
  return (
    <div className='post'>
      <article>
      <header>{artWork.author}</header>
      <div>
        <img src={artWork.image} height='100px' width='100px'/>
      </div>
      <div>
        <h4>{artWork.title}</h4>
        <span>{artWork.technique} | </span><span>{artWork.height} x {artWork.width}</span>
      </div>
      <div>
        <span>${artWork.basePrice}</span><span>{artWork.highestBid}</span><span>{moment(artWork.expirationDate).format('ll')}</span>
      </div>
      </article>
    </div>
  );
};

export default Post;