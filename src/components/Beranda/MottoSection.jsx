import React from 'react';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
    },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1], 
    },
  },
};

const MottoSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-8 md:gap-12"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="md:w-1/2 text-center md:text-left border-b-4 md:border-b-0 md:border-r-4 border-[var(--clr-primary-5)] pb-8 md:pb-0 md:pr-8"
            variants={itemVariant}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[var(--black)] leading-tight">
              Sukolilo Damai (Dinamis, Agamis, Maju, Aman dan Indah)
            </h2>
          </motion.div>

          <motion.div
            className="md:w-1/2"
            variants={itemVariant}
          >
            <p className="text-base md:text-lg leading-relaxed text-gray-700">
              Kami menjunjung tinggi semangat melayani dengan sepenuh hati, mengutamakan kebutuhan dan kesejahteraan setiap warga. Setiap langkah kami dilandasi ketulusan dan dedikasi.
            </p>
          </motion.div>
          
        </motion.div>
      </div>
    </section>
  );
};

export default MottoSection;