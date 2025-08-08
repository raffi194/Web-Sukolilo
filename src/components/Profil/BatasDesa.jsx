import React from 'react';
import { motion } from 'framer-motion';
import Section from '../Section'; 

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const BatasDesa = () => {
  const pembagianWilayah = [
    { judul: "Luas Desa", isi: "337,8 Hektar" },
    { judul: "Jumlah Penduduk", isi: "18 Juta Orang" },
  ];

  const batasDesa = [
    { arah: "Utara", batas: "Desa Kemantren" },
    { arah: "Selatan", batas: "Desa Pakisjajar" },
    { arah: "Barat", batas: "Desa Kemantren" },
    { arah: "Timur", batas: "Desa Sidomulyo" },
  ];

  return (
    <Section
      title={"Batas Wilayah Desa Sukolilo"}
      description={"Ketahui batas-batas wilayah Desa Sukolilo dengan jelas agar makin mengenal lingkungan sekitar Anda."}
    >
      <div className='flex flex-col lg:flex-row gap-8 lg:gap-12 items-center pt-8'>
        
        <motion.div 
          className='w-full lg:w-1/2'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className='w-full rounded-lg overflow-hidden shadow-2xl'>
            <img
              src="src/assets/img/desa sukolilo.JPG"
              alt="Peta Desa Sukolilo"
              className='w-full h-auto'
            />
          </div>
        </motion.div>

        <motion.div 
          className='w-full lg:w-1/2'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h3 variants={itemVariants} className='text-xl md:text-2xl text-left font-bold text-[var(--black)] mb-6'>
            Batas Desa Sukolilo:
          </motion.h3>

          <motion.div 
            className='grid grid-cols-1 sm:grid-cols-2 gap-4'
            variants={containerVariants} 
          >
            {batasDesa.map((item, i) => (
              <motion.div
                key={i}
                className="bg-white p-4 rounded-lg text-left shadow-md border-l-4 border-[var(--clr-primary-4)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                variants={itemVariants}
              >
                <span className='block font-semibold text-gray-800 text-base md:text-lg'>{item.arah}</span>
                <p className='mt-1 text-gray-600 text-sm md:text-base'>{item.batas}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'
            variants={containerVariants} 
          >
            {pembagianWilayah.map((wilayah, index) => (
              <motion.div
                key={index}
                className="bg-[var(--clr-primary-5)] text-white p-4 rounded-lg shadow-lg"
                variants={itemVariants}
              >
                <h3 className='text-base md:text-lg font-semibold text-gray-200'>
                  {wilayah.judul}
                </h3>
                <p className='text-2xl md:text-3xl font-bold mt-1'>
                  {wilayah.isi}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};

export default BatasDesa;