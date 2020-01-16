import React, { useState, useEffect } from 'react';
import Post from './post.jsx';
import { getPosts } from '../../helpers/index.js';

const Feed = ({ setModalIsOpen }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({data}) => setPosts(data)).catch(e => console.error(e));
  }, [])
  
  return (
    <div className='feed'>
      {posts.map(post => {
        return <Post key={post._id} artWork={post} setModalIsOpen={setModalIsOpen}/>
      })}
    </div>
  );
};

export default Feed;