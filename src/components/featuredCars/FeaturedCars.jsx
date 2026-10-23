import "./FeaturedCars.css";

import car1 from "./images/car1.webp";
import car2 from "./images/car2.jpg";
import car3 from "./images/car3.jpg";
import car4 from "./images/car4.webp";
import car5 from "./images/car5.jpg";
import car6 from "./images/car6.jpg";

const FeaturedCars = () => {
    const cars = [
        { id: 1, name: "BMW X5", image: car1 },
        { id: 2, name: "Cadillac Escalade", image: car2 },
        { id: 3, name: "Ford F-150", image: car3 },
        { id: 4, name: "Ford Mustang", image: car4 },
        { id: 5, name: "Nissan GTR", image: car5 },
        { id: 6, name: "Chevy Silverado", image: car6 }
    ];
    return (
        <section id="featured-section">
            <h2>Featured Cars</h2>

            <div id="featured-cars" className="car-grid">
                {cars.map((car) => (
                    <div className="car-card" key={car.id}>
                        <img src={car.image} alt={car.name} />
                        <h3>{car.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedCars;