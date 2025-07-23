import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className='body-3-semibold border-2 p-2 px-5 hover:bg-[#2F9CFF] hover:text-white transition-colors duration-100'
            style={{
                borderRadius: '30px',
                borderColor: 'var(--clr-primary-5)',
                cursor: 'pointer'
            }}>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

export default Button;