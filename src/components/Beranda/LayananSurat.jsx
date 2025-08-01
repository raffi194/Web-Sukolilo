import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const jenisLayanan = [
  "Surat Keterangan",
  "Surat Permohonan KTP",
  "Surat Pengantar Pernikahan",
  "Surat Pengantar Perceraian",
  "Surat Keterangan Hubungan Keluarga",
  "Surat Keterangan Kelahiran",
  "Surat Keterangan Kematian",
  "Surat Keterangan Domisili Usaha",
  "Surat Keterangan Bepergian",
  "Kartu Keluarga",
  "Surat Pindah Tempat",
  "Surat Kuasa",
  "Surat Keterangan Tidak Mampu",
  "Surat Keterangan Ahli Waris",
  "Akta Kelahiran",
  "Akta Kematian",
  "Kartu Identitas Anak",
  "Perubahan Data di Pengadilan Negeri",
  "Rekomendasi Izin Keramaian Publik",
  "Surat Keterangan Domisili",
  "Surat Keterangan Lembaga",
  "Surat Izin Magang, KKN, Skripsi",
  "Undangan  Kegiatan Masyarakat",
];

const LayananSurat = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-gray-800">
            Layanan Pembuatan Surat
          </h2>
          <p className="text-gray-500 mt-2">
            Selamat datang di bagian Pembuatan Surat website Desa Krisik! Kami
            hadir untuk memudahkan Anda dalam setiap <br /> langkah pembuatan
            surat yang Anda butuhkan. Di sini, kami menyediakan berbagai layanan
            pembuatan surat yang <br /> dirancang untuk memenuhi kebutuhan
            administrasi warga desa.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeQlaeCNZA6sNVOxHB0mEfhUHDLjZHgR1uPXzFv0mzJeieMAQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-3 bg-[var(--clr-primary-5)] py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
          >
            <span className="text-[var(--clr-primary-1)] font-bold">
              Klik untuk Membuat Surat
            </span>

            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-xl text-[var(--clr-primary-5)]"
              />
            </div>
          </a>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div>
              <ul className="space-y-4">
                {jenisLayanan.slice(0, 12).map((layanan, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 12) * 0.1 }}
                  >
                    <div className="flex-shrink-0 bg-blue-100 text-[var(--clr-primary-5)] font-bold text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3">
                      {index + 1}
                    </div>
                    <span className="text-gray-700">{layanan}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <ul className="space-y-4">
                {jenisLayanan.slice(12, 23).map((layanan, index) => (
                  <motion.li
                    key={index + 12}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 bg-[var(--clr-primary-1)] text-[var(--clr-primary-5)] font-bold text-sm rounded-full w-6 h-6 flex items-center justify-center mr-3">
                      {index + 13}
                    </div>
                    <span className="text-gray-700">{layanan}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayananSurat;
