import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

const LongCard = () => {
    return (
        <div className='flex flex-col gap-10'>
            <div className='bg-white shadow-lg border-l-5 border-[#2F9CFF] px-5 mx-8 pt-6 pb-10 gap-1 flex flex-col items-start'>
                <FontAwesomeIcon icon={faTrophy} className='text-[rgb(47,156,255)] text-2xl pb-1' />
                <h3 className=''>Visi Kami</h3>
                <p className='desc'>Kami menjunjung tinggi semangat melayani dengan sepenuh hati, mengutamakan kebutuhan dan kesejahteraan setiap warga. Setiap langkah kami dilandasi ketulusan dan dedikasi.</p>
            </div>
            <div className='bg-white shadow-lg border-l-5 border-[#2F9CFF] px-5 mx-8 pt-6 pb-10 gap-1 flex flex-col items-start ml-70'>
                <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M29.1663 5.61114V6.47225C29.1663 6.58644 29.1166 6.69595 29.028 6.7767C28.9395 6.85744 28.8194 6.90281 28.6941 6.90281H27.2775V7.54864C27.2775 7.9053 26.9603 8.19447 26.5691 8.19447H3.43023C3.03905 8.19447 2.7219 7.9053 2.7219 7.54864V6.90281H1.30523C1.17999 6.90281 1.05988 6.85744 0.971318 6.7767C0.88276 6.69595 0.833008 6.58644 0.833008 6.47225V5.61114C0.833008 5.52596 0.86072 5.44269 0.912636 5.37188C0.964553 5.30106 1.03834 5.24588 1.12466 5.21331L14.8191 0.477195C14.9347 0.433546 15.0646 0.433546 15.1802 0.477195L28.8747 5.21331C28.961 5.24588 29.0348 5.30106 29.0867 5.37188C29.1386 5.44269 29.1663 5.52596 29.1663 5.61114V5.61114ZM27.7497 21.9723H2.24967C1.46726 21.9723 0.833008 22.5505 0.833008 23.2639V24.125C0.833008 24.2392 0.88276 24.3487 0.971318 24.4295C1.05988 24.5102 1.17999 24.5556 1.30523 24.5556H28.6941C28.8194 24.5556 28.9395 24.5102 29.028 24.4295C29.1166 24.3487 29.1663 24.2392 29.1663 24.125V23.2639C29.1663 22.5505 28.5321 21.9723 27.7497 21.9723ZM5.55523 9.05558V19.3889H3.43023C3.03905 19.3889 2.7219 19.6781 2.7219 20.0348V21.1111H27.2775V20.0348C27.2775 19.6781 26.9603 19.3889 26.5691 19.3889H24.4441V9.05558H20.6663V19.3889H16.8886V9.05558H13.1108V19.3889H9.33301V9.05558H5.55523Z" fill="#2F9CFF" />
                </svg>

                <h3 className=''>Misi Kami</h3>
                <p className='desc'>Kami menjunjung tinggi semangat melayani dengan sepenuh hati, mengutamakan kebutuhan dan kesejahteraan setiap warga. Setiap langkah kami dilandasi ketulusan dan dedikasi.</p>
            </div>
        </div>
    );
};

export default LongCard;
