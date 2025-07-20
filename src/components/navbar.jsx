import React from 'react';
import logo from '../assets/img/Logo_sukolilo.png';
import Navigation from './Navigation';

const Navbar = () => {
    return (
        <div className='px-10 py-6 top-0 w-full z-50 sticky bg-white'>
            <nav className="text-black">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-black text-lg font-bold">
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="h-8 mr-2" />
                        </div>
                    </div>
                    <ul className="flex space-x-5">
                        <li><Navigation linkTo="/" text="Beranda" /></li>
                        <li><Navigation linkTo="/layanan" text="Layanan" /></li>
                        <li><Navigation linkTo="/profil-desa" text="Profil Desa" /></li>
                        <li><Navigation linkTo="/usaha-desa" text="Usaha Desa" /></li>
                        <li><Navigation linkTo="/perangkat-desa" text="Perangkat Desa" /></li>
                        <li><Navigation linkTo="/kontak" text="Kontak" /></li>
                    </ul>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;
