import React, { useState } from "react";
import "./NavMenu.css";
import {NavLink} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

function NavMenu() {
    return (
        <nav className="av-nav-links">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Performance">Performance</NavLink></li>
                <li><NavLink to="/Listings">Listings</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>


            </ul>
        </nav>
    );
}

export default NavMenu;