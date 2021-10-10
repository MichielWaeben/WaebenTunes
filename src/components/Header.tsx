import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setNavStatus } from '../actions/navStatusAction';
import { RootState, store } from '../app/store';

const Header = () => {
    const navStatus = useSelector((state: RootState) => state.navStatus);
    const logoClickHandler = () => {
        console.log(navStatus)
        if (navStatus) {
            store.dispatch(setNavStatus(false));
        } else {
            store.dispatch(setNavStatus(true));
        }

    }
    return (
        <div className="Header">
            <h1 onClick={logoClickHandler}>WaebenTunes</h1>
            <h2>Library</h2>
        </div>
    )
}

export default Header;