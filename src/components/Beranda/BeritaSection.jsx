import React, { useRef, useState, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faCalendarDay } from '@fortawesome/free-solid-svg-icons';

import gambarBerita1 from '../../assets/img/Logo_sukolilo.png'; 

// Varian animasi untuk kontainer teks di dalam slide
const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Jeda antar animasi item teks
      delayChildren: 0.2,
    },
  },
};

// Varian animasi untuk setiap item teks
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const beritaData = [
    { id: 1, kategori: "Pengumuman", judul: "Jadwal Posyandu Balita dan Lansia Bulan Agustus 2025", penjelasan: "Pemberitahuan kepada seluruh warga mengenai jadwal kegiatan Posyandu untuk balita dan lansia. Pastikan untuk hadir demi menjaga kesehatan keluarga dan komunitas kita bersama.", tanggal: "20 Juli 2025", gambar: gambarBerita1 },
    { id: 2, kategori: "Pembangunan", judul: "Peresmian Jalan Usaha Tani untuk Tingkatkan Produktivitas", penjelasan: "Pemerintah Desa Sukolilo telah meresmikan jalan usaha tani baru. Infrastruktur ini diharapkan dapat mempermudah akses petani ke lahan dan meningkatkan hasil panen secara signifikan.", tanggal: "15 Juli 2025", gambar: gambarBerita1 },
    { id: 3, kategori: "Kegiatan Desa", judul: "Sukses Gelar Lomba 17-an, Warga Sukolilo Tumpah Ruah", penjelasan: "Semarak kemerdekaan terasa di seluruh penjuru desa. Berbagai lomba tradisional berhasil menarik antusiasme tinggi dari anak-anak hingga orang dewasa, mempererat tali persaudaraan.", tanggal: "18 Agustus 2025", gambar: gambarBerita1 },
];

const BeritaCard = ({ berita }) => {
  const { isActive } = useSwiperSlide();
  return (
    <div className="flex flex-col md:flex-row bg-[var(--white)] h-auto md:h-80 overflow-hidden">
      <div className="w-full md:w-2/5 h-64 md:h-full overflow-hidden">
        <motion.img src={berita.gambar} alt={berita.judul} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ duration: 0.4, ease: "easeOut" }} />
      </div>
      <div className="w-full md:w-3/5 p-6 flex flex-col">
        <motion.div className="flex flex-col h-full" variants={contentVariants} animate={isActive ? "visible" : "hidden"} initial="hidden">
          <motion.span variants={itemVariants} className="bg-[var(--clr-primary-5)] text-white text-xs font-bold px-3 py-1 rounded self-start">{berita.kategori}</motion.span>
          <motion.h3 variants={itemVariants} className="text-xl lg:text-2xl font-bold mt-3 text-gray-800">{berita.judul}</motion.h3>
          <motion.p variants={itemVariants} className="text-sm mt-2 text-gray-500 flex items-center gap-2"><FontAwesomeIcon icon={faCalendarDay} />{berita.tanggal}</motion.p>
          <motion.p variants={itemVariants} className="text-gray-600 mt-4 text-base line-clamp-3">{berita.penjelasan}</motion.p>
          <motion.a href="#" variants={itemVariants} className="mt-auto text-[var(--clr-primary-5)] font-semibold self-start hover:underline">Baca Selengkapnya →</motion.a>
        </motion.div>
      </div>
    </div>
  );
};

const BeritaSection = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    if (swiperInstance && swiperInstance.params) {
      swiperInstance.params.navigation.prevEl = navigationPrevRef.current;
      swiperInstance.params.navigation.nextEl = navigationNextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="py-20 bg-[var(--clr-primary-1)] mx-11 rounded-3xl">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-gray-800">
            Berita dan Pengumuman Desa
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-500 mt-2">
            Update terus kabar terbaru seputar kegiatan, prestasi, dan perkembangan Desa Sukolilo <br /> hanya di halaman Berita kami!
          </motion.p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="w-full rounded-2xl shadow-xl"
            onSwiper={setSwiperInstance}
          >
            {beritaData.map((berita) => (
              <SwiperSlide key={berita.id}>
                <BeritaCard berita={berita} />
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* === AWAL PERUBAHAN ANIMASI TOMBOL NAVIGASI === */}
          <motion.div 
            className="flex justify-center items-center gap-8 mt-8"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.button 
              ref={navigationPrevRef} 
              className="bg-[var(--clr-primary-5)] text-white p-3 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5, backgroundColor: "var(--clr-primary-4)" }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faArrowLeft} className='text-xl' />
            </motion.button>
            <motion.button 
              ref={navigationNextRef} 
              className="bg-[var(--clr-primary-5)] text-white p-3 w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5, backgroundColor: "var(--clr-primary-4)" }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faArrowRight} className='text-xl' />
            </motion.button>
          </motion.div>
          {/* === AKHIR PERUBAHAN ANIMASI TOMBOL NAVIGASI === */}
        </div>
      </div>
    </div>
  );
};

export default BeritaSection;