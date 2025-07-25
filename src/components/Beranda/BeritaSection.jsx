import React, { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCalendarDay,
} from "@fortawesome/free-solid-svg-icons";

import gambarBerita1 from "../../assets/img/Logo_sukolilo.png";
import gambarBerita2 from "../../assets/img/image 17.png";
import gambarBerita3 from "../../assets/img/Logo_sukolilo.png";

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const beritaData = [
  { id: 1, kategori: "Pengumuman", judul: "Jadwal Posyandu Balita dan Lansia", penjelasan: "Pemberitahuan kepada seluruh warga mengenai jadwal kegiatan Posyandu untuk balita dan lansia.", tanggal: "20 Juli 2025", gambar: gambarBerita1 },
  { id: 2, kategori: "Pembangunan", judul: "Peresmian Jalan Usaha Tani Baru", penjelasan: "Infrastruktur baru ini diharapkan dapat mempermudah akses petani ke lahan dan meningkatkan hasil panen.", tanggal: "15 Juli 2025", gambar: gambarBerita2 },
  { id: 3, kategori: "Kegiatan Desa", judul: "Sukses Gelar Lomba 17-an Meriah", penjelasan: "Semarak kemerdekaan terasa di seluruh penjuru desa dengan berbagai lomba tradisional yang mempererat persaudaraan.", tanggal: "18 Agustus 2025", gambar: gambarBerita3 },
];

const BeritaCard = ({ berita, isActive }) => {
  return (
    <div className="flex flex-col md:flex-row bg-[var(--white)] h-full overflow-hidden ">
      <div className="w-full md:w-2/5 h-56 md:h-full overflow-hidden p-8 rounded-2xl relative">
        <motion.img
          src={berita.gambar}
          alt={berita.judul}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
      <div className="w-full md:w-3/5 p-4 md:p-6 lg:p-8 flex flex-col">
        <motion.div
          className="flex flex-col h-full"
          variants={contentVariants}
          animate={isActive ? "visible" : "hidden"}
          initial="hidden"
        >
          <motion.span variants={itemVariants} className="bg-[var(--clr-primary-5)] text-white text-xs font-bold px-3 py-1 rounded-md self-start">
            {berita.kategori}
          </motion.span>
          <motion.h3 variants={itemVariants} className="text-lg md:text-xl xl:text-2xl font-bold mt-3 text-gray-800">
            {berita.judul}
          </motion.h3>
          <motion.p variants={itemVariants} className="text-sm mt-2 text-gray-500 flex items-center gap-2">
            <FontAwesomeIcon icon={faCalendarDay} />
            {berita.tanggal}
          </motion.p>
          <motion.p variants={itemVariants} className="text-gray-600 mt-4 text-sm md:text-base line-clamp-3">
            {berita.penjelasan}
          </motion.p>
          <motion.a href="#" variants={itemVariants} className="mt-auto pt-4 text-[var(--clr-primary-5)] font-semibold self-start hover:underline">
            Baca Selengkapnya →
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};


  const BeritaSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  return (
    <section className="py-16 md:py-20 bg-[var(--clr-primary-1)] mx-10 rounded-2xl">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          variants={contentVariants}
          initial="hidden"  
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl xl:text-5xl font-bold text-[var(--black)]">
            Berita dan Pengumuman Desa Sukolilo
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-600 mt-2 text-base md:text-lg max-w-3xl mx-auto">
            Update terus kabar terbaru seputar kegiatan, prestasi, dan perkembangan Desa Sukolilo hanya di halaman Berita kami!
          </motion.p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="embla rounded-2xl shadow-xl" ref={emblaRef}>
            <div className="embla__container">
              {beritaData.map((berita, index) => (
                <div className="embla__slide" key={berita.id}>
                  <BeritaCard
                    berita={berita}
                    isActive={index === activeIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          <motion.div
            className="flex justify-center items-center gap-8 mt-6 md:mt-8"
            variants={contentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.button onClick={scrollPrev} className="bg-[var(--clr-primary-5)] text-white p-3 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300" variants={itemVariants} whileHover={{ scale: 1.1, y: -5, backgroundColor: "var(--clr-primary-4)" }} whileTap={{ scale: 0.9 }}>
              <FontAwesomeIcon icon={faArrowLeft} className="text-lg md:text-xl" />
            </motion.button>
            <motion.button onClick={scrollNext} className="bg-[var(--clr-primary-5)] text-white p-3 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors duration-300" variants={itemVariants} whileHover={{ scale: 1.1, y: -5, backgroundColor: "var(--clr-primary-4)" }} whileTap={{ scale: 0.9 }}>
              <FontAwesomeIcon icon={faArrowRight} className="text-lg md:text-xl" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeritaSection;