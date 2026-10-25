import { NavLink } from "react-router-dom";
import "./CarStats.css";

const CarStats = ({ title }) => {
    return (
        <section className="car-stats">
            <div className="car-select">
                <h3>{title}</h3>

                <NavLink to="/Garage">
                    Choose Car
                </NavLink>
            </div>

            <div className="stats-grid">
                <div className="stat">
                    <h4>Engine</h4>
                    <p>---</p>
                </div>

                <div className="stat">
                    <h4>Drivetrain</h4>
                    <p>---</p>
                </div>

                <div className="stat">
                    <h4>Weight</h4>
                    <p>---</p>
                </div>

                <div className="stat">
                    <h4>Transmission</h4>
                    <p>---</p>
                </div>
            </div>

            <div className="stats-grid">
                <div className="stat">
                    <h4>Horsepower</h4>
                    <p>---</p>
                </div>

                <div className="stat">
                    <h4>Torque</h4>
                    <p>---</p>
                </div>

                <div className="stat">
                    <h4>0–60 MPH</h4>
                    <p>---</p>
                </div>

                <div className="stat">
                    <h4>Top Speed</h4>
                    <p>---</p>
                </div>

                <div className="stat">
                    <h4>Quarter Mile</h4>
                    <p>---</p>
                </div>
            </div>
        </section>
    );
};

export default CarStats;