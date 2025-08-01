import React, { useRef, useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay"; 
import { motion } from "framer-motion";
import FetchCSVNewsData from "./FetchCSVNewsData";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faCalendarDay,
  faSpinner,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";

import defaultImage from "../../assets/img/Logo_sukolilo.png";
import bgImage from '../../assets/img/Berita Acara BG.png';

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

 const truncateText = (text, limit) => {
      if (!text) return "";
      const words = text.split(" ");
      if (words.length > limit) {
        return words.slice(0, limit).join(" ") + "...";
      }
      return text;
    };

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const BeritaCard = ({ berita, isActive }) => {
    const [imageError, setImageError] = useState(false);
    const [imageLoading, setImageLoading] = useState(true);
    const handleImageError = () => { setImageError(true); setImageLoading(false); };
    const handleImageLoad = () => { setImageLoading(false); };
    const formatDate = (dateString) => {
      if (!dateString) return "Tanggal tidak tersedia";
      try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
      } catch (error) {
        return dateString;
      }
    };
    return (
        <div className="flex flex-col md:flex-row bg-white h-full overflow-hidden shadow-lg rounded-2xl">
            <div className="w-full md:w-2/5 h-56 md:h-full overflow-hidden relative">
                {imageLoading && (<div className="absolute inset-0 flex items-center justify-center bg-gray-100"><FontAwesomeIcon icon={faSpinner} className="text-gray-400 text-2xl animate-spin" /></div>)}
                <motion.img src={berita.Gambar} alt={berita.Judul || "Berita"} className="w-full h-full object-cover" onError={handleImageError} onLoad={handleImageLoad} whileHover={{ scale: 1.05 }} transition={{ duration: 0.4, ease: "easeOut" }} style={{ display: imageLoading ? 'none' : 'block' }} />
            </div>
            <div className="w-full md:w-3/5 p-4 md:p-6 lg:p-8 flex flex-col">
                <motion.div className="flex flex-col h-full" variants={contentVariants} animate={isActive ? "visible" : "hidden"} initial="hidden">
                    {berita["Tipe Berita"] && (<motion.span variants={itemVariants} className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-md self-start mb-2">{berita["Tipe Berita"]}</motion.span>)}
                    <motion.h3 variants={itemVariants} className="text-lg md:text-xl xl:text-2xl font-bold mt-1 text-gray-800 leading-tight">{berita.Judul || "Judul tidak tersedia"}</motion.h3>
                    <motion.p variants={itemVariants} className="text-sm mt-3 text-gray-500 flex items-center gap-2"><FontAwesomeIcon icon={faCalendarDay} />{formatDate(berita.Tanggal)}</motion.p>
                    <motion.p 
                      variants={itemVariants} 
                      className="text-gray-600 mt-4 text-sm md:text-base flex-grow"
                    >
                        {truncateText(berita.Deskripsi || "Deskripsi tidak tersedia", 15)}
                    </motion.p>
                    <motion.div variants={itemVariants} className="mt-auto pt-4 self-start">
                      <Link
                        to={`/berita/${berita.ID}`}
                        className="text-blue-600 font-semibold hover:underline hover:text-blue-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded px-1"
                        aria-label={`Baca selengkapnya tentang ${berita.Judul}`}
                      >
                        Baca Selengkapnya →
                      </Link>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};
const LoadingState = () => (<div className="flex items-center justify-center py-20"><div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-4xl text-blue-600 animate-spin mb-4" /><p className="text-gray-600">Memuat berita...</p></div></div>);
const ErrorState = ({ error, onRetry }) => (<div className="flex items-center justify-center py-20"><div className="text-center"><FontAwesomeIcon icon={faExclamationTriangle} className="text-4xl text-red-500 mb-4" /><p className="text-gray-600 mb-4">Gagal memuat berita: {error}</p><button onClick={onRetry} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">Coba Lagi</button></div></div>);
const EmptyState = () => (<div className="flex items-center justify-center py-20"><div className="text-center"><p className="text-gray-600 text-lg">Belum ada berita tersedia</p></div></div>);


const BeritaSection = () => {
  const { csvData: beritaData, loading, error } = FetchCSVNewsData();
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: beritaData.length > 1,
      align: 'center',
      skipSnaps: false,
    },
    [
      Autoplay({
        delay: 5000, 
        stopOnInteraction: true,  
        stopOnMouseEnter: true, 
      }),
    ]
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setActiveIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);

    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);
  
  useEffect(() => {
    const handleKeyDown = (event) => {
        if (event.key === 'ArrowLeft') { scrollPrev(); }
        else if (event.key === 'ArrowRight') { scrollNext(); }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
}, [scrollPrev, scrollNext]);

const handleRetry = () => { window.location.reload(); };

return (
    <section className="py-16 md:py-20 bg-[var(--clr-primary-1)] mx-4 md:mx-10 rounded-2xl" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="container mx-auto px-4">
            <motion.div className="text-center mb-12" variants={contentVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">Berita dan Pengumuman Desa Sukolilo</motion.h2>
                <motion.p variants={itemVariants} className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">Update terus kabar terbaru seputar kegiatan, prestasi, dan perkembangan Desa Sukolilo hanya di halaman Berita kami!</motion.p>
            </motion.div>
            <div className="relative max-w-6xl mx-auto">
                {loading && <LoadingState />}
                {error && !loading && <ErrorState error={error} onRetry={handleRetry} />}
                {!loading && !error && beritaData.length === 0 && <EmptyState />}
                {!loading && !error && beritaData.length > 0 && (
                    <>
                        <div className="embla rounded-2xl overflow-hidden" ref={emblaRef}>
                            <div className="embla__container">
                                {beritaData.map((berita, index) => (
                                    <div className="embla__slide" key={berita.ID || index}>
                                        <BeritaCard berita={berita} isActive={index === activeIndex} />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {beritaData.length > 1 && (
                            <>
                                <motion.div className="flex justify-center items-center gap-8 mt-6 md:mt-8" variants={contentVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
                                    <motion.button onClick={scrollPrev} disabled={!canScrollPrev} className={`p-3 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${canScrollPrev ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} variants={itemVariants} whileHover={canScrollPrev ? { scale: 1.1, y: -2 } : {}} whileTap={canScrollPrev ? { scale: 0.9 } : {}} aria-label="Berita sebelumnya">
                                        <FontAwesomeIcon icon={faArrowLeft} className="text-xl" />
                                    </motion.button>
                                    <motion.button onClick={scrollNext} disabled={!canScrollNext} className={`p-3 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${canScrollNext ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`} variants={itemVariants} whileHover={canScrollNext ? { scale: 1.1, y: -2 } : {}} whileTap={canScrollNext ? { scale: 0.9 } : {}} aria-label="Berita selanjutnya">
                                        <FontAwesomeIcon icon={faArrowRight} className="text-xl" />
                                    </motion.button>
                                </motion.div>
                                <div className="flex justify-center mt-6 gap-2">
                                    {beritaData.map((_, index) => (
                                        <button key={index} onClick={() => emblaApi?.scrollTo(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'}`} aria-label={`Pergi ke berita ${index + 1}`} />
                                    ))}
                                </div>
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    </section>
);

};

export default BeritaSection;