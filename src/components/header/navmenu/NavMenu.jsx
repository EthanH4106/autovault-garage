import "./NavMenu.css";
import {NavLink} from "react-router-dom";

function NavMenu() {
    return (
        <nav className="av-nav-links">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Performance">Performance</NavLink></li>
                <li><NavLink to="/Garage">Garage</NavLink></li>
                <li><NavLink to="/Listings">Listings</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
            </ul>
        </nav>
    );
}

export default NavMenu;