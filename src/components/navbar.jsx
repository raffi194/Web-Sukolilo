import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/img/Logo_sukolilo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="bg-gray-800 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-white text-lg font-bold">
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="h-8 mr-2" />
                        </div>
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Beranda</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Layanan</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Profil</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Usaha Desa</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Perangkat Desa</a>
                        </li>
                        <li>
                            <a href="#" className="text-gray-300 hover:text-white">Kontak</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
