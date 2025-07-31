import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const layananData = [
    { title: "Pengajuan Surat Nikah Laki-Laki", requirements: ["Surat Pengantar RT dan RW", "Foto Copy KTP - 2 lembar", "Foto Copy Akta Lahir - 2 Lembar", "Foto Copy Kartu Keluarga - 2 Lembar", "Foto Copy Ijazah Terakhir - 2 Lembar", "Materai 10.000", "Pas Foto 3 x 3 - 2 Lembar", "Pas Foto 4 x 6 - 2 Lembar", "No Hp dan Email"] },
    { title: "Pengajuan Surat Nikah Perempuan", requirements: ["Surat Pengantar RT dan RW", "Foto Copy KTP - 2 lembar", "Foto Copy Akta Lahir - 2 Lembar", "Foto Copy Kartu Keluarga - 2 Lembar", "Foto Copy Ijazah Terakhir - 2 Lembar", "Materai 10.000", "Pas Foto 3 x 3 - 2 Lembar", "Pas Foto 4 x 6 - 2 Lembar", "No Hp dan Email"] },
    { title: "Akta Lahir", requirements: ["Surat keterangan kelahiran dari rumah sakit, dokter, bidan (ASLI)", "Buku nikah (ASLI)", "Kartu Keluarga (ASLI)", "KTP kedua orang tua (ASLI)", "Materai 10.000 (1)"] },
    { title: "Akta Kematian", requirements: ["Kartu keluarga almarhum (ASLI)", "KTP almarhum (ASLI)", "KTP pelapor (ASLI)", "Materai 10.000 (2)"] },
    { title: "Surat Keterangan Tidak Mampu", requirements: ["Surat Pengantar RT/RW", "KTP (ASLI)", "Kartu Keluarga (ASLI)"] },
    { title: "Kartu Tanda Penduduk Elektronik (e-KTP)", requirements: ["Mengisi formulir F1.02", "KK terbaru dan Benar (ASLI)"] },
    { title: "Surat Keterangan Penghasilan", requirements: ["Surat Pengantar RT/RW", "KTP (ASLI)", "Kartu Keluarga (ASLI)"] },
    { title: "Kartu Keluarga Baru", requirements: ["Buku Nikah (ASLI)", "Kutipan akta perceraian/menyerahkan SPTJM perkawinan (Apabila tidak ada buku nikah)", "Surat keterangan pindah (ASLI)", "Surat Bidan", "KTP-el"] },
    { title: "Perubahan Data Pada Kartu Keluarga Baru", requirements: ["KK lama (ASLI)", "Buku Nikah / surat cerai (ASLI)", "Bukti pendukung lainnya sesuai dengan perubahan data", "Surat keterangan lahir (JIKA ADA PENAMBAHAN ANGGOTA)", "Materai 10.000 (1)"] },
    { title: "Surat Keterangan Domisili", requirements: ["Surat Pengantar RT/RW", "KTP (ASLI)", "Kartu Keluarga (ASLI)"] },
    { title: "Surat Keterangan Usaha", requirements: ["Surat Pengantar RT/RW", "KTP (ASLI)", "Kartu Keluarga (ASLI)"] },
    { title: "Surat Keterangan Ahli Waris", requirements: ["Kartu Keluarga Almarhum (ASLI)", "KTP Almarhum (ASLI)", "Akta Kematian Almarhum", "Kartu Keluarga dan KTP Ahli Waris (ASLI)", "Surat Nikah Ahli Waris", "Materai 10.000 (1)"] },
];

const AccordionItem = ({ item, index, activeIndex, setActiveIndex }) => {
    const isOpen = index === activeIndex;
    return (
        <div className="bg-[var(--clr-primary-1)] rounded-lg shadow-sm">
            <button onClick={() => setActiveIndex(isOpen ? null : index)} className="w-full flex justify-between items-center text-left py-4 px-6 focus:outline-none cursor-pointer">
                <span className="text-base md:text-lg font-semibold text-[var(--black)]">{item.title}</span>
                <motion.div
                    className="bg-[var(--clr-primary-5)] text-white rounded-full w-7 h-7 flex items-center justify-center flex-shrink-0"
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <FontAwesomeIcon icon={faChevronDown} className="text-sm" />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{ open: { opacity: 1, height: "auto" }, collapsed: { opacity: 0, height: 0 } }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <ul className="list-disc pl-12 pr-6 pb-6 text-gray-700 space-y-2">
                            {item.requirements.map((req, i) => (<li key={i}>{req}</li>))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const KetentuanSurat = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[var(--black)]">
                        Ketentuan Pembuatan Surat
                    </h2>
                    <p className="text-gray-500 mt-2 text-base md:text-lg max-w-2xl mx-auto">
                        Selamat datang di bagian Pembuatan Surat website Desa Krisik! Kami hadir untuk memudahkan Anda dalam setiap langkah pembuatan surat yang Anda butuhkan. Di sini, kami menyediakan berbagai layanan pembuatan surat yang dirancang untuk memenuhi kebutuhan administrasi warga desa.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* PERBAIKAN: Menambahkan 'gap-4' untuk jarak vertikal antar item */}
                    <div className="flex flex-col gap-4">
                        {layananData.slice(0, 6).map((item, index) => (
                            <AccordionItem key={index} item={item} index={index} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                        ))}
                    </div>
                    <div className="flex flex-col gap-4">
                        {layananData.slice(6, 12).map((item, index) => (
                            <AccordionItem key={index + 6} item={item} index={index + 6} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KetentuanSurat;