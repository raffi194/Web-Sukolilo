import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import LocalVideoPlayer from "./LocalVideoPlayer";
import Carousel from "./Carousel.jsx";

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.3 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };

const Hero = ({ addOn, title1, description, children, clip, desktopVideo, mobileVideo, textAlign = "center", justifyContent = "center", className = "" }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => setIsMobile(window.innerWidth < 768);
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const finalVideoSrc = isMobile ? mobileVideo : desktopVideo;

  return (
    <div
      className={`relative min-h-[70vh] sm:min-h-screen w-full overflow-hidden flex items-start justify-${justifyContent} 
  pt-24 px-4 sm:px-8 md:px-20 
  pb-8 sm:pt-32 sm:pb-32 ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-l from-blue-500/20 to-blue-900 z-5 pointer-events-none" />

      {clip && finalVideoSrc && (
        <div className="absolute inset-0 z-0">
          <LocalVideoPlayer videoSrc={finalVideoSrc} />
        </div>
      )}

      {!clip && (
        <div className="absolute inset-0 z-0 overflow-hidden h-screen sm:h-full">
          <Carousel
            images={[
              "../src/assets/img/foto-usaha/Akasia Motor",
              "../src/assets/img/foto-usaha/Toko Bu Elly",
              "../src/assets/img/foto-usaha/Toko Bu Lutfia (Pulsa & LPG)",
              "../src/assets/img/foto-usaha/Toko Kopi 65155",
              "../src/assets/img/foto-usaha/Rujak Bu Suwarmi",
              "../src/assets/img/foto-usaha/Putra Sport",
              "../src/assets/img/foto-usaha/Toko Sembako Manis",
              "../src/assets/img/foto-usaha/Tambal Ban Pak Sadran"
            ]}
            interval={4000}
          />
        </div>
      )}

      <div className="absolute bottom-[-1px] left-0 w-full h-full pointer-events-none z-20 bg-transparent">
        <svg className="absolute bottom-[-1px] left-0 w-full h-auto" viewBox="0 0 1280 123" fill="white" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 122V19.9723C118.988 59.0145 192.362 68.2817 345.283 42.9785C522.432 -8.57577 616.036 -17.2424 761.564 42.9785C861.022 71.3877 922.67 91.9819 1042.49 42.9785C1172.11 -0.893238 1222.01 3.27547 1280 49.9805V122H0Z" fill="white" stroke="white" />
        </svg>
      </div>
      <div className={`relative z-10 text-${textAlign} text-white right ${addOn || children ? 'bottom-10' : 'top-10 md:top-20'} md:${addOn || children ? 'bottom-0' : 'top-20 md:top-20'}`}><motion.div variants={containerVariants} initial="hidden" animate="visible">
        {addOn?.trim() && (<motion.p className="mt-4 md:mt-6 max-w-md md:max-w-2xl mx-auto text-xl md:text-lg lg:text-xl text-white font-semibold flex items-center gap-4" variants={itemVariants}>
          <svg width="40" height="3" viewBox="0 0 40 3" fill="none" xmlns="http://www.w3.org/2000/svg"><line y1="1.5" x2="40" y2="1.5" stroke="white" strokeWidth="2" />
          </svg>{addOn}</motion.p>)}
        <motion.h1 className="text-4xl md:text-6xl font-bold leading-tight mt-4 md:mt-6 mx-auto max-w-md md:max-w-2xl" variants={itemVariants}>
          {title1}
        </motion.h1>
        <motion.p className="mt-4 md:mt-6 max-w-md md:max-w-2xl mx-auto text-base md:text-lg lg:text-lg text-white font-semibold" variants={itemVariants}>
          {description}
        </motion.p>{children && <motion.div variants={itemVariants}>{children}</motion.div>}</motion.div></div>
    </div>
  );
};

Hero.propTypes = {
  title1: PropTypes.node.isRequired,
  description: PropTypes.node,
  desktopVideo: PropTypes.string,
  mobileVideo: PropTypes.string,
  textAlign: PropTypes.oneOf(["left", "center", "right"]),
};

export default Hero;