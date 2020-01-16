import React, { useState } from 'react';
import Post from './post.jsx';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  return (
    <div>
      {posts.map(post => {
        return <Post />
      })}
    </div>
  );
};

export default Feed;