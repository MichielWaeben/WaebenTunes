import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="Header">
            <Link to={`/library`}><h1>WaebenTunes</h1></Link>
            <h2>Library</h2>
        </div>
    )
}

export default Header;