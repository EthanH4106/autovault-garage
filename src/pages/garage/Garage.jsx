import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import "./Garage.css";
import GarageFilter from "../../components/garageFilter/GarageFilter";
import GarageCard from "../../components/garageCard/GarageCard";
import { useCars } from "../../context/CarContext";
import { API_BASE_URL } from "../../config";
import AddCar from "../../components/addCar/AddCar";

const Garage = () => {
    const [cars, setCars] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [showAddCar, setShowAddCar] = useState(false);

    const { setMyCar, setOpponent } = useCars();
    const navigate = useNavigate();

    // Load vehicles from the backend
    useEffect(() => {
        const controller = new AbortController();

        const fetchCars = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await axios.get(
                    `${API_BASE_URL}/api/cars`,
                    { signal: controller.signal }
                );

                if (!Array.isArray(response.data)) {
                    throw new Error("Invalid vehicle data");
                }

                setCars(response.data);

            } catch (err) {
                if (
                    err.code !== "ERR_CANCELED" &&
                    err.name !== "AbortError"
                ) {
                    console.error("Axios error:", err);
                    setError("Unable to load vehicles.");
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchCars();

        return () => controller.abort();
    }, []);

    // Automatically update Garage after adding a car
    const handleCarAdded = (newCar) => {
        setCars((prevCars) => [...prevCars, newCar]);

        // Show the newly added vehicle
        setSelectedFilter("all");

        toast.success("Vehicle added successfully!");
    };

    // Filter vehicles by category
    const filteredCars = cars.filter((car) =>
        selectedFilter === "all" ||
        car.category === selectedFilter
    );

    // Select player's vehicle
    const handleSelectMyCar = (car) => {
        setMyCar(car);
        toast.success(`${car.name} selected as your car!`);
    };

    // Select opponent's vehicle
    const handleSelectOpponent = (car) => {
        setOpponent(car);
        toast.success(`${car.name} selected as your opponent!`);
    };

    return (
        <main id="garage-page">

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

            {/* Add Car Button */}
            <div className="garage-add-action">
                <button
                    type="button"
                    className="garage-add-button"
                    onClick={() => setShowAddCar(true)}
                >
                    + Add New Vehicle
                </button>
            </div>

            <GarageFilter
                selectedFilter={selectedFilter}
                onFilterChange={setSelectedFilter}
            />

            {loading && (
                <p className="garage-message">
                    Loading vehicles from AutoVault...
                </p>
            )}

            {error && (
                <p className="garage-error" role="alert">
                    {error}
                </p>
            )}

            {!loading && !error && (
                <section id="garage-grid">
                    {filteredCars.length > 0 ? (
                        <Swiper
                            modules={[Navigation, Pagination]}
                            key={selectedFilter}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation={true}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 }
                            }}
                            className="garage-swiper"
                        >
                            {filteredCars.map((car) => (
                                <SwiperSlide key={car.id}>
                                    <GarageCard
                                        car={car}
                                        onSelectMyCar={() =>
                                            handleSelectMyCar(car)
                                        }
                                        onSelectOpponent={() =>
                                            handleSelectOpponent(car)
                                        }
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <p className="garage-message">
                            No vehicles found in this category.
                        </p>
                    )}
                </section>
            )}

            <div className="garage-compare-action">
                <button
                    type="button"
                    onClick={() => navigate("/performance")}
                >
                    Compare Selected Cars
                </button>
            </div>

            {/* Add Car Modal */}
            {showAddCar && (
                <AddCar
                    close_dialog={() => setShowAddCar(false)}
                    onCarAdded={handleCarAdded}
                />
            )}

        </main>
    );
};

export default Garage;
