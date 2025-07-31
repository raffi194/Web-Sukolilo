import React, { useState, useRef, useEffect } from 'react'; 
import logo from '../assets/img/Logo_sukolilo.png';
import Navigation from './Navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { text: "Beranda", linkTo: "/" },
    { text: "Layanan", linkTo: "/layanan" },
    { text: "Profil Desa", linkTo: "/profil-desa" },
    { text: "Usaha Desa", linkTo: "/usaha-desa" },
    { text: "Perangkat Desa", linkTo: "/perangkat-desa" }
];

const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
}

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
                setIsOpen(false); 
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]); 

    return (
        <div ref={navbarRef} className='sticky top-0 w-full z-50 bg-white shadow-md'>
            <nav className="text-black px-4 sm:px-10 py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="text-black text-lg font-bold">
                        <div className="flex items-center">
                            <img src={logo} alt="Logo" className="h-8 mr-2" />
                        </div>
                    </div>
                    <ul className="hidden md:flex items-center space-x-7">
                        {navLinks.map((link) => (
                            <li key={link.text}><Navigation linkTo={link.linkTo} text={link.text} /></li>
                        ))}
                    </ul>
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-2xl text-[var(--clr-primary-5)]" />
                        </button>
                    </div>
                </div>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="md:hidden bg-white shadow-lg absolute w-full"
                        variants={mobileMenuVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <ul className="flex flex-col items-center py-4 space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.text} className="w-full text-center">
                                    <Navigation
                                        linkTo={link.linkTo}
                                        text={link.text}
                                        isMobile={true}
                                        onClick={() => setIsOpen(false)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Navbar;