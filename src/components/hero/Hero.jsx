import "./Hero.css";
import blackLambo from "./images/lambo-hero.jpg"
import ferrari from "./images/ferrari.jpg"
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <section id="hero">
            <img src={blackLambo} alt="Black Lambo"/>
            <img src={ferrari} alt="Ferrari"/>

            <div className="hero-content">
                <h3>Welcome to Autovault</h3>
            </div>

            <nav className="button-link">
                <ul>
                    <li><NavLink to="/Garage">Garage</NavLink></li>
                </ul>
            </nav>
        </section>
    );
};

export default Hero; 