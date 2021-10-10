import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { RootState } from '../app/store';


const Nav = () => {
    const navStatus = useSelector((state: RootState) => state.navStatus);
    return (
        <div className={`Nav ${navStatus ? "active-nav" : ""}`}>
            <NavLink className="nav-card" activeClassName='active-nav-link' to="/songs">
                All Songs
            </NavLink>
            <NavLink className="nav-card" activeClassName='active-nav-link' to="/library">
                Library
            </NavLink>
        </div>
    )
}

export default Nav;