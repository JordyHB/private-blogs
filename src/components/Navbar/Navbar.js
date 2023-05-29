import React from 'react';
import {NavLink} from "react-router-dom";
import LogoutButton from "../LogoutButton/LogoutButton";

function Navbar({ loggedIn, updateStatus }) {
    return (
        <>
            <ul>
                <li><NavLink to={'/'}>Home</NavLink></li>
                { loggedIn ? <li><NavLink to={'/blogposts'}>Blogposts</NavLink></li> : ''}
                { !loggedIn
                    // checks if user is logged in and show content accordingly
                    ? <li><NavLink to={'/login'}>Login</NavLink></li>
                    : <LogoutButton updatestatus={updateStatus}/>}

            </ul>
        </>
    );
}

export default Navbar;