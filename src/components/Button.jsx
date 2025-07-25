import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, isActive }) => {
    return (
        <button
            onClick={onClick}
            className={`body-3-semibold border-2 p-2 px-5 rounded-full transition-colors duration-100 cursor-pointer ${isActive
                ? 'bg-[#2F9CFF] text-white border-[#2F9CFF]'
                : 'bg-transparent text-black hover:bg-[#2F9CFF] hover:text-white border-[var(--clr-primary-5)]'
                }`}
        >
            {text}
        </button>
    );
};


Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
};


export default Button;