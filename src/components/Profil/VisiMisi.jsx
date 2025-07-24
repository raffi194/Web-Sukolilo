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

const VisiMisi = () => {
    return (
        <div className='flex flex-col gap-10'>
            {[1, 2].map((_, i) => (
                <motion.div
                    key={i}
                    className={`bg-white shadow-lg border-l-5 border-[#2F9CFF] px-5 mx-8 pt-6 pb-10 gap-1 flex flex-col items-start ${i === 1 ? 'ml-70' : ''}`}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    custom={i}
                    variants={cardVariant}
                >
                    {i === 0 ? (
                        <>
                            <FontAwesomeIcon icon={faTrophy} className='text-[rgb(47,156,255)] text-2xl pb-1' />
                            <h3 className=''>Visi Kami</h3>
                            <p className='desc'>Membangun Desa Sukolilo Dengan kebersamaan <br /> <br />
                                1. Kepala Desa akan melibatkan semua lembaga masyarakat untuk ikut berperandalam peningkatan pembangunan dan masyarakat turut berperan aktif. <br />
                                2. Kepala Desa mampu memutuskan sebuah keputusan secaraadil dikarenakan masyarakat secara sosial bersifat heterogen. <br />
                                3. Kepala Desa diharapkan mampu memanfaatkan kemampuanmasyarakatnya dalam berbagai bidang sesuai keahlian masing-masing : <br />
                                a. Bidang Keagamaan<br />
                                b. Bidang Kesenian<br />
                                c. Bidang Sosial<br />
                                d. Pembangunan Desa</p>
                        </>
                    ) : (
                        <>
                            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.1663 5.61114V6.47225C29.1663 6.58644 29.1166 6.69595 29.028 6.7767C28.9395 6.85744 28.8194 6.90281 28.6941 6.90281H27.2775V7.54864C27.2775 7.9053 26.9603 8.19447 26.5691 8.19447H3.43023C3.03905 8.19447 2.7219 7.9053 2.7219 7.54864V6.90281H1.30523C1.17999 6.90281 1.05988 6.85744 0.971318 6.7767C0.88276 6.69595 0.833008 6.58644 0.833008 6.47225V5.61114C0.833008 5.52596 0.86072 5.44269 0.912636 5.37188C0.964553 5.30106 1.03834 5.24588 1.12466 5.21331L14.8191 0.477195C14.9347 0.433546 15.0646 0.433546 15.1802 0.477195L28.8747 5.21331C28.961 5.24588 29.0348 5.30106 29.0867 5.37188C29.1386 5.44269 29.1663 5.52596 29.1663 5.61114V5.61114ZM27.7497 21.9723H2.24967C1.46726 21.9723 0.833008 22.5505 0.833008 23.2639V24.125C0.833008 24.2392 0.88276 24.3487 0.971318 24.4295C1.05988 24.5102 1.17999 24.5556 1.30523 24.5556H28.6941C28.8194 24.5556 28.9395 24.5102 29.028 24.4295C29.1166 24.3487 29.1663 24.2392 29.1663 24.125V23.2639C29.1663 22.5505 28.5321 21.9723 27.7497 21.9723ZM5.55523 9.05558V19.3889H3.43023C3.03905 19.3889 2.7219 19.6781 2.7219 20.0348V21.1111H27.2775V20.0348C27.2775 19.6781 26.9603 19.3889 26.5691 19.3889H24.4441V9.05558H20.6663V19.3889H16.8886V9.05558H13.1108V19.3889H9.33301V9.05558H5.55523Z" fill="#2F9CFF" />
                            </svg>
                            <h3 className=''>Misi Kami</h3>
                            <p className='desc'>
                                Pemerataan pembangunan dengan memanfaatkan sumber daya yang ada<br /><br />
                                1. Tetap mengedepankan unsur musyawarah untuk mencapai mufakat pada skala prioritas pembangunan Desa Sukolilo melalui forum musyawarah desa dan murenbangdes.<br />
                                2. Setiap kegiatan dan dalam menjaga transparansi dalam melaksanakan tugas dan tanggung jawabnya, kepala desa senantiasa melibatkan anggota masyarakat terutama berhubungan dengan infrastruktur atau sarana prasarana dan pengelolaan anggaran(melalui lembaga desa, LPMD, BPD, dan tokoh masyarakat)<br />
                                3. Juga untuk menjalankan roda pemerintahan desa, maka kepala desa dalam mengambil kebijakan senantiasa melalui forum dan dikawaloleh lembaga desa sesuai dengan tugas dan fungsi.<br />
                                4. Menggali potensiyang ada untuk bersama-sama membangun Desa Sukolilo untuk kebaikan dan kemajuan Desa Sukolilo.<br />
                                5. Pemanfaatan lingkungan yang ada untuk peningkatan kesejahteraan masyarakat.

                            </p>
                        </>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default VisiMisi;
