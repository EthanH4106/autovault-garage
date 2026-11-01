import "./NavMenu.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    const closeNav = () => {
        setMenuOpen(false);
    };

    return (
        <nav className="main-nav" aria-label="Main navigation">
            {/* Part 10: JavaScript Toggle Menu */}
            <button
                id="toggle-nav"
                type="button"
                onClick={toggleNav}
                aria-expanded={menuOpen}
                aria-controls="nav-links"
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            <ul
                id="nav-links"
                className={menuOpen ? "nav-open" : "hide-small"}
            >
                <li>
                    <NavLink to="/" end onClick={closeNav}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Performance" onClick={closeNav}>
                        Performance
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/Garage" onClick={closeNav}>
                        Garage
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/About" onClick={closeNav}>
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavMenu;