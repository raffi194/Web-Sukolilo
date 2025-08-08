import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Carousel = ({ images, interval = 5000 }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);
        return () => clearInterval(timer);
    }, [images.length, interval]);

    const prevSlide = () => {
        setActiveIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="relative w-full h-full">
            <div className="flex transition-transform duration-700 ease-in-out h-full"
                style={{ transform: `translateX/2`, width: `${images.length * 100}%` }}>
                {images.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`slide-${index}`}
                        className="w-full h-full object-cover flex-shrink-0"
                    />
                ))}
            </div>

            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 bg-white/40 hover:bg-white/60 p-2 rounded-full"
            >
                ‹
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 bg-white/40 hover:bg-white/60 p-2 rounded-full"
            >
                ›
            </button>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    interval: PropTypes.number,
};

export default Carousel;
