import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'; 
import { motion } from 'framer-motion';

const PengaduanSaran = () => {
  return (
    <motion.div
      className='fixed bottom-8 right-0 z-50' 
      initial={{ x: 212 }} 
      whileHover={{ x: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 200 }}
    >
      <a 
        href="https://www.instagram.com/raffi1__/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <div
          className={`w-[270px] bg-[var(--clr-primary-2)] shadow-xl border-4 border-[var(--clr-primary-5)] p-3 flex items-center overflow-hidden cursor-pointer h-14 rounded-l-2xl`}
        >
          <div className="flex-shrink-0 text-[var(--clr-primary-5)]">
            <FontAwesomeIcon icon={faUserEdit} className='text-2xl' />
          </div>
          
          <h3 
            className='ml-3 text-[var(--black)] whitespace-nowrap'
            style={{
              fontSize: 'var(--size-small)',
              fontWeight: 'var(--extra-bold)',
            }}
          >
            Pengaduan & Kotak Saran
          </h3>
        </div>
      </a>
    </motion.div>
  );
};

export default PengaduanSaran;