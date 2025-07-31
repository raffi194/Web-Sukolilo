import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStethoscope,
  faUserNurse,
  faShieldAlt,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

import gambarKontakPenting from "../../assets/img/Nomor Penting.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const kontakData = [
    { icon: faStethoscope, title: "Bidan Desa", description: "Hubungi nomor Bidan terdekat untuk meminta bantuan cepat", phone: "082138343704", name: "(Elisa)" },
    { icon: faUserNurse, title: "Perawat", description: "Hubungi nomor Perawat terdekat untuk meminta bantuan cepat", phone: "087860138253", name: "(Nazila)" },
    { icon: faShieldAlt, title: "Bhabinkamtibmas", description: "Hubungi nomor Bhabinkamtibmas terdekat untuk keamanan", phone: "081233998587", name: "(Hawa Rukmana)" },
    { icon: faComments, title: "Humas Desa", description: "Hubungi nomor Humas untuk informasi umum dan layanan", phone: "081249730337", name: "(Kantor)" },
];

const KontakPenting = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-[var(--black)]">
            Nomor Penting / Kontak Desa
          </h2>
          <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Jangan ragu untuk menghubungi kami melalui nomor atau kontak resmi
            Desa Sukolilo. Kami siap membantu menjawab{" "}
            <br className="hidden md:block" /> pertanyaan, memberikan informasi,
            serta melayani kebutuhan administrasi Anda dengan cepat dan ramah.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          <motion.div
            className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {kontakData.map((kontak, index) => (
              <motion.div
                key={index}
                className="group bg-[var(--white)] rounded-lg shadow-md p-6 flex flex-col hover:bg-[var(--clr-primary-5)] transition-colors duration-300"
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  zIndex: 10,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.1)",
                }}
              >
                <div className="bg-[var(--clr-primary-1)] text-[var(--clr-primary-5)] w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-[var(--white)] group-hover:text-[var(--clr-primary-5)] transition-colors duration-300">
                  <FontAwesomeIcon icon={kontak.icon} className="text-2xl" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[var(--black)] group-hover:text-[var(--white)] transition-colors duration-300">
                  {kontak.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2 flex-grow group-hover:text-gray-200 transition-colors duration-300">
                  {kontak.description}
                </p>
                <a
                  href={`tel:${kontak.phone}`}
                  className="mt-4 text-base md:text-lg font-bold text-[var(--clr-primary-5)] self-start group-hover:text-[var(--white)] transition-colors duration-300"
                >
                  {kontak.phone}{" "}
                  <span className="text-gray-500 font-medium group-hover:text-gray-200 transition-colors duration-300">
                    {kontak.name}
                  </span>
                </a>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="h-80 lg:h-full min-h-[400px] rounded-lg shadow-lg overflow-hidden">
              <img 
                src={gambarKontakPenting} 
                alt="Kontak Penting Desa Sukolilo"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KontakPenting;