import React from "react";
import logo from '../assets/img/Logo_sukolilo.png';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer
      className="text-white py-16"
      style={{ backgroundColor: "var(--clr-primary-5)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center sm:text-left">

          <div className="md:col-span-2">
            <div className="flex flex-col items-center sm:flex-row sm:items-start sm:text-left gap-6">
              <img src={logo} alt="Logo" className="h-14 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Pemerintah Desa Sukolilo
                </h3>
                <p className="text-base font-light text-gray-200 leading-relaxed">
                  Jalan Raya Sukolilo RT.03 RW 01 <br />
                  Desa Sukolilo, Kecamatan Jabung,<br />
                  Kabupaten Malang, Jawa Timur 65163
                </p>
              </div>
            </div>
          </div>
          <div className="sm:col-span-1">
            <h3 className="font-semibold text-lg mb-4">
              Hubungi Kami
            </h3>
            <div className="flex flex-col items-center sm:items-start gap-3 text-base font-light text-gray-200">
              <a href="tel:082212345678" className="flex items-center gap-3 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faPhone} className="w-4 h-4" />
                <span>082212345678</span>
              </a>
              <a href="mailto:pemdessukolilo@gmail.com" className="flex items-center gap-3 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faEnvelope} className="w-4 h-4" />
                <span>pemdessukolilo@gmail.com</span>
              </a>
            </div>
          </div>

          <div className="sm:col-span-1">
            <h3 className="font-semibold text-lg mb-4">
              Jelajahi
            </h3>
            <div className="flex flex-col items-center sm:items-start gap-3 text-base font-light">
              <a href="/" className="text-gray-200 hover:text-white transition-colors">
                Website Desa
              </a>
              <a
                href="https://jabung.malangkab.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition-colors"
              >
                Website Kecamatan
              </a>
            </div>
          </div>

        </div>

        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-sm font-normal text-gray-300">
            {new Date().getFullYear()} Powered by KKN Tim 33 Fakultas Ilmu Komputer Desa Sukolilo
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;