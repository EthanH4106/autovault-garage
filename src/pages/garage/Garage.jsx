import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Garage.css";
import GarageFilter from "../../components/garageFilter/GarageFilter";
import GarageCard from "../../components/garageCard/GarageCard";
import cars from "../../data/cars.json";
import { useCars } from "../../context/CarContext";
import { getCarImage } from "../../utils/CarImages";

const Garage = () => {
    const [selectedFilter, setSelectedFilter] = useState("all");

    const { setMyCar, setOpponent } = useCars();
    const navigate = useNavigate();

    const filteredCars = cars.filter((car) =>
        selectedFilter === "all" ||
        car.category === selectedFilter
    );

    const handleSelectMyCar = (car) => {
        setMyCar(car);
        toast.success(`${car.name} selected as your car!`);
    };

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

            <section id="garage-grid">
                <Swiper
                    modules={[Navigation, Pagination]}
                    key={selectedFilter}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{ clickable: true }}
                    breakpoints={{640: {slidesPerView: 2}, 1024: {slidesPerView: 3}}}
                    className="garage-swiper"
                >
                    {filteredCars.map((car) => (
                        <SwiperSlide key={car.id}>
                            <GarageCard
                                name={car.name}
                                category={car.category}
                                image={getCarImage(car)}
                                onSelectMyCar={() => handleSelectMyCar(car)}
                                onSelectOpponent={() => handleSelectOpponent(car)}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

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