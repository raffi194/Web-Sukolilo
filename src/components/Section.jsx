import React from 'react';

const Section = ({ title, description, bgColor, children }) => {
    return (
        <div
            className='text-center py-10'
            style={{ backgroundColor: bgColor || "var(--clr-primary-1)" }}
        >
            <h2>{title}</h2>
            <p className='desc'>{description}</p>
            <div>{children}</div>
        </div>
    );
};

export default Section;
