import React, { useState } from 'react';
import Post from './post.jsx';

const Feed = () => {
  const [posts, setPosts] = useState([1,2,3]);
  const maxPosts = 10;

  return (
    <div>
      {posts.map(post => {
        return <Post />
      })}
    </div>
  );
};

export default Feed;