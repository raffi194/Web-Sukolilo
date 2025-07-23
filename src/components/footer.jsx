import React from "react";
import logo from '../assets/img/Logo_sukolilo.png';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navigation from './Navigation';


const Footer = () => {
  return (
    <footer
      className="text-white py-10"
      style={{ backgroundColor: "var(--clr-primary-5)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex gap-12 w-full">
          <div className='flex-none'>
            <img src={logo} alt="Logo" className="h-16 mb-4" />
          </div>
          <div className="flex justify-between flex-1 gap-16">
            <div className='flex flex-col'>
              <p className="font-semibold pb-4" style={{ fontSize: "var(--size-medium-small)" }}>
                Pemerintah Desa Sukolilo
              </p>
              <p className="font-normal max-w-xs" style={{ fontSize: "var(--size-small)" }}>
                Jalan Raya Sukolilo RT.03 RW 01 <br />
                Desa Sukolilo, Kecamatan Jabung,<br />
                Kabupaten Malang<br />
                Provinsi Jawa Timur, 65163
              </p>
            </div>

            <div className='flex flex-col'>
              <p className="font-semibold pb-4" style={{ fontSize: "var(--size-medium-small)" }}>
                Hubungi Kami
              </p>
              <p className="font-normal space-y-3" style={{ fontSize: "var(--size-small)" }}>
                <span className="flex items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} />
                  082212345678
                </span>
                <span className="flex items-center gap-2 pt-3">
                  <FontAwesomeIcon icon={faEnvelope} />
                  sukolilo@gmail.com
                </span>
              </p>
            </div>

            <div className='flex flex-col'>
              <p style={{ fontSize: "var(--size-medium-small)" }} className="font-semibold pb-4">Jelajahi</p>
              <p style={{ fontSize: "var(--size-small)" }} className="font-normal">
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    if (window.location.pathname !== '/') {
                      window.location.href = '/';
                    } else {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                  className="hover:text-gray-300"
                >
                  Website Desa
                </a>
                <br />
                <div style={{ marginTop: "12px" }}>
                  <a
                    href="https://jabung.malangkab.go.id/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300"
                  >
                    Website Kecamatan
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center pt-16">
          <p className="font-medium" style={{ fontSize: "var(--size-small)" }}>
            2025 Powered by KKN Tim 33 Fakultas Ilmu Komputer Desa Sukolilo 2025
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;