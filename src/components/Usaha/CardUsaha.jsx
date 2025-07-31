import { faMap } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonUsaha from "./ButtonUsaha";
import PropTypes from 'prop-types';

const CardUsaha = ({ image, title, address, linkTo, contact, categories }) => {
    return (
        <div
            className="
    w-[320px]
    h-[470px]
    flex flex-col
    bg-white
    shadow-lg
    rounded-xl
    overflow-hidden
    transform transition-all duration-300
    hover:shadow-2xl hover:-translate-y-1
    animate-fadeIn
    mx-auto
"
        >
            {/* Image Container */}
            <div className="relative w-full h-[200px] overflow-hidden">
                <img
                    src={`src/assets/img/foto-usaha/${title}.jpg`}
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "src/assets/img/default_placeholder_usaha.png";
                    }}
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
            <div className="flex-1 px-4 pt-4 pb-5 flex flex-col justify-between text-left">
                <div className="space-y-3">
                    <div className="space-y-1.5">
                        <p className="text-xl sm:text-xl md:text-xl font-bold tracking-tight hover:text-blue-600 transition-colors">
                            {title}
                        </p>
                        <div className="flex flex-wrap gap-2 text-gray-600 text-sm">
                            {categories.map((category, index) => (
                                <span
                                    key={index}
                                    className="bg-gray-100 px-2 py-0.5 rounded-full"
                                >
                                    {category}
                                </span>
                            ))}
                        </div>
                    </div>


                </div>

                <div className="w-full mt-4 flex justify-center flex-col gap-5">
                    <div className="flex items-start gap-2 group">
                        <FontAwesomeIcon
                            icon={faMap}
                            className="mt-1 group-hover:text-blue-500 transition-colors text-xl sm:text-2xl self-center"
                        />
                        <div>
                            <p className="text-sm font-semibold text-gray-700">
                                {address}
                            </p>
                            <a
                                href={linkTo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 text-sm font-medium hover:text-blue-700 transition-colors hover:underline"
                            >
                                Lihat Selengkapnya
                            </a>
                        </div>
                    </div>
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
    address: PropTypes.string.isRequired,
    linkTo: PropTypes.string.isRequired,
    contact: PropTypes.string,
    categories: PropTypes.array.isRequired
};

export default CardUsaha;
