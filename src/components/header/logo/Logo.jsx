import "./Logo.css";

function Logo() {
    return (
        <a href="#home" className="av-logo">
            <img src={`${process.env.PUBLIC_URL}/favicon.ico`} alt="Logo" className="av-logo__image" />
            <span>Autovault</span>
        </a>
    );
}

export default Logo;