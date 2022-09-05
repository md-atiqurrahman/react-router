import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h2>Welcome to my fancy Routing website!!!</h2>
            <nav style={{ display: 'flex', justifyContent: 'center' }}>
                <CustomLink to='/'>Home</CustomLink>
                <CustomLink to='/friends'>Friends</CustomLink>
                <CustomLink to='/posts'>Posts</CustomLink>
                <CustomLink to='/about'>About</CustomLink>
            </nav>
        </div>
    );
};

export default Header;