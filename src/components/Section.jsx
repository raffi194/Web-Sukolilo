import React from 'react';

const Section = ({ title, description, bgColor, children, padBot }) => {
    return (
        <div
            className='text-center py-10 px-4 sm:px-6 md:px-10 lg:px-20'
            style={{
                backgroundColor: bgColor || "var(--clr-primary-1)",
                paddingBottom: padBot,
            }}
        >
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">{title}</h2>
            <p className='desc text-sm md:text-base lg:text-lg mb-6 max-w-4xl mx-auto'>
                {description}
            </p>
            <div>{children}</div>
        </div>
    );
};

export default Section;
