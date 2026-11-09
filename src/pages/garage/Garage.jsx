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

const API_URL = "https://autovault-backend-1.onrender.com";

const Garage = () => {
    const [cars, setCars] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const { setMyCar, setOpponent } = useCars();
    const navigate = useNavigate();

    // Load vehicle data from the Render backend
    useEffect(() => {
        const controller = new AbortController();

        const fetchCars = async () => {
            try {
                const response = await fetch(`${API_URL}/api/cars`, {
                    signal: controller.signal
                });

                if (!response.ok) {
                    throw new Error("Unable to retrieve vehicle data.");
                }

                const data = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error("Invalid vehicle data received.");
                }

                setCars(data);
            } catch (err) {
                if (err.name !== "AbortError") {
                    console.error("Error fetching cars:", err);
                    setError("Unable to load vehicles. Please try again later.");
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

    // Filter the cars retrieved from the server
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
                                        name={car.name}
                                        category={car.category}
                                        image={`${API_URL}${car.image}`}
                                        onSelectMyCar={() => handleSelectMyCar(car)}
                                        onSelectOpponent={() => handleSelectOpponent(car)}
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
                    onClick={() => navigate("/Performance")}
                >
                    Compare Selected Cars
                </button>
            </div>

        </main>
    );
};

export default Garage;