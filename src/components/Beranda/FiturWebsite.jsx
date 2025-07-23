import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserAlt, 
  faTv,
  faToolbox,
} from "@fortawesome/free-solid-svg-icons";

const fiturData = [
  {
    icon: faUserAlt, 
    title: "Profil Desa",
    description:
      "Kenali lebih dekat Desa Sukolilo Desa yang tumbuh dengan kearifan lokal dan semangat pembangunan berkelanjutan.",
  },
  {
    icon: faTv,
    title: "Layanan Desa",
    description:
      "Nikmati kemudahan mengakses berbagai layanan publik Desa Sukolilo cepat, transparan, dan tanpa ribet!",
  },
  {
    icon: faToolbox,
    title: "Usaha Desa",
    description:
      "Dukung produk lokal dan wirausaha kreatif Sukolilo jelajahi berbagai usaha desa yang berkembang dan membanggakan!",
  },
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const FiturWebsite = () => {
  return (
    <div className="pb-24">
      <div className="mx-10 sm:px-6 lg:px-8 py-12 bg-[var(--clr-primary-1)] rounded-3xl">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Fitur yang Disediakan Website Sukolilo
            </h2>
            <p className="text-gray-500 mt-2">
              Desa Sukolilo kini lebih dekat di genggaman Anda. Jelajahi layanan
              digital kami <br /> untuk kenyamanan dan kemajuan bersama.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fiturData.map((fitur, i) => (
              <motion.div
                key={i}
                className="bg-[var(--white)] rounded-lg shadow-lg p-8 text-left flex flex-col items-start border-b-4 border-[var(--clr-primary-5)]"
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={i}
              >
                <div className="bg-[var(--clr-primary-5)] text-[var(--white)] rounded-2xl p-3.5 mb-4">
                  <FontAwesomeIcon icon={fitur.icon} className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">
                  {fitur.title}
                </h3>
                <p className="text-gray-600">{fitur.description}</p>
                <a href="#" className="text-[var(--clr-primary-5)] font-semibold mt-4 underline hover:text-blue-700">
                  Read More
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiturWebsite;