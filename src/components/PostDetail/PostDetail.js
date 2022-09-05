import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post,setPost] = useState({});
    
    useEffect(() =>{
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data))
    },[postId])
    return (
        <div>
            <h3>This is details of : {postId}</h3>
            <h6>Title: {post.title}</h6>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default PostDetail;