import React from 'react';
import PropTypes from 'prop-types';
import Hero from "../components/Hero.jsx";

const Profil = () => {
    return (
        <div className='py-10'>
            <Hero title1="Profil Desa Sukolilo" description="Melayani dengan Hati bersama Membangun Masyarakat Sejahtera" />
        </div>
    );
};

Profil.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export default Profil;
