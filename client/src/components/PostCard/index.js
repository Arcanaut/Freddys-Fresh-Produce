import React from "react";
import { Card } from 'semantic-ui-react';
import { Image } from "../sample-img.jpeg";


const PostCard = ({post}) => {
    
  console.log(post)
    
    return(
    
        <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='../sample-img.jpeg'
          />
          <Card.Header>{post.username}</Card.Header>
          <Card.Meta>{post.createdAt}</Card.Meta>
          <Card.Description>
           {post.postText} 
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            {/* <Button basic onclick={handlereaction} color='green'>
              Add Reaction
            </Button>
            <Button basic onClick={deletePost} color='red'>
              Delete Post
            </Button> */}
          </div>
        </Card.Content>
      </Card>
    )
}  
    export default PostCard;
