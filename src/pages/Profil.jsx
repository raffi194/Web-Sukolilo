import React from 'react';
import PropTypes from 'prop-types';
import Hero from "../components/Hero.jsx";
import VisiMisi from '../components/Profil/VisiMisi.jsx';
import SejarahDesa from '../components/Profil/SejarahDesa.jsx';
import BaganDesa from '../components/Profil/BaganDesa.jsx';
import BatasDesa from '../components/Profil/BatasDesa.jsx';
import PembagianWilayah from '../components/Profil/PembagianWilayah.jsx';

const Profil = () => {
    return (
        <div className='py-10 flex flex-col gap-10 background-color: var(--clr-primary-1)'>
            <Hero title1="Profil Desa Sukolilo" description="Melayani dengan Hati bersama Membangun Masyarakat Sejahtera" image="https://placehold.co/600x400" />
            <VisiMisi />
            <SejarahDesa />
            <BaganDesa />
            <BatasDesa />
            <PembagianWilayah />
        </div>
    );
};

export default Profil;
