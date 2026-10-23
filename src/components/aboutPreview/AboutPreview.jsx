import "./AboutPreview.css";
import carMeet from "./images/carmeet.avif"
import {NavLink} from "react-router-dom";

const AboutPreview = () => {
    return (
        <section className="about">
            <h2>What is Autovault?</h2>

            <div className="about-content">
                <img src={carMeet} alt="carmeet"/>

                <div className="about-card">
                    <h3>Explore, Compare, Discover</h3>

                    <p>
                        Autovault is a platform for automotive
                        enthusiasts to explore vehicles, compare
                        performance specs, and discover cars from
                        a virtual garage.
                    </p>

                    <nav className="about-link">
                        <ul>
                            <li><NavLink to="/About">About</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default AboutPreview;