import React from 'react';
import PropTypes from 'prop-types';
import Hero from "../components/Hero.jsx";
import LongCard from '../components/Profil/VisiMisi.jsx';
import SejarahDesa from '../components/Profil/SejarahDesa.jsx';

const Profil = () => {
    return (
        <div className='py-10 flex flex-col gap-10 background-color: var(--clr-primary-1)'>
            <Hero title1="Profil Desa Sukolilo" description="Melayani dengan Hati bersama Membangun Masyarakat Sejahtera" />
            <LongCard />
            <SejarahDesa />
        </div>
    );
};

export default Profil;
