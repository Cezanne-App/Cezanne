import React from 'react';
import moment from 'moment';
import PostContainer from '../../containers/Post/index';

const Feed = ({ artworks, setModalIsOpen, setImageModalIsOpen }) => {
  return (
    <div className='feed'>
      {artworks.map(artwork => {
        artwork.expirationDate = moment(artwork.expirationDate).format('LL');
        return <PostContainer key={artwork._id} artwork={artwork} setModalIsOpen={setModalIsOpen} setImageModalIsOpen={setImageModalIsOpen}/>
      })}
    </div>
  );
};

export default Feed;