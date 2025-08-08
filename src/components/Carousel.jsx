import React from "react";
import PropTypes from "prop-types";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Carousel = ({ images, interval = 5000 }) => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: "start", dragFree: false },
        [Autoplay({ delay: interval, stopOnInteraction: false })]
    );

    return (
        <div className="embla overflow-hidden w-full h-full" ref={emblaRef}>
            <div className="embla__container flex">
                {images.map((src, index) => (
                    <div
                        className="embla__slide flex-[0_0_100%] relative h-screen nd:h-full"
                        key={index}
                    >
                        <img
                            src={`${src}.jpg`}
                            alt={`slide-${index}`}
                            className="w-full h-full object-cover md:scale-100 transition-transform duration-500"
                            style={{ transformOrigin: "center" }}
                        />
                    </div>

                ))}
            </div>
        </div>
    );
};

Carousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    interval: PropTypes.number,
};

export default Carousel;
