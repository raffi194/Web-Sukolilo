import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, description, bgColor, children, padBot, rounded, bgImage }) => {
    return (
        <motion.div
            className={`text-center py-10 px-4 sm:px-6 ${rounded ?? ""}`}
            style={{
                backgroundColor: bgColor || "var(--clr-primary-1)",
                paddingBottom: padBot,
                backgroundImage: bgImage,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}

            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: false }}
        >
            <motion.h2
                className="text-2xl md:text-3xl font-semibold mb-4"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                viewport={{ once: false }}
            >
                {title}
            </motion.h2>

            <motion.p
                className='desc text-sm md:text-base lg:text-lg mb-6 max-w-4xl mx-auto'
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: false }}
            >
                {description}
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                viewport={{ once: false }}
            >
                {children}
            </motion.div>
        </motion.div>
    );
};

export default Section;
