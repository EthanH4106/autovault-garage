import { NavLink } from "react-router-dom";
import "./CarStats.css";

const CarStats = ({ title, car }) => {

    const stats = [
        { label: "Engine", value: car?.engine },
        { label: "Drivetrain", value: car?.drivetrain },
        {
            label: "Weight",
            value: car ? `${car.weight.toLocaleString()} lbs` : null
        },
        { label: "Transmission", value: car?.transmission },
        {
            label: "Horsepower",
            value: car ? `${car.horsepower} hp` : null
        },
        {
            label: "Torque",
            value: car ? `${car.torque} lb-ft` : null
        },
        {
            label: "0–60 MPH",
            value: car ? `${car.zeroToSixty} sec` : null
        },
        {
            label: "Top Speed",
            value: car ? `${car.topSpeed} mph` : null
        },
        {
            label: "Quarter Mile",
            value: car ? `${car.quarterMile} sec` : null
        }
    ];

    return (
        <section className="car-stats">
            <div className="car-select">
                <h3>{car ? car.name : title}</h3>

                <NavLink to="/Garage">
                    {car ? "Change Car" : "Choose Car"}
                </NavLink>
            </div>

            <div className="stats-grid">
                {stats.slice(0, 4).map((stat) => (
                    <div className="stat" key={stat.label}>
                        <h4>{stat.label}</h4>
                        <p>{stat.value ?? "---"}</p>
                    </div>
                ))}
            </div>

            <div className="stats-grid">
                {stats.slice(4).map((stat) => (
                    <div className="stat" key={stat.label}>
                        <h4>{stat.label}</h4>
                        <p>{stat.value ?? "---"}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CarStats;