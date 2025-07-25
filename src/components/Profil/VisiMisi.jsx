import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

const textVariant = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.5,
            ease: "easeOut",
        },
    }),
};

const VisiMisi = () => {
    const visiPoints = [
        "Kepala Desa akan melibatkan semua lembaga masyarakat untuk ikut berperan dalam peningkatan pembangunan dan masyarakat turut berperan aktif.",
        "Kepala Desa mampu memutuskan sebuah keputusan secara adil dikarenakan masyarakat secara sosial bersifat heterogen.",
        "Kepala Desa diharapkan mampu memanfaatkan kemampuan masyarakatnya dalam berbagai bidang sesuai keahlian masing-masing :",
        "a. Bidang Keagamaan",
        "b. Bidang Kesenian",
        "c. Bidang Sosial",
        "d. Pembangunan Desa"
    ];

    const misiPoints = [
        "Tetap mengedepankan unsur musyawarah untuk mencapai mufakat pada skala prioritas pembangunan Desa Sukolilo melalui forum musyawarah desa dan Musyawarah Perencanaan Pembangunan Desa.",
        "Setiap kegiatan dan dalam menjaga transparansi dalam melaksanakan tugas dan tanggung jawabnya, kepala desa senantiasa melibatkan anggota masyarakat terutama berhubungan dengan infrastruktur atau sarana prasarana dan pengelolaan anggaran(melalui lembaga desa, LPMD, BPD, dan tokoh masyarakat)",
        "Juga untuk menjalankan roda pemerintahan desa, maka kepala desa dalam mengambil kebijakan senantiasa melalui forum dan dikawali oleh lembaga desa sesuai dengan tugas dan fungsi.",
        "Menggali potensi yang ada untuk bersama-sama membangun Desa Sukolilo untuk kebaikan dan kemajuan Desa Sukolilo.",
        "Pemanfaatan lingkungan yang ada untuk peningkatan kesejahteraan masyarakat."
    ];

    return (
        <div className='flex flex-col gap-6 md:gap-10'>
            {[0, 1].map((cardIndex) => (
                <motion.div
                    key={cardIndex}
                    className={`bg-white shadow-lg border-l-4 md:border-l-5 border-[#2F9CFF] px-4 md:px-5 mx-4 md:mx-8 pt-4 md:pt-6 pb-6 md:pb-10 gap-1 flex flex-col items-start ${cardIndex === 1 ? 'md:ml-70' : ''}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={cardIndex}
                    variants={cardVariant}
                >
                    {cardIndex === 0 ? (
                        <>
                            <FontAwesomeIcon icon={faTrophy} className='text-[rgb(47,156,255)] text-xl md:text-2xl pb-1' />
                            <motion.h3
                                className='text-lg md:text-xl font-semibold mb-2'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                custom={0}
                                variants={textVariant}
                            >
                                Visi Kami
                            </motion.h3>
                            <motion.p
                                className='desc text-sm md:text-base mb-3 font-medium'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                custom={1}
                                variants={textVariant}
                            >
                                Membangun Desa Sukolilo Dengan kebersamaan
                            </motion.p>
                            <div className="space-y-2 md:space-y-3">
                                {visiPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-sm md:text-base leading-relaxed"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        custom={index + 2}
                                        variants={textVariant}
                                    >
                                        {index < 3 ? `${index + 1}. ${point}` : point}
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <>
                            <svg width="24" height="20" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-[30px] md:h-[25px]">
                                <path d="M29.1663 5.61114V6.47225C29.1663 6.58644 29.1166 6.69595 29.028 6.7767C28.9395 6.85744 28.8194 6.90281 28.6941 6.90281H27.2775V7.54864C27.2775 7.9053 26.9603 8.19447 26.5691 8.19447H3.43023C3.03905 8.19447 2.7219 7.9053 2.7219 7.54864V6.90281H1.30523C1.17999 6.90281 1.05988 6.85744 0.971318 6.7767C0.88276 6.69595 0.833008 6.58644 0.833008 6.47225V5.61114C0.833008 5.52596 0.86072 5.44269 0.912636 5.37188C0.964553 5.30106 1.03834 5.24588 1.12466 5.21331L14.8191 0.477195C14.9347 0.433546 15.0646 0.433546 15.1802 0.477195L28.8747 5.21331C28.961 5.24588 29.0348 5.30106 29.0867 5.37188C29.1386 5.44269 29.1663 5.52596 29.1663 5.61114V5.61114ZM27.7497 21.9723H2.24967C1.46726 21.9723 0.833008 22.5505 0.833008 23.2639V24.125C0.833008 24.2392 0.88276 24.3487 0.971318 24.4295C1.05988 24.5102 1.17999 24.5556 1.30523 24.5556H28.6941C28.8194 24.5556 28.9395 24.5102 29.028 24.4295C29.1166 24.3487 29.1663 24.2392 29.1663 24.125V23.2639C29.1663 22.5505 28.5321 21.9723 27.7497 21.9723ZM5.55523 9.05558V19.3889H3.43023C3.03905 19.3889 2.7219 19.6781 2.7219 20.0348V21.1111H27.2775V21.1111H27.2775V20.0348C27.2775 19.6781 26.9603 19.3889 26.5691 19.3889H24.4441V9.05558H20.6663V19.3889H16.8886V9.05558H13.1108V19.3889H9.33301V9.05558H5.55523Z" fill="#2F9CFF" />
                            </svg>
                            <motion.h3
                                className='text-lg md:text-xl font-semibold mb-2'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                custom={0}
                                variants={textVariant}
                            >
                                Misi Kami
                            </motion.h3>
                            <motion.p
                                className='desc text-sm md:text-base mb-3 font-medium'
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                custom={1}
                                variants={textVariant}
                            >
                                Pemerataan pembangunan dengan memanfaatkan sumber daya yang ada
                            </motion.p>
                            <div className="space-y-2 md:space-y-3">
                                {misiPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        className="text-sm md:text-base leading-relaxed"
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        custom={index + 2}
                                        variants={textVariant}
                                    >
                                        {index + 1}. {point}
                                    </motion.div>
                                ))}
                            </div>
                        </>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default VisiMisi;