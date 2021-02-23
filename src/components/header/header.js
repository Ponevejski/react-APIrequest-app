import React from 'react';
import './header.css'; 
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="header-block">
            <div className = "header-title">
               <Link to="/">
                Game of Thrones DB
                </Link>
            </div>
            <div className ="header-links">
                <li>
                    <Link to="/characters/">Characters</Link>
                </li>
                <li>
                <Link to="/houses/">Houses</Link>
                </li>
                <li>
                <Link to="/books/">Books</Link> 
                </li>
            </div>
        </div>
    );
};

export default Header;