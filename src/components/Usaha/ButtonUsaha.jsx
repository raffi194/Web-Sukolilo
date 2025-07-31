import React from 'react';
import PropTypes from 'prop-types';

const ButtonUsaha = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className='
        body-4-semibold 
        mb-3 
        border-2 
        rounded-[20px] 
        p-3 
        px-12 
        w-full 
        sm:w-auto
        sm:text-lg
    '
            style={{
                backgroundColor: 'var(--clr-primary-5)',
                borderColor: 'var(--clr-primary-5)',
                color: 'white',
                transition: 'all 0.1s ease',
                cursor: 'pointer',
                boxShadow: '0 4px 4px 0px rgba(2, 74, 161, 1)'
            }}
            onMouseOver={(e) => {
                e.target.style.backgroundColor = 'var(--hover-bg)';
                e.target.style.color = 'var(--clr-primary-5)';
            }}
            onMouseOut={(e) => {
                e.target.style.backgroundColor = 'var(--clr-primary-5)';
                e.target.style.color = 'white';
            }}
        >
            {text}
        </button>
    );
};

ButtonUsaha.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default ButtonUsaha;