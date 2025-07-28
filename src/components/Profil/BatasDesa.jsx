import React, { useEffect, useRef } from 'react';
import Section from '../Section';
// import MapView from './MapView';

const BatasDesa = () => {
    const pembagianWilayah = [
        { judul: "Luas Desa", isi: "337,8 Hektar" },
        { judul: "Jumlah Penduduk", isi: "18 Juta Orang" },
    ];

    const mapRef = useRef(null);
    const contentRef = useRef(null);
    const titleRef = useRef(null);
    const directionCardsRef = useRef([]);
    const statsCardsRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.classList.remove('animate-out');
                }
            });
        }, observerOptions);

        // Observe elements
        if (mapRef.current) observer.observe(mapRef.current);
        if (contentRef.current) observer.observe(contentRef.current);
        if (titleRef.current) observer.observe(titleRef.current);

        directionCardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        statsCardsRef.current.forEach((card) => {
            if (card) observer.observe(card);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <Section
            title={"Batas Desa Sukolilo"}
            description={"Ketahui batas-batas wilayah Desa Sukolilo dengan jelas agar makin mengenal lingkungan sekitar Anda."}
        >
            <style jsx>{`
                /* Scroll-triggered animations */
                .scroll-fade-in {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .scroll-fade-in.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }

                .scroll-slide-left {
                    opacity: 0;
                    transform: translateX(-50px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .scroll-slide-left.animate-in {
                    opacity: 1;
                    transform: translateX(0);
                }

                .scroll-slide-right {
                    opacity: 0;
                    transform: translateX(50px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .scroll-slide-right.animate-in {
                    opacity: 1;
                    transform: translateX(0);
                }

                .scroll-scale-fade {
                    opacity: 0;
                    transform: scale(0.8) translateY(20px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .scroll-scale-fade.animate-in {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                }

                .scroll-rotate-fade {
                    opacity: 0;
                    transform: rotateY(45deg) translateY(20px);
                    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .scroll-rotate-fade.animate-in {
                    opacity: 1;
                    transform: rotateY(0deg) translateY(0);
                }

                /* Staggered animations */
                .direction-card-1 { transition-delay: 0s; }
                .direction-card-2 { transition-delay: 0.1s; }
                .direction-card-3 { transition-delay: 0.2s; }
                .direction-card-4 { transition-delay: 0.3s; }

                .stats-card-1 { transition-delay: 0s; }
                .stats-card-2 { transition-delay: 0.2s; }

                /* Hover animations */
                .direction-card {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .direction-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.2),
                        transparent
                    );
                    transition: left 0.5s;
                }

                .direction-card:hover::before {
                    left: 100%;
                }

                .direction-card:hover {
                    transform: translateY(-5px) scale(1.02);
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
                }

                .stats-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .stats-card:hover {
                    transform: translateY(-8px) scale(1.02);
                    box-shadow: 0 20px 40px rgba(47, 156, 255, 0.2);
                }

                .map-container {
                    position: relative;
                    overflow: hidden;
                    transition: all 0.3s ease;
                }

                .map-container::after {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: linear-gradient(
                        45deg,
                        transparent 30%,
                        rgba(47, 156, 255, 0.1) 50%,
                        transparent 70%
                    );
                    opacity: 0;
                    transition: opacity 0.3s ease;
                }

                .map-container:hover::after {
                    opacity: 1;
                }

                .map-container:hover {
                    transform: scale(1.02);
                }

                .map-container img {
                    transition: transform 0.5s ease;
                }

                .map-container:hover img {
                    transform: scale(1.05);
                }

                /* Pulse effect for stats */
                @keyframes pulse-glow {
                    0%, 100% {
                        box-shadow: 0 4px 15px rgba(47, 156, 255, 0.2);
                    }
                    50% {
                        box-shadow: 0 4px 25px rgba(47, 156, 255, 0.4);
                    }
                }

                .stats-card.animate-in {
                    animation: pulse-glow 2s ease-in-out infinite;
                    animation-delay: 1s;
                }

                /* Title animation */
                .title-text {
                    opacity: 0;
                    transform: translateY(-20px);
                    transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
                }

                .title-text.animate-in {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>

            <div className='flex flex-col lg:flex-row gap-10 items-center pt-8 lg:pt-8 px-4 md:px-10 pb-6'>
                {/* MAP IMAGE */}
                <div
                    ref={mapRef}
                    className='w-full lg:w-1/2 flex justify-center scroll-slide-left'
                >
                    <div className='map-container w-full max-w-md md:max-w-lg lg:max-w-xl rounded-lg overflow-hidden'>
                        <img
                            src="https://placehold.co/600x400"
                            alt="Peta Desa Sukolilo"
                            className='w-full h-auto rounded-lg'
                        />
                    </div>
                </div>

                {/* DESKRIPSI + DATA */}
                <div
                    ref={contentRef}
                    className='bg-white shadow-lg rounded-2xl w-full lg:w-1/2 scroll-slide-right'
                >
                    <div className='body-2-semibold p-6 sm:p-8 pb-0'>
                        <p
                            ref={titleRef}
                            className='text-left mb-4 title-text'
                        >
                            Batas Desa :
                        </p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-2 sm:px-6 pt-4'>
                            {["Utara", "Selatan", "Timur", "Barat"].map((arah, i) => (
                                <div
                                    key={i}
                                    ref={(el) => directionCardsRef.current[i] = el}
                                    className={`direction-card direction-card-${i + 1} text-left body-4-semibold p-4 bg-gray-50 rounded-lg cursor-pointer scroll-rotate-fade`}
                                >
                                    <span className='block font-semibold text-gray-800'>{arah}</span>
                                    <p className='desc mt-1 text-gray-600'>Desa Kemantren</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Data Penduduk & Luas */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-6 sm:px-8 pb-8 pt-6'>
                        {pembagianWilayah.map((wilayah, index) => (
                            <div
                                key={index}
                                ref={(el) => statsCardsRef.current[index] = el}
                                className={`stats-card stats-card-${index + 1} bg-white shadow-lg border-l-4 border-[#2F9CFF] px-4 py-4 flex flex-col items-start rounded-r-xl cursor-pointer scroll-scale-fade`}
                            >
                                <h3 className='desc mb-2 text-gray-600 transition-colors duration-300 hover:text-[#2F9CFF]'>
                                    {wilayah.judul}
                                </h3>
                                <p className='body-2-semibold text-gray-800 transition-all duration-300'>
                                    {wilayah.isi}
                                </p>
                                <div className='w-full h-0.5 bg-gradient-to-r from-[#2F9CFF] to-transparent mt-2 opacity-0 transition-opacity duration-300 hover:opacity-100' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default BatasDesa;