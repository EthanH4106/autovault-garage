import React, { useState } from "react";
import "./NavMenu.css";

function NavMenu() {
    const [activeLink, setActiveLink] = useState("#home");

    return (
        <nav className="av-nav-links">
            <a href="#home" className={activeLink === "#home" ? "active" : ""} onClick={() => setActiveLink("#home")}>Home</a>

            <a href="#performance" className={activeLink === "#performance" ? "active" : ""} onClick={() => setActiveLink("#performance")}>Performance</a>

            <a href="#garage" className={activeLink === "#garage" ? "active" : ""} onClick={() => setActiveLink("#garage")}>Garage</a>

            <a href="#about" className={activeLink === "#about" ? "active" : ""} onClick={() => setActiveLink("#about")}>About</a>
        </nav>
    );
}

export default NavMenu;