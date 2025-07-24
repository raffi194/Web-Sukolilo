import React, { useState } from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Button from "../components/Button";
import CardUsaha from "../components/Usaha/CardUsaha.jsx";
import CustomPagination from '../components/CustomPagination.jsx';

const paginateData = (items, currentPage, itemsPerPage) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return items.slice(startIndex, startIndex + itemsPerPage);
};

const Usaha = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    // Sample data untuk demo - ganti dengan data asli Anda
    const usahaData = [
        { id: 1, title: "Angkasa Motorcycle Tube 1", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 2, title: "Angkasa Motorcycle Tube 2", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 3, title: "Angkasa Motorcycle Tube 3", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 4, title: "Angkasa Motorcycle Tube 4", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 5, title: "Angkasa Motorcycle Tube 5", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 6, title: "Angkasa Motorcycle Tube 6", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 7, title: "Angkasa Motorcycle Tube 7", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 8, title: "Angkasa Motorcycle Tube 8", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 9, title: "Angkasa Motorcycle Tube 9", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 10, title: "Angkasa Motorcycle Tube 10", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 11, title: "Angkasa Motorcycle Tube 11", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 12, title: "Angkasa Motorcycle Tube 12", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 13, title: "Angkasa Motorcycle Tube 13", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 14, title: "Angkasa Motorcycle Tube 14", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 15, title: "Angkasa Motorcycle Tube 15", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 16, title: "Angkasa Motorcycle Tube 16", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
        { id: 17, title: "Angkasa Motorcycle Tube 17", description: "Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor.", address: "JL. Pegangsaan Timur No.65 Jakarta" },
    ];

    // Calculate total pages
    const totalPages = Math.ceil(usahaData.length / itemsPerPage);

    // Get current page items
    const currentItems = paginateData(usahaData, currentPage, itemsPerPage);

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

    return (
        <div className='py-10 flex flex-col gap-10'>
            <Hero title1="Usaha Desa Sukolilo" description="Melayani dengan Hati bersama Membangun Masyarakat Sejahtera" />
            <Section title="Katalog Usaha Desa Sukolilo"
                data-section="catalog"
                description="Selamat datang di bagian Pembuatan Surat website Desa Krisik! Kami hadir untuk memudahkan Anda dalam setiap langkah pembuatan surat yang Anda butuhkan. Di sini, kami menyediakan berbagai layanan pembuatan surat yang dirancang untuk memenuhi kebutuhan administrasi warga desa."
                bgColor="var(--clr-primary-1)"
            >

                <div className="flex flex-wrap justify-center items-center pt-5 gap-5">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            text={category.category}
                            onClick={() => alert(`Kategori ${category.category} diklik!`)}
                        />
                    ))}
                </div>

                <div className="py-15 flex flex-wrap justify-center items-start gap-15 mt-10">
                    {currentItems.map((item) => (
                        <CardUsaha
                            key={item.id}
                            image="src/assets/img/bengkel.png"
                            title={item.title}
                            description={item.description}
                            address={item.address}
                            linkTo="#"
                        />
                    ))}
                </div>

                <div className="flex self-center justify-center">
                    <CustomPagination
                        count={totalPages}
                        defaultPage={1}
                        page={currentPage}
                        onChange={handlePageChange}
                    />
                </div>

            </Section>

        </div>
    );
};

export default Usaha;