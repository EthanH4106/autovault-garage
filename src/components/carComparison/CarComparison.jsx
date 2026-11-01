import "./CarComparison.css";
import { getCarImage } from "../../utils/CarImages";

const ComparisonCard = ({ car, placeholder }) => {
    return (
        <div className="comparison-card">
            {car ? (
                <img
                    src={getCarImage(car)}
                    alt={car.name}
                />
            ) : (
                <div className="comparison-placeholder">
                    <p>No Car Selected</p>
                </div>
            )}

            <h3>{car ? car.name : placeholder}</h3>
        </div>
    );
};

const CarComparison = ({ myCar, opponent }) => {
    return (
        <section id="comparison">
            <h2>Head-to-Head Comparison</h2>

            <div className="comparison-cards">
                <ComparisonCard
                    car={myCar}
                    placeholder="Choose Your Car"
                />

                <div className="versus">
                    <p>VS</p>
                </div>

                <ComparisonCard
                    car={opponent}
                    placeholder="Choose Opponent"
                />
            </div>
        </section>
    );
};

export default CarComparison;