import React from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>There is no Posts Yet</h3>;
  }

  return (
    <div>
      
    </div>
  );
};

export default PostList;
