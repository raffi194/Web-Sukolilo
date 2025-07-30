import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import YouTubeClipPlayer from './YouTubeClipPlayer'; // ✅ import komponen YouTube loop kamu

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

const Hero = ({
  title1,
  description,
  className = '',
  children,
  videoId,
  start = 0,
  end
}) => {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-16 sm:py-32 ${className}`}>

      {/* 🔥 Background Video YouTube */}
      <div className="absolute inset-0 z-0">
        <YouTubeClipPlayer
          videoIdInp={videoId}
          startInp={start}
          endInp={end}
        />
      </div>

      {/* 🔥 Konten Hero */}
      <div className="relative z-10 text-center text-white">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight'
            variants={itemVariants}
          >
            {title1}
          </motion.h1>
          <motion.p
            className='mt-4 md:mt-6 max-w-md md:max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-white/80'
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
    </div>
  );
};

Hero.propTypes = {
  title1: PropTypes.node.isRequired,
  description: PropTypes.node,
  className: PropTypes.string
};

export default Hero;
