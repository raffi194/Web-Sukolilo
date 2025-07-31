import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import LocalVideoPlayer from "./LocalVideoPlayer";

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
  addOn,
  title1,
  description,
  className = "",
  children,
  clip,
  videoId,
  start = 0,
  end,
  textAlign = "center", // ⬅️ NEW
  justifyContent = "center",
}) => {
  return (
    <div className={`relative min-h-screen w-full overflow-hidden flex items-start justify-${justifyContent} pt-24 px-20 pb-16 sm:pt-32 sm:pb-32 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-blue-900 z-5 pointer-events-none" />
      {clip && (
        <div className="absolute inset-0 z-0">
          <LocalVideoPlayer videoFileName={videoId} />
        </div>
      )}

      {/* SVG Wave Overlay (White) */}
      <div className="absolute bottom-[-1px] left-0 w-full h-full pointer-events-none z-20 bg-transparent">
        <svg className="absolute bottom-[-1px] left-0 w-full h-auto" viewBox="0 0 1280 123" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 122V19.9723C118.988 59.0145 192.362 68.2817 345.283 42.9785C522.432 -8.57577 616.036 -17.2424 761.564 42.9785C861.022 71.3877 922.67 91.9819 1042.49 42.9785C1172.11 -0.893238 1222.01 3.27547 1280 49.9805V122H0Z"
            fill="white"
            stroke="white"
          />
        </svg>
      </div>

      {/* 🔥 Konten Hero */}
      <div className={`relative z-10 text-${textAlign} text-white right`}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          {addOn?.trim() && (
            <motion.p className="mt-4 md:mt-6 max-w-md md:max-w-2xl mx-auto text-xl md:text-lg lg:text-xl text-white font-semibold flex items-center gap-4" variants={itemVariants}>
              <svg width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="1.5" x2="40" y2="1.5" stroke="white" strokeWidth="2" />
              </svg>
              {addOn}
            </motion.p>
          )}

          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight" variants={itemVariants}>
            {title1}
          </motion.h1>
          <motion.p className="mt-4 md:mt-6 max-w-md md:max-w-2xl mx-auto text-base md:text-lg lg:text-lg text-white font-semibold" variants={itemVariants}>
            {description}
          </motion.p>

          {children && <motion.div variants={itemVariants}>{children}</motion.div>}
        </motion.div>
      </div>
    </div>
  );
};

Hero.propTypes = {
  title1: PropTypes.node.isRequired,
  description: PropTypes.node,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
};

export default Hero;
