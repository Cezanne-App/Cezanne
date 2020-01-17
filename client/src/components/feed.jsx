import React from 'react';
import moment from 'moment';
import Post from './post.jsx';

const Feed = ({ artworks, setBidArtwork, setModalIsOpen }) => {

  return (
    <div className='feed'>
      {artworks.map(artwork => {
        artwork.expirationDate = moment(artwork.expirationDate).format('ll');
        return <Post key={artwork._id} artWork={artwork} setBidArtwork={setBidArtwork} setModalIsOpen={setModalIsOpen}/>
      })}
    </div>
  );
};

export default Feed;