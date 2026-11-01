import "./Hero.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import cars from "../../data/cars.json";
import { getCarImage } from "../../utils/CarImages";

// Part 10: Custom JavaScript Slideshow
// Images loaded from cars.json.
// No external slideshow library used.

// Select six cars for the Hero slideshow
const selectedIds = [40, 37, 34, 32, 18, 16];

const slides = selectedIds
    .map((id) => cars.find((car) => car.id === id))
    .filter(Boolean);

const Hero = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    // Automatically advance every 5 seconds
    useEffect(() => {
        if (slides.length <= 1) return;

        const interval = setInterval(() => {
            setSlideIndex((current) =>
                (current + 1) % slides.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Move to next slide
    const slideForward = () => {
        setSlideIndex((current) =>
            (current + 1) % slides.length
        );
    };

    // Move to previous slide
    const slideBackward = () => {
        setSlideIndex((current) =>
            (current - 1 + slides.length) % slides.length
        );
    };

    return (
        <section id="hero" aria-label="AutoVault slideshow">
            {slides.length > 0 && (
                <img
                    src={getCarImage(slides[slideIndex])}
                    alt={slides[slideIndex].name}
                    className="hero-image"
                />
            )}

            {/* Slideshow arrows */}
            {slides.length > 1 && (
                <>
                    <button
                        id="prev-arrow"
                        className="arrow"
                        type="button"
                        onClick={slideBackward}
                        aria-label="Previous slide"
                    >
                        <span className="chevron chevron-left"></span>
                    </button>

                    <button
                        id="next-arrow"
                        className="arrow"
                        type="button"
                        onClick={slideForward}
                        aria-label="Next slide"
                    >
                        <span className="chevron chevron-right"></span>
                    </button>
                </>
            )}

            <div className="hero-content">
                <h3>Welcome to AutoVault</h3>
            </div>

            <div className="button-link">
                <NavLink to="/Garage">
                    Garage
                </NavLink>
            </div>

            {/* Slide indicators */}
            {slides.length > 1 && (
                <div className="slide-indicators">
                    {slides.map((car, index) => (
                        <button
                            key={car.id}
                            type="button"
                            className={
                                slideIndex === index
                                    ? "indicator active"
                                    : "indicator"
                            }
                            onClick={() => setSlideIndex(index)}
                            aria-label={`Go to slide ${index + 1}: ${car.name}`}
                            aria-current={
                                slideIndex === index
                                    ? "true"
                                    : undefined
                            }
                        />
                    ))}
                </div>
            )}
        </section>
    );
};

export default Hero;