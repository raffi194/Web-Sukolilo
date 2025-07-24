import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonUsaha from "./ButtonUsaha";
import PropTypes from 'prop-types';

const CardUsaha = ({ image, title, description, address, linkTo, contact }) => {
    return (
        <div
            className="
                min-w-[280px] 
                max-w-[268px] 
                min-h-[300px] 
                flex 
                flex-col 
                bg-white 
                shadow-lg 
                rounded-lg 
                overflow-hidden
                transform
                transition-all
                duration-300
                hover:shadow-2xl
                hover:-translate-y-1
                animate-fadeIn
            "
        >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={image}
                    className="
                        w-full 
                        h-full 
                        object-cover 
                        transition-transform 
                        duration-500 
                        hover:scale-110
                    "
                    alt={title}
                    loading="lazy"
                />
            </div>

            {/* Content */}
            <div className="flex-1 p-5 space-y-4 text-left">
                <div className="space-y-2">
                    <h3 className="body-2-semibold font-semibold tracking-tight hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">
                        {description}
                    </p>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 group">
                    <FontAwesomeIcon
                        icon={faMap}
                        className="
                            mt-1 
                            text-gray-500 
                            group-hover:text-blue-500 
                            transition-colors
                        "
                    />
                    <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-700">
                            {address}
                        </p>
                        <a
                            href={linkTo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="
                                inline-block
                                text-blue-500 
                                text-sm 
                                font-medium
                                hover:text-blue-700
                                transition-colors
                                hover:underline
                            "
                        >
                            Lihat Selengkapnya
                        </a>
                    </div>
                </div>

                {/* Button */}
                <div className="pt-2">
                    <ButtonUsaha
                        text="Hubungi Sekarang"
                        onClick={() => window.open(`https://wa.me/${contact}`, '_blank')}
                    />
                </div>
            </div>
        </div>
    );
};

CardUsaha.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    contact: PropTypes.string
};

export default CardUsaha;