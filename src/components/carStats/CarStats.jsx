import { NavLink } from "react-router-dom";
import "./CarStats.css";

const CarStats = ({ title, car, opponent }) => {

    const stats = [
        { label: "Engine", value: car?.engine },
        { label: "Drivetrain", value: car?.drivetrain },
        {
            label: "Weight",
            key: "weight",
            value: car ? `${car.weight.toLocaleString()} lbs` : null
        },
        { label: "Transmission", value: car?.transmission },
        {
            label: "Horsepower",
            key: "horsepower",
            value: car ? `${car.horsepower} hp` : null
        },
        {
            label: "Torque",
            key: "torque",
            value: car ? `${car.torque} lb-ft` : null
        },
        {
            label: "0–60 MPH",
            key: "zeroToSixty",
            value: car ? `${car.zeroToSixty} sec` : null
        },
        {
            label: "Top Speed",
            key: "topSpeed",
            value: car ? `${car.topSpeed} mph` : null
        },
        {
            label: "Quarter Mile",
            key: "quarterMile",
            value: car ? `${car.quarterMile} sec` : null
        }
    ];

    const isWinningStat = (stat, car, opponent) => {
        if (!car || !opponent) return false;

        const lowerIsBetter = [
            "weight",
            "zeroToSixty",
            "quarterMile"
        ];

        const carValue = Number(car[stat]);
        const opponentValue = Number(opponent[stat]);

        if (!Number.isFinite(carValue) ||
            !Number.isFinite(opponentValue)) {
            return false;
        }

        if (carValue === opponentValue) return false;

        if (lowerIsBetter.includes(stat)) {
        return carValue < opponentValue;
        }

        return carValue > opponentValue;
    };

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
                        <p className={
                            stat.key && isWinningStat(stat.key, car, opponent)
                                ? "winning-stat"
                                : ""
                        }>
                            {stat.value ?? "---"}
                        </p>
                    </div>
                ))}
            </div>

            <div className="stats-grid">
                {stats.slice(4).map((stat) => (
                    <div className="stat" key={stat.label}>
                        <h4>{stat.label}</h4>
                        <p className={
                            stat.key && isWinningStat(stat.key, car, opponent)
                                ? "winning-stat"
                                : ""
                        }>
                            {stat.value ?? "---"}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CarStats;