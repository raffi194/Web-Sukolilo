import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navigation = ({ linkTo, text }) => {
    return (
        <NavLink
            to={linkTo}
            className={({ isActive }) =>
                `relative pb-1 transition-all duration-300
        ${isActive ? 'font-bold text-black after:scale-x-100' : 'hover:text-gray-500'}
        after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1
        after:w-[120%] after:h-[3px] after:bg-blue-500 after:scale-x-0
        after:transition-transform after:origin-center`
            }
        >
            {text}
        </NavLink>
    );
};

Navigation.propTypes = {
    linkTo: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
};

export default Navigation;



