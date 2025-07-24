  import React from 'react';
  import PropTypes from 'prop-types';
  import { motion } from 'framer-motion';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const Hero = ({ title1, description, className, children }) => {
    return (
      <div className={`min-h-screen bg-white flex items-start justify-center text-center px-4 py-16 sm:py-32 ${className}`}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-[var(--black)]'
            variants={itemVariants}
          >
            {title1}
          </motion.h1>
          <motion.p
            className='desc-hero mt-4 md:mt-6 max-w-md md:max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-gray-700'
            variants={itemVariants}
          >
            {description}
          </motion.p>
          
          {children && (
                    <motion.div variants={itemVariants}>
                      {children}
                    </motion.div>
                  )}
        </motion.div>
      </div>
    );
  };

  Hero.propTypes = {
      title1: PropTypes.node.isRequired,
      description: PropTypes.node,
      className: PropTypes.string
  };

  export default Hero;