import React from "react";
import logo from '../assets/img/Logo_sukolilo.png';
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Navigation from './Navigation';


const Footer = () => {
    return (
        <footer 
        className=" text-white py-10 flex gap-10"
        style={{backgroundColor: "var(--clr-primary-5)"}}
        >
            <div className="container mx-auto">
              <div className="flex gap-9">
                <div className='flex-start'>
                  <img src={logo} alt="Logo" className="h-16 mb-4" />
                </div>
                <div className="flex items-start justify-between items-center min-w-[1032px]">
                  <div className='flex-start flex-col'>
                    <p style={{fontSize:"var(--size-medium-small)"}} className="font-semibold pb-4">Pemerintah Desa Sukolilo</p>
                    <p style={{fontSize:"var(--size-small)"}} className="font-normal">
                      Jalan Raya Sukolilo RT.03 RW 01 <br/>
                      Desa Sukolilo, Kecamatan Jabung,<br/>
                      Kabupaten Malang<br/>
                      Provinsi Jawa Timur, 65163
                    </p>
                  </div>
                  <div className='flex-start flex-col'>
                    <p style={{fontSize:"var(--size-medium-small)"}} className="font-semibold pb-4">Hubungi Kami</p>
                    <p style={{fontSize:"var(--size-small)"}} className="font-normal">
                      <FontAwesomeIcon icon={faPhone} style={{paddingRight: "6px"}}/>
                      082212345678 <br/>
                      <FontAwesomeIcon icon={faEnvelope} style={{paddingRight: "6px", paddingTop: "12px"}}/>
                      sukolilo@gmail.com
                    </p>
                  </div>
                  <div className='flex-start flex-col'>
                    <p style={{fontSize:"var(--size-medium-small)"}} className="font-semibold pb-4">Jelajahi</p>
                    <p style={{fontSize:"var(--size-small)"}} className="font-normal">
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
                      <br/>
                      <div style={{marginTop: "12px"}}>
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
                
              <div className="text-center self-stretch pt-18">
                <p style={{fontSize:"var(--size-small)"}} className="font-medium">2025 Powered by KKN Tim 33 Fakultas Ilmu Komputer Desa Sukolilo 2025</p>
              </div>
            </div>
        </footer>
    );
}


export default Footer;