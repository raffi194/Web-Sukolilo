import React from 'react';
import Hero from '../components/Hero';
import PengaduanSaran from '../components/Beranda/PengaduanSaran';
import FiturWebsite from '../components/Beranda/FiturWebsite';
import MottoSection from '../components/Beranda/MottoSection';
// import BeritaSection from '../components/Beranda/BeritaSection';
import LayananSurat from '../components/Beranda/LayananSurat';
import BatasDesa from '../components/Profil/BatasDesa.jsx';

const Beranda = () => {
    return (
        <div className='flex flex-col'>
            <div className="h-screen text-center flex items-center justify-center">
                <Hero title1={<>Selamat Datang di <br /> Website Desa Sukolilo</>} description={<>Melayani dengan Hati bersama Membangun Masyarakat Sejahtera</>} />
            </div>
            <PengaduanSaran />
            <FiturWebsite />
            <MottoSection />
            {/* <BeritaSection /> */}
            <LayananSurat />
            <BatasDesa />
        </div>
    );
};

export default Beranda;