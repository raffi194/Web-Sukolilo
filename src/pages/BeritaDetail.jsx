import React from 'react';
import { useParams, Link } from 'react-router-dom';
import FetchCSVNewsData from '../components/Beranda/FetchCSVNewsData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faSpinner, faExclamationTriangle, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const BeritaDetail = () => {
    const { id } = useParams();
    const { csvData: semuaBerita, loading, error } = FetchCSVNewsData();

    const formatDate = (dateString) => {
      if (!dateString) return "Tanggal tidak tersedia";
      try {
        const date = new Date(dateString);
        if (isNaN(date.getTime())) return dateString;
        return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' });
      } catch (e) {
        return dateString;
      }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <FontAwesomeIcon icon={faSpinner} className="text-4xl text-[var(--clr-primary-5)] animate-spin" />
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto text-center py-20">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-4xl text-red-500 mb-4" />
                <h1 className="text-2xl font-bold">Gagal memuat data.</h1>
                <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Kembali ke Beranda</Link>
            </div>
        );
    }

    const berita = semuaBerita.find(item => String(item.ID) === id);

    if (!berita) {
        return (
            <div className="container mx-auto text-center py-20">
                <h1 className="text-2xl font-bold">Berita tidak ditemukan.</h1>
                <Link to="/" className="text-blue-600 hover:underline mt-4 inline-block">Kembali ke Beranda</Link>
            </div>
        );
    }

    return (
        <section className="py-24">
            <div className="container mx-auto px-4">
                <motion.article 
                    className="max-w-4xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {berita["Tipe Berita"] && (
                        <motion.span variants={itemVariants} className="bg-[var(--clr-primary-5)] text-white text-sm font-bold px-3 py-1 rounded">
                            {berita["Tipe Berita"]}
                        </motion.span>
                    )}
                    <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-bold my-4 text-[var(--black)] leading-tight">
                        {berita.Judul}
                    </motion.h1>
                    <motion.p variants={itemVariants} className="text-gray-500 mb-8 flex items-center gap-2">
                        <FontAwesomeIcon icon={faCalendarDay} />
                        {formatDate(berita.Tanggal)}
                    </motion.p>
                    <motion.div variants={itemVariants} className="w-full h-auto max-h-[500px] object-cover rounded-lg shadow-lg mb-8 overflow-hidden">
                        <img 
                            src={berita.Gambar} 
                            alt={berita.Judul} 
                            className="w-full h-full object-cover" 
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className="prose lg:prose-xl max-w-none text-gray-700 leading-relaxed">
                        <p>{berita.Deskripsi}</p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                        <Link to="/" className="text-[var(--clr-primary-5)] hover:underline mt-12 inline-flex items-center gap-2 font-semibold">
                            <FontAwesomeIcon icon={faArrowLeft} />
                            <span>Kembali ke Beranda</span>
                        </Link>
                    </motion.div>
                </motion.article>
            </div>
        </section>
    );
};

export default BeritaDetail;