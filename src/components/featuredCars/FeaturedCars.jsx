import "./FeaturedCars.css";
import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import cars from "../../data/cars.json";
import { getCarImage } from "../../utils/CarImages";

const FeaturedCars = () => {

    const featuredCars = useMemo(() => {
        const shuffledCars = [...cars];

        for (let i = shuffledCars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [shuffledCars[i], shuffledCars[j]] =
                [shuffledCars[j], shuffledCars[i]];
        }

        return shuffledCars.slice(0, 6);
    }, []);

    return (
        <section id="featured-section">
            <h2>Featured Cars</h2>

            <div id="featured-cars" className="car-grid">
                {featuredCars.map((car) => (
                    <NavLink
                        to="/Garage"
                        className="car-card"
                        key={car.id}
                    >
                        <img
                            src={getCarImage(car)}
                            alt={car.name}
                            loading="lazy"
                        />

                        <h3>{car.name}</h3>
                    </NavLink>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCars;