import { faMap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonUsaha from "./ButtonUsaha";

const CardUsaha = ({ image, title, description, address, linkTo, contact }) => {
    return (
        <div className="min-w-[280px] max-w-[268px] min-h-[300px] max-h-auto flex flex-col bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow">

            <img src={image} className="object-cover" alt={title} />
            <div className="p-5 pt-2 text-left">
                <div>
                    <p className="body-2-semibold">{title}</p>
                    <p className="body-2-regular font-semibold text-gray-700">{description}</p>
                </div>
                <div className="flex flex-row gap-2 items-center pt-3">
                    <svg width="48" height="45" viewBox="0 0 33 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.0938 5.60181C29.0031 5.60181 28.9096 5.61733 28.8179 5.65048L20.9452 8.28699H20.9448L12.9818 5.73942C12.6796 5.64839 12.3632 5.60193 12.0448 5.60181C11.735 5.60181 11.4258 5.64586 11.1276 5.73355L4.09847 7.94925C3.82356 8.0489 3.58789 8.2209 3.42186 8.44308C3.25583 8.66526 3.16706 8.92743 3.16699 9.19576V23.726C3.16699 24.1115 3.5156 24.3981 3.90727 24.3981C3.99801 24.3981 4.09107 24.3826 4.1832 24.3494L12.0559 21.7129L20.0188 24.2601C20.6202 24.4419 21.2701 24.4441 21.873 24.2664L28.9022 22.0507C29.1771 21.9511 29.4128 21.7791 29.5789 21.5569C29.7449 21.3347 29.8337 21.0725 29.8337 20.8041V6.27394C29.8337 5.88837 29.4851 5.60181 29.0938 5.60181ZM13.5374 8.05288L19.4633 9.94887V21.947L13.5374 20.051V8.05288ZM5.38921 21.7989V9.67448L11.3151 7.80618V19.814L11.2855 19.8236L5.38921 21.7989ZM27.6114 20.325L21.6855 22.1933V10.1859L21.7151 10.1759L27.6114 8.20098V20.325Z" fill="#191B27" />
                    </svg>
                    <div className="flex flex-col gap-1">
                        <p className="text-sm font-semibold">{address}</p>
                        <a href={linkTo} className="text-blue-500 font-semibold text-xs">Lihat Selengkapnya</a>
                    </div>
                </div>
            </div>
            <div className="">
                <ButtonUsaha text="Hubungi Sekarang" />
            </div>

        </div>
    );
};


export default CardUsaha;

