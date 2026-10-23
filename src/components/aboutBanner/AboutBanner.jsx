import "./AboutBanner.css";
import gtr from "./images/gtr.jpg";
import f150 from "./images/f150.jpg";
import mustang from "./images/mustang.webp"

const AboutBanner = () => {
    return (
        <section id="about-banner">
            <div id="about-cars" className="about-car-grid">
                <img src={gtr} alt="GTR" />
                <img src={mustang} alt="Ford Mustang" />
                <img src={f150} alt="F-150" />
            </div>
        </section>
    );
};

export default AboutBanner;