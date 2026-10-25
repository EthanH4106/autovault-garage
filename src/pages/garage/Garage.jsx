import { useState } from "react";
import "./Garage.css";
import GarageFilter from "../../components/garageFilter/GarageFilter";
import GarageCard from "../../components/garageCard/GarageCard";
import suv from "./images/suv.webp";
import truck from "./images/truck.jpg";
import muscle from "./images/muscle.jpg";
import sport from "./images/sport.jpg";
import supercar from "./images/super.jpg";

const cars = [
    { id: 1, name: "SUV Placeholder", category: "suv", image: suv },
    { id: 2, name: "Truck Placeholder", category: "truck", image: truck },
    { id: 3, name: "Muscle Car Placeholder", category: "muscle", image: muscle },
    { id: 4, name: "Sports Car Placeholder", category: "sport", image: sport },
    { id: 5, name: "Supercar Placeholder", category: "super", image: supercar },
];

const Garage = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");

    const filteredCars = cars.filter((car) =>
        selectedFilter === "all" ||
        car.category === selectedFilter
    );

    return (
        <main id="garage-page">

            {/* Garage Introduction */}
            <section id="garage-banner">
                <h2>The AutoVault Garage</h2>

                <div className="banner-text">
                    <p>
                        Explore the AutoVault Garage!
                        Browse vehicles, discover their features,
                        and compare performance.
                        Use the filters below to find the
                        type of vehicle you're interested in.
                    </p>
                </div>
            </section>

            {/* Vehicle Filters */}
            <GarageFilter
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
            />

            {/* Vehicle Grid */}
            <section id="garage-grid">
                {filteredCars.map((car) => (
                    <GarageCard
                        key={car.id}
                        name={car.name}
                        category={car.category}
                        image={car.image}
                        onSelectMyCar={() => handleSelectMyCar(car)}
                        onSelectOpponent={() => handleSelectOpponent(car)}
                    />
                ))}
            </section>

        </main>
    );
};

const handleSelectMyCar = (car) => {
    alert(`${car.name} selected as your car!`);
};

const handleSelectOpponent = (car) => {
    alert(`${car.name} selected as your opponent!`);
};

export default Garage;