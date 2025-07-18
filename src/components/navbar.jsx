import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/img/Logo_sukolilo.png';

const Navbar = () => {
    return (
        <div className='px-10 py-6 fixed top-0 w-full z-50'>
            <nav className="text-black">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-black text-lg font-bold">
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="h-8 mr-2" />
                        </div>
                    </div>
                    <ul className="flex space-x-5">
                        <li>
                            <a href="#" className="hover:text-gray-500">Beranda</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-500">Layanan</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-500">Profil Desa</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-500">Usaha Desa</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-500">Perangkat Desa</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-500">Kontak</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
