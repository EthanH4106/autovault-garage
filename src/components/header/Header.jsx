import Logo from "./logo/Logo";
import NavMenu from "./navmenu/NavMenu";
import "./Header.css";

function Header() {
    return (
        <header className="av-header">
            <nav className="av-navbar">
                <Logo />
                <NavMenu />
            </nav>
        </header>
    );
}

export default Header;