import React from "react";
import { Card } from 'semantic-ui-react'


const PostCard = ({post}) => {
    
  console.log(post)
    
    return(
    
        <Card>
        <Card.Content>
          {/* <Image
            floated='right'
            size='mini'
            src='/images/avatar/large/steve.jpg'
          /> */}
          <Card.Header>{post.username}</Card.Header>
          <Card.Meta>{post.createdAt}</Card.Meta>
          <Card.Description>
           {post.postText} 
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            {/* <Button basic color='green'>
              Approve
            </Button>
            <Button basic color='red'>
              Decline
            </Button> */}
          </div>
          {post.username}
          {post.createdAt}
          {post.postText}
        </Card.Content>
      </Card>
    )
}  
    export default PostCard;
