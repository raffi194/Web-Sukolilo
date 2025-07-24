import React from "react";
import Hero from "../components/Hero";
import BeritaSection from '../components/Beranda/BeritaSection.jsx';
import FiturWebsite from "../components/Beranda/FiturWebsite";
import MottoSection from "../components/Beranda/MottoSection";
import LayananSurat from "../components/Beranda/LayananSurat";
// import BatasDesa from "../components/Profil/BatasDesa.jsx";

const Beranda = () => {
    return (
        <>
            <Hero
                title1={<>Selamat Datang di <br /> Website Desa Sukolilo</>}
                description={<>Melayani dengan Hati bersama Membangun Masyarakat Sejahtera</>}
            />
            <main>
                <FiturWebsite />
                <MottoSection />
                <BeritaSection />
                <LayananSurat />
                {/* <BatasDesa /> */}
            </main>
        </>
    );
};

export default Beranda;
