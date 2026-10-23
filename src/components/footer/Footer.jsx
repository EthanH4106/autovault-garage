import "./Footer.css";
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (
        <nav className="av-footer-links">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/Performance">Performance</NavLink></li>
                <li><NavLink to="/Garage">Garage</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Footer;