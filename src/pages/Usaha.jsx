import React, { useState, useMemo } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Button from "../components/Button";
import CardUsaha from "../components/Usaha/CardUsaha.jsx";
import CustomPagination from '../components/CustomPagination.jsx';
import FetchCSVData from "../components/Usaha/FetchCSVData.jsx";
import SkeletonCard from "../components/Usaha/SkeletonCard.jsx";
import SearchBar from "../components/Usaha/SearchBar.jsx";

const paginateData = (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
};

const Usaha = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const [query, setQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);


    // Destructure the return value from FetchCSVData
    const { csvData, loading, error } = FetchCSVData();

    const usahaData = csvData.map(item => {
        return {
            title: item["Nama UMKM"],
            contact: item["No HP"],
            address: item["Jalan"],
            dusun: item["Dusun"],
            kategori: item["Kategori UMKM"],
            link: item["LINK GMAPS"]
        };
    });

    // Memoize filtered data
    const filteredData = useMemo(() => {
        return usahaData.filter(item => {
            const lowerQuery = query.toLowerCase();

            const matchesQuery =
                item.title.toLowerCase().includes(lowerQuery) ||
                item.dusun.toLowerCase().includes(lowerQuery) ||
                item.kategori.some(kat => kat.toLowerCase().includes(lowerQuery));

            const matchesCategory = selectedCategory
                ? item.kategori.some(kat => kat.toLowerCase() === selectedCategory.toLowerCase())
                : true;

            return matchesQuery && matchesCategory;
        });
    }, [usahaData, query, selectedCategory]);

    // Reset page when search query changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [query]);

    // Get paginated data from filtered results
    const currentItems = paginateData(filteredData, currentPage, itemsPerPage);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handleSearch = (searchValue) => {
        setQuery(searchValue);
    };

    // Handle page change
    const handlePageChange = (event, value) => {
        setCurrentPage(value);
        // Scroll ke section katalog usaha saja
        const catalogSection = document.querySelector('[data-section="catalog"]');
        if (catalogSection) {
            catalogSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    const categories = [
        {
            id: 1,
            category: "Elektronik"
        },
        {
            id: 2,
            category: "Fashion"
        },
        {
            id: 3,
            category: "Kuliner"
        },
        {
            id: 4,
            category: "Kerajinan"
        },
        {
            id: 5,
            category: "Properti"
        },
        {
            id: 6,
            category: "Warung/Kios"
        },
        {
            id: 7,
            category: "Bahan Makanan"
        },
        {
            id: 8,
            category: "Lainnya"
        },
    ];

    // Loading skeleton cards
    const LoadingCards = () => {
        return (
            <>
                {Array.from({ length: itemsPerPage }).map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </>
        );
    };

    // Error component
    const ErrorMessage = () => (
        <div className="w-full text-center py-10">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
                <h3 className="text-red-800 font-semibold mb-2">Gagal Memuat Data</h3>
                <p className="text-red-600 text-sm mb-4">
                    Terjadi kesalahan saat mengambil data usaha. Silakan coba lagi nanti.
                </p>
                <button
                    onClick={() => window.location.reload()}
                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors duration-200"
                >
                    Coba Lagi
                </button>
            </div>
        </div>
    );

    return (
        <div className='py-10 flex flex-col gap-10'>
            <Hero title1="Usaha Desa Sukolilo" description="Melayani dengan Hati bersama Membangun Masyarakat Sejahtera" />
            <Section title="Katalog Usaha Desa Sukolilo"
                data-section="catalog"
                description="Selamat datang di bagian Pembuatan Surat website Desa Sukolilo! Kami hadir untuk memudahkan Anda dalam setiap langkah pembuatan surat yang Anda butuhkan. Di sini, kami menyediakan berbagai layanan pembuatan surat yang dirancang untuk memenuhi kebutuhan administrasi warga desa."
                bgColor="var(--clr-primary-1)"
            >
                <div className="flex justify-center pt-5">
                    <SearchBar
                        value={query}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                </div>

                <div className="flex flex-wrap justify-center items-center pt-5 gap-5">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            text={category.category}
                            isActive={selectedCategory === category.category}
                            onClick={() =>
                                setSelectedCategory(prev =>
                                    prev === category.category ? null : category.category
                                )
                            }
                        />

                    ))}
                </div>

                <div className="pb-15 flex flex-wrap justify-center items-start gap-15 mt-10">
                    {error ? (
                        <ErrorMessage />
                    ) : loading ? (
                        <LoadingCards />
                    ) : (
                        currentItems.map((item, index) => (
                            <CardUsaha
                                key={`${item.title}-${index}`}
                                image="src/assets/img/bengkel.png"
                                title={item.title}
                                description={item.description}
                                address={item.address}
                                contact={item.contact}
                                linkTo={item.link}
                                categories={item.kategori}
                            />
                        ))
                    )}
                </div>

                {!loading && !error && usahaData.length > 0 && (
                    <div className="flex self-center justify-center">
                        <CustomPagination
                            count={totalPages}
                            defaultPage={1}
                            page={currentPage}
                            onChange={(_, page) => setCurrentPage(page)}
                        />
                    </div>
                )}

            </Section>

        </div>
    );
};

export default Usaha;