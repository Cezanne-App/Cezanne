import React from 'react';
import PostContainer from '../../containers/Post/index';

const Feed = ({ artworks, setModalIsOpen, setImageModalIsOpen }) => {
  return (
    <div className='feed'>
      {artworks.map(artwork => {
        return <PostContainer key={artwork._id} artwork={artwork} setModalIsOpen={setModalIsOpen} setImageModalIsOpen={setImageModalIsOpen}/>
      })}
    </div>
  );
};

export default Feed;