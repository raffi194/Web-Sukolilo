import React from 'react';
import { motion } from 'framer-motion';

const leftVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const rightVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MottoSection = () => {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          <motion.div
            className="md:w-1/2 text-center md:text-left border-r-4 border-[var(--clr-primary-5)] pl-8"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h2 className="text-4xl font-extrabold text-[var(--black)]">
              Sukolilo Damai (Dinamis, Agamis, Maju, Aman dan Indah)
            </h2>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <p className="text-lg leading-relaxed text-[var(--black)]">
              Kami menjunjung tinggi semangat melayani dengan sepenuh hati, mengutamakan kebutuhan dan kesejahteraan setiap warga. Setiap langkah kami dilandasi ketulusan dan dedikasi.
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default MottoSection;