import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'; 
import { motion } from 'framer-motion';

// Varian animasi untuk kontainer utama
const containerVariants = {
  collapsed: { 
    width: '3.5rem', 
    borderRadius: '9999px',
    scale: 1,
    // Mengubah transisi menjadi durasi dan easing
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } 
  },
  expanded: { 
    width: '270px', 
    borderRadius: '1.5rem',
    scale: 1.05,
    // Mengubah transisi menjadi durasi dan easing
    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
  },
};

// Varian animasi untuk teks
const textVariants = {
  collapsed: { 
    opacity: 0, 
    x: -20,
    transition: { duration: 0.2, ease: "easeOut" } 
  },
  expanded: { 
    opacity: 1, 
    x: 0, 
    // Mengubah transisi menjadi durasi dan easing
    transition: { delay: 0.2, duration: 0.3, ease: "easeOut" } 
  },
};

// Varian animasi untuk ikon
const iconVariants = {
  collapsed: {
    color: "var(--clr-primary-5)",
  },
  expanded: {
    color: "var(--clr-primary-4)",
    transition: { duration: 0.3 }
  }
}

const PengaduanSaran = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className='fixed bottom-8 right-8 z-50'>
      <a 
        href="https://www.instagram.com/raffi1__/" 
        target="_blank" 
        rel="noopener noreferrer"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <motion.div
          className={`bg-[var(--clr-primary-2)] shadow-xl border-4 border-[var(--clr-primary-5)] p-3 flex items-center overflow-hidden cursor-pointer h-14`}
          variants={containerVariants}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          initial="collapsed"
          whileTap={{ scale: 0.95 }}
        >
          <motion.div
            variants={iconVariants}
            className="flex-shrink-0"
          >
            <FontAwesomeIcon icon={faUserEdit} className='text-2xl' />
          </motion.div>
          
          <motion.h3 
            className='ml-3 text-[var(--black)] whitespace-nowrap'
            style={{
              fontSize: 'var(--size-small)',
              fontWeight: 'var(--extra-bold)',
            }}
            variants={textVariants}
          >
            Pengaduan & Kotak Saran
          </motion.h3>
        </motion.div>
      </a>
    </div>
  );
};

export default PengaduanSaran;