import "./About.css"
import AboutBanner from "../../components/aboutBanner/AboutBanner";

const About = () => {
    return (
        <main id="about-page">

            {/* About Introduction */}
            <section id="about-intro">
                <h2>About AutoVault</h2>
                <p>More than a website. A place for car people.</p>
            </section>

            {/* Car Image Banner */}
            <AboutBanner />

            {/* The Goal */}
            <section id="goal">
                <h2>The Goal</h2>

                <div className="goal-cards">
                    <div className="goal-card">
                        <h3>Gallery</h3>
                        <p>
                            To create a platform for people to learn
                            and explore cars and trucks that interest them.
                        </p>
                    </div>

                    <div className="goal-card">
                        <h3>Performance</h3>
                        <p>
                            To inspire people to think about what gets
                            them from one place to another, every day.
                        </p>
                    </div>

                    <div className="goal-card">
                        <h3>Compare</h3>
                        <p>
                            To compare cars side by side without
                            racing on the street.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section id="quote">
                <p>
                    "Yesterday's history. Tomorrow's a mystery.
                    So live for today."
                </p>
                <span>— Carroll Shelby</span>
            </section>
        </main>
    );
};

export default About;