import React from 'react';
import { Link } from 'react-router-dom';

import { Image, Item } from 'semantic-ui-react'

const paragraph = <Image src='/images/wireframe/short-paragraph.png' />


const PostList = ({ posts, title }) => {
  if (!posts.length) {
    return <h3>No Posts Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {posts &&
        posts.map(post => (
          <div key={post._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${post.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {post.username}
              </Link>{' '}
              post on {post.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/post/${post._id}`}>
                <p>{post.postText}</p>
                <p className="mb-0">
                  Reactions: {post.reactionCount} || Click to{' '}
                  {post.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}

<Item.Group>
    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header>Arrowhead Valley Camp</Item.Header>
        <Item.Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Item.Meta>
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header>Buck's Homebrew Stayaway</Item.Header>
        <Item.Meta content='$1000 2 Weeks' />
        <Item.Description>{paragraph}</Item.Description>
      </Item.Content>
    </Item>

    <Item>
      <Item.Image size='tiny' src='/images/wireframe/image.png' />
      <Item.Content header='Arrowhead Valley Camp' meta='$1200 1 Month' />
    </Item>
  </Item.Group>
    </div>

    
  );
};


export default PostList;