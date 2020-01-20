import React from 'react';
import moment from 'moment';
import Post from './post/post.jsx';

const Feed = ({
  artworks, 
  setArtwork, 
  setModalIsOpen, 
  setImageModalIsOpen }) => {

  return (
    <div className='feed'>
      {artworks.map(artwork => {
        artwork.expirationDate = moment(artwork.expirationDate).format('ll');
        return <Post key={artwork._id} artWork={artwork} setArtwork={setArtwork} setModalIsOpen={setModalIsOpen} setImageModalIsOpen={setImageModalIsOpen}/>
      })}
    </div>
  );
};

export default Feed;