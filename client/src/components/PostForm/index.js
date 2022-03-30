import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_POST } from '../../utils/mutations';
import { QUERY_POSTS, QUERY_ME } from '../../utils/queries';
import PostCard from '../PostCard';
import { Card } from 'semantic-ui-react'




const PostForm = () => {
    const [postText, setText] = useState('');
    const [characterCount, setCharacterCount] = useState(0);
    const[previousPost,setPreviousPost] = useState([])

    const [addPost, { error }] = useMutation(ADD_POST, {
        update(cache, { data: { addPost } }) {
            try {
                // update post array's cache
                // could potentially not exist yet, so wrap in a try/catch
                const { posts } = cache.readQuery({ query: QUERY_POSTS });
                cache.writeQuery({
                    query: QUERY_POSTS,
                    data: { posts: [addPost, ...posts] },
                });
            } catch (e) {
                console.error(e,"Error");
            }

            // update me object's cache
            const { me } = cache.readQuery({ query: QUERY_ME });
            cache.writeQuery({
                query: QUERY_ME,
                data: { me: { ...me, posts: [...me.posts, addPost] } },
            });
            console.log("Me",me.posts)
            setPreviousPost(me.posts)
        },
    });

    // update state based on form input changes
    const handleChange = (event) => {
        if (event.target.value.length <= 300) {
            setText(event.target.value);
            setCharacterCount(event.target.value.length);
        }
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(postText);
            await addPost({
                variables: { postText },
            });

            // clear form value
            setText('');
            setCharacterCount(0);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <p
                className={`m-0 ${characterCount === 300 || error ? 'text-error' : ''}`}
            >
                Character Count: {characterCount}/300
                {error && <span className="ml-2">Something went wrong...</span>}
            </p>
            <form
                className="flex-row justify-center justify-space-between-md align-stretch"
                onSubmit={handleFormSubmit}
            >
                <textarea
                    placeholder="there will be something here u can input text and insert photo"
                    value={postText}
                    className="form-input col-12 col-md-9"
                    onChange={handleChange}
                ></textarea>

                <button onClick={handleFormSubmit} className="btn col-12 col-md-3" type="submit">
                    Submit
                </button>
            </form>
            <Card.Group>
            {previousPost.map((currentpost,key) => <PostCard post={currentpost} key={key}/>)}
            </Card.Group>
        </div>
    );
};




export default PostForm;



 

