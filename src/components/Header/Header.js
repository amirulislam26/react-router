import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div>
            <h1>Welcome to my React Routing webside!!!</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/countries">Countries</Link>
                <Link to="/abouts">Abut</Link>
                {/* <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/friends">Friends</CustomLink>
                <CustomLink to="/posts">Posts</CustomLink>
                <CustomLink to="/abouts">Abouts</CustomLink> */}

            </nav>
        </div>
    );
};

export default Header;