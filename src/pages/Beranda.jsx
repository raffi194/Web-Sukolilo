import React from "react";
import Hero from "../components/Hero";
import BeritaSection from "../components/Beranda/BeritaSection.jsx";
import FiturWebsite from "../components/Beranda/FiturWebsite";
import MottoSection from "../components/Beranda/MottoSection";
import LayananSurat from "../components/Beranda/LayananSurat";
import KontakPenting from "../components/Beranda/KontakPenting.jsx";
import BatasDesa from "../components/Profil/BatasDesa.jsx";

import videoBerandaDesktop from "../assets/video/video beranda.mp4";
import videoBerandaMobile from "../assets/video/Beranda Mobile.mp4";

const Beranda = () => {
  return (
    <>
      <Hero
        title1={
          <>
            Selamat Datang di <br /> Website Desa Sukolilo
          </>
        }
        description={<>Kami percaya bahwa pelayanan terbaik lahir dari ketulusan. Bersama warga, kami terus bergerak membangun desa yang lebih mandiri, modern, dan sejahtera.</>}
        
        desktopVideo={videoBerandaDesktop}
        mobileVideo={videoBerandaMobile}

        clip={true}
        textAlign="left"
        addOn="Kabupaten Malang"
        justifyContent="start"
      />
      <main>
        <FiturWebsite />
        <MottoSection />
        <BeritaSection />
        <LayananSurat />
        <BatasDesa />
        <KontakPenting />
      </main>
    </>
  );
};

export default Beranda;
