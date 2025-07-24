import React from 'react';
import { motion } from 'framer-motion';

// Impor gambar untuk setiap perangkat desa
import gambarKades from "../../assets/img/image 17.png";
import gambarSekdes from "../../assets/img/image 17.png";

// Varian animasi
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

// Data perangkat desa
const perangkatData = [
  {
    nama: "Ahmad Subarjo, S.E.",
    jabatan: "Kepala Desa",
    gambar: gambarKades,
  },
  {
    nama: "Siti Aminah, S.Adm.",
    jabatan: "Sekretaris Desa",
    gambar: gambarSekdes,
  },
];

const PerangkatDesaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Judul dan Deskripsi */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[var(--black)]">
            Perangkat Desa Sukolilo
          </h2>
          <p className="text-gray-600 mt-2 text-base md:text-lg max-w-2xl mx-auto">
            Melayani dengan Hati bersama Membangun Masyarakat Sejahtera
          </p>
        </motion.div>

        {/* Kontainer fleksibel */}
        <motion.div
          className="flex justify-center flex-wrap gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {perangkatData.map((perangkat, index) => (
            <motion.div
              key={index}
              className="text-center w-full max-w-sm"
              variants={itemVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Gambar */}
              <div className="relative">
                <div className="overflow-hidden w-64 h-80 mx-auto">
                  <img
                    src={perangkat.gambar}
                    alt={`Foto ${perangkat.nama}`}
                    className="w-full h-full object-cover object-top rounded-tl-xl rounded-bl-xl rounded-br-xl"
                  />
                </div>
              </div>

              {/* Nama & Jabatan */}
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-[var(--black)]">
                  {perangkat.nama}
                </h3>
                <p className="text-[var(--clr-primary-5)] font-medium mt-1">
                  {perangkat.jabatan}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerangkatDesaSection;
