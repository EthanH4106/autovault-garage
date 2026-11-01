import "./AboutBanner.css";
import cars from "../../data/cars.json";
import { getCarImage } from "../../utils/CarImages";

// About Banner: Images pulled from cars.json

const AboutBanner = () => {
    // Select three specific cars using their JSON IDs
    const selectedIds = [17, 7, 30];

    const bannerCars = selectedIds
        .map((id) => cars.find((car) => car.id === id))
        .filter(Boolean);

    return (
        <section id="about-banner">
            <div id="about-cars" className="about-car-grid">
                {bannerCars.map((car) => (
                    <img
                        key={car.id}
                        src={getCarImage(car)}
                        alt={car.name}
                        loading="lazy"
                    />
                ))}
            </div>
        </section>
    );
};

export default AboutBanner;