import "./Hero.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

// Part 10: Custom JavaScript Slideshow
// Built from scratch using React state and effects.
// No slideshow libraries are used.

const images = require.context(
    "./images",
    false,
    /\.(png|jpe?g|svg|webp)$/i
).keys().sort().map((key) =>
    require.context(
        "./images",
        false,
        /\.(png|jpe?g|svg|webp)$/i
    )(key)
);

const Hero = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    // Automatically advance every 5 seconds
    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setSlideIndex((current) =>
                (current + 1) % images.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    // Move to next slide
    const slideForward = () => {
        setSlideIndex((current) =>
            (current + 1) % images.length
        );
    };

    // Move to previous slide
    const slideBackward = () => {
        setSlideIndex((current) =>
            (current - 1 + images.length) % images.length
        );
    };

    return (
        <section id="hero" aria-label="AutoVault slideshow">
            {images.length > 0 && (
                <img
                    src={images[slideIndex]}
                    alt={`Featured car ${slideIndex + 1}`}
                    className="hero-image"
                />
            )}

            {/* Slideshow arrows */}
            {images.length > 1 && (
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
            {images.length > 1 && (
                <div className="slide-indicators">
                    {images.map((image, index) => (
                        <button
                            key={index}
                            type="button"
                            className={
                                slideIndex === index
                                    ? "indicator active"
                                    : "indicator"
                            }
                            onClick={() => setSlideIndex(index)}
                            aria-label={`Go to slide ${index + 1}`}
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