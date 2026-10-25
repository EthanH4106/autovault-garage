import "./CarComparison.css";

import mustang from "./images/gt500pic.jpg";
import supra from "./images/download.webp";

const CarComparison = () => {
    return (
        <section id="comparison">
            <h2>Head-to-Head Comparison</h2>

            <div className="comparison-cards">
                <div className="comparison-card">
                    <img src={mustang} alt="Ford Mustang GT500" />
                    <h3>Ford Mustang Shelby GT500</h3>
                </div>

                <div className="versus">
                    <p>VS</p>
                </div>

                <div className="comparison-card">
                    <img src={supra} alt="Toyota GR Supra" />
                    <h3>Toyota GR Supra</h3>
                </div>
            </div>
        </section>
    );
};

export default CarComparison;