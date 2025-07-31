import React, { useState, useEffect, useRef } from 'react';

const Timeline = () => {
    const [visibleItems, setVisibleItems] = useState(new Set());
    const [lineProgress, setLineProgress] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [mobileVisibleItems, setMobileVisibleItems] = useState(new Set());
    const timelineRef = useRef(null);
    const mobileItemRefs = useRef([]);

    // Timeline data array
    const timelineData = [
        {
            id: 1,
            year: "Sejarah awal",
            description: "Dalam bahasa Indonesia, Kajabung bermakna ‘mengambil kesempatan, atau menunggu pada suatu tempat’. Dalam Bahasa Jawa bernama nyanggong atau menunggu pada suatu tempat, atau bisa juga berarti menghadang gerombolan pengacau. Nama ini berasaldari kesimpulan PrasastiKajabung yang berpadudengan uraian informasi dari beberapa sesepuh."
        },
        {
            id: 2,
            year: "Menurut Arkeolog",
            description: "Dosen Universitas Negeri Malang, Dwi Cahyono juga berpendapat, kata Jabung yang menjadi nama Desa ini berasal dari kata Jebing. Kata ini bersumber dari Kitab Paseban Yuda. Dalam kitab tersebut, Jabung merupakan nama sebuah kepatihan dari tahun 760 Masehi. "
        },
        {
            id: 3,
            year: "Sesepuh Masyarakat",
            description: "Dalam versi lain, ada sumber lain yang merupakan cerita sesepuh masyarakat bernama Mbah Giran, menyebutan bahwa daerah Jabung dulunya menjadi markaspenjajah. Pada saat itu, daerah Jabung menjadi jalan penghubung antar wilayah penjajah. Jika direka-reka, kata Jabung berasal dari singkatan Jajah dan Hubung."
        },
        {
            id: 4,
            year: "Profil Desa",
            description: "Sukolilo berpenduduk >6.000 jiwa, luas 337,8 hektar, dan berada di ketinggian 600 mdpl. Desa ini jadi pusat pendidikan dan pemerintahan Kecamatan Jabung, serta memiliki banyak pabrik sebagai tempat kerja warga."
        },
        {
            id: 5,
            year: "Komoditas Unggulan",
            description: "Komoditas utama: padi, jagung, tebu, dan jeruk (berkualitas karena udara sejuk & irigasi lancar). Produk UMKM seperti kerupuk dan keripik telah dipasarkan secara nasional."
        }
    ];

    const gridColumnCount = timelineData.length;
    const timelineGridStyle = {
        gridTemplateColumns: `10px repeat(${gridColumnCount}, 500px) 200px`,
        gridTemplateRows: "auto auto auto",
    };

    // Desktop animation observer
    // Desktop per-item animation observer
    const desktopItemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const index = parseInt(entry.target.dataset.index);
                    const itemId = timelineData[index]?.id;

                    if (entry.isIntersecting && itemId && !visibleItems.has(itemId)) {
                        setVisibleItems(prev => {
                            const newSet = new Set([...prev, itemId]);
                            setLineProgress((newSet.size / timelineData.length) * 100);
                            return newSet;
                        });

                        observer.unobserve(entry.target); // Animate once
                    }
                });
            },
            { threshold: 0.3 }
        );

        desktopItemRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            desktopItemRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, [timelineData, visibleItems]);


    // Mobile animation observer
    useEffect(() => {
        const mobileObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const itemId = parseInt(entry.target.dataset.itemId);
                    if (entry.isIntersecting) {
                        // Add to visible items when entering viewport
                        setMobileVisibleItems(prev => new Set([...prev, itemId]));
                    } else {
                        // Remove from visible items when leaving viewport
                        setMobileVisibleItems(prev => {
                            const newSet = new Set(prev);
                            newSet.delete(itemId);
                            return newSet;
                        });
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: '0px 0px -100px 0px'
            }
        );

        // Observe all mobile timeline items
        mobileItemRefs.current.forEach((ref) => {
            if (ref) {
                mobileObserver.observe(ref);
            }
        });

        return () => {
            mobileItemRefs.current.forEach((ref) => {
                if (ref) {
                    mobileObserver.unobserve(ref);
                }
            });
        };
    }, []);

    return (
        <div className="overflow-x-auto w-full pb-10" ref={timelineRef}>
            {/* Desktop View */}
            <div className='hidden md:block'>
                <div
                    style={timelineGridStyle}
                    className="grid min-w-[1200px] relative pt-5 gap-x-10"
                >
                    {/* Timeline Line */}
                    <div
                        className="h-2 bg-blue-400 z-0 rounded-full self-center ml-[10%] transition-all duration-1000 ease-out"
                        style={{
                            gridColumn: `2 / ${gridColumnCount + 2}`,
                            gridRow: "1",
                            width: `${lineProgress}%`
                        }}
                    />
                    {/* Timeline Items */}
                    {timelineData.map((item, index) => {
                        const isVisible = visibleItems.has(item.id);
                        const animationDelay = `${index * 0.1}s`;
                        return (
                            <React.Fragment key={item.id}>
                                {/* Circle with number */}
                                <div
                                    ref={el => desktopItemRefs.current[index] = el}
                                    data-index={index}
                                    className={`w-16 h-16 z-10 text-center bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-2xl border-12 border-blue-200 transition-all duration-700 ease-out transform hover:scale-110 hover:shadow-lg ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-75'}`}
                                    style={{
                                        gridColumn: String(index + 2),
                                        gridRow: "1",
                                        justifySelf: "center",
                                        transitionDelay: animationDelay
                                    }}
                                >
                                    {item.id}
                                </div>
                                {/* Year badge */}
                                <div
                                    className={`mt-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-2 rounded-xl font-semibold shadow-lg text-center text-2xl transition-all duration-100 ease-out transform hover:scale-105 hover:shadow-xl ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                                        }`}
                                    style={{
                                        gridColumn: String(index + 2),
                                        gridRow: "2",
                                        justifySelf: "center",
                                        transitionDelay: `${0.2 + index * 0.1}s`
                                    }}
                                >
                                    {item.year}
                                </div>
                                {/* Description card */}
                                <div
                                    className={`bg-white mt-4 p-4 pb-20 rounded-xl shadow-md border border-gray-100 transition-all duration-700 ease-out transform hover:shadow-xl hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                                        }`}
                                    style={{
                                        gridColumn: String(index + 2),
                                        gridRow: "3",
                                        justifySelf: "center",
                                        transitionDelay: `${0.4 + index * 0.1}s`
                                    }}
                                >
                                    <p className="text-gray-700 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>

            {/* Mobile View */}
            <div className="block md:hidden">
                <div className="relative px-4">
                    {/* Vertical Timeline Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 rounded-full"></div>

                    {timelineData.map((item, index) => {
                        const isMobileVisible = mobileVisibleItems.has(item.id);
                        return (
                            <div
                                key={item.id}
                                className="relative flex items-start mb-12 last:mb-0"
                                ref={el => mobileItemRefs.current[index] = el}
                                data-item-id={item.id}
                            >
                                {/* Circle */}
                                <div className={`w-16 h-16 bg-gradient-to-br ml-[-15px] from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white font-bold text-2xl border-10 border-blue-200 shadow-lg z-10 flex-shrink-0 transition-all duration-700 ease-out transform ${isMobileVisible
                                    ? 'opacity-100 translate-x-0 scale-100'
                                    : 'opacity-0 -translate-x-8 scale-75'
                                    }`}>
                                    {item.id}
                                </div>

                                {/* Content */}
                                <div className="ml-6 flex-1 pt-2">
                                    {/* Year */}
                                    <div className={`bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold shadow-lg inline-block mb-3 text-xl transition-all duration-700 ease-out transform ${isMobileVisible
                                        ? 'opacity-100 translate-y-0 scale-100'
                                        : 'opacity-0 translate-y-4 scale-95'
                                        }`}
                                        style={{ transitionDelay: '200ms' }}>
                                        {item.year}
                                    </div>

                                    {/* Description */}
                                    <div className={`bg-white p-4 rounded-lg shadow-md text-gray-700 leading-relaxed transition-all duration-700 ease-out transform ${isMobileVisible
                                        ? 'opacity-100 translate-y-0 scale-100'
                                        : 'opacity-0 translate-y-6 scale-95'
                                        }`}
                                        style={{ transitionDelay: '400ms' }}>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Timeline;