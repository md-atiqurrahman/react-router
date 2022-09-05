import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend,setFriend] = useState({});

    useEffect( () =>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setFriend(data))
    },[])
    return (
        <div>
            <h2>This is my details of my bondhu: {friendId}</h2>
            <h2>Name: {friend.name}</h2>
            <h3>Email: {friend.email}</h3>
            <h4><small>web: {friend.website}</small></h4>
            <p>City: {friend.address?.city}</p>
            <p><small>lat : {friend.address?.geo.lat}</small></p>
        </div>
    );
};

export default FriendDetail;