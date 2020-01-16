import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Post from './post.jsx';
import { getPosts } from '../../helpers/index.js';

const Feed = ({ setBidArtwork, setModalIsOpen }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({data}) => setPosts(data)).catch(e => console.error(e));
  }, [])
  
  return (
    <div className='feed'>
      {posts.map(post => {
        post.expirationDate = moment(post.expirationDate).format('ll');
        return <Post key={post._id} artWork={post} setBidArtwork={setBidArtwork} setModalIsOpen={setModalIsOpen}/>
      })}
    </div>
  );
};

export default Feed;