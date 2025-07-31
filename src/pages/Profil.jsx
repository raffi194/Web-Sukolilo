import React from "react";
import Hero from "../components/Hero";
import VisiMisi from "../components/Profil/VisiMisi.jsx";
import SejarahDesa from "../components/Profil/SejarahDesa.jsx";
import BaganDesa from "../components/Profil/BaganDesa.jsx";
import BatasDesa from "../components/Profil/BatasDesa.jsx";
import PembagianWilayah from "../components/Profil/PembagianWilayah.jsx";
import JumlahKK from "../components/Profil/JumlahKK.jsx";

import desktopVideoFile from '../assets/video/profil video.mp4';
import mobileVideoFile from '../assets/video/Profile Mobile.mp4';

const Profil = () => {
  return (
    <div className="pb-10 flex flex-col gap-10 background-color: [var(--clr-primary-1)]">
      <Hero
        title1="Profil Desa Sukolilo"
        description="Melayani dengan Hati bersama Membangun Masyarakat Sejahtera"

        desktopVideo={desktopVideoFile}
        mobileVideo={mobileVideoFile}
        clip={true}
      />
      <VisiMisi />
      <SejarahDesa />
      <BaganDesa />
      {/* <BatasDesa /> */}
      <PembagianWilayah />
      <JumlahKK />
    </div>
  );
};

export default Profil;