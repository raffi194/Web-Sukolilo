import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ title1, title2, description, image }) => {
    return (
        <div className='text-center py-10 mb-50'
            style={{ backgroundImage: `url(${image})` }}>
            <h1 className='text-4xl font-bold'>{title1} <br />{title2}</h1>
            <p className='desc-hero pt-4'>{description}</p>
        </div>
    );
};

Hero.propTypes = {
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string
};

export default Hero;
