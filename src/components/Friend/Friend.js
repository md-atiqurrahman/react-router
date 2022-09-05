import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {
    const {name,username,id} = props.friend;
    let navigate = useNavigate();

    const showFriendDetail = () =>{
       const path = `/friend/${id}`;
       navigate(path);
    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <Link to={'/friend/'+id}>show detail</Link>
            <button onClick={showFriendDetail}>{username} id:{id}</button>
        </div>
    );
};

export default Friend;