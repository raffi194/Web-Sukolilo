import React from 'react';
import Hero from "../components/Hero";
import LayananSurat from "../components/Beranda/LayananSurat";
import KetentuanSurat from '../components/Layanan/KetentuanSurat';
import TempatDiDesa from '../components/Layanan/TempatDiDesa';
import Pendidikan from '../components/Layanan/Pendidikan';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Layanan = () => {
    return (
        <div>
            <Hero
                title1={<>Layanan Desa Sukolilo</>}
                description={<>Melayani dengan Hati bersama Membangun Masyarakat Sejahtera</>}
            >
                <a
                    href="#"
                    className="mt-8 inline-flex items-center justify-center gap-3 bg-[var(--clr-primary-5)] py-3 px-8 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
                >
                    <span className="text-[var(--white)] font-bold">
                        Lihat Berkas Surat
                    </span>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <FontAwesomeIcon
                            icon={faArrowDown}
                            className="text-xl text-[var(--clr-primary-5)]"
                        />
                    </div>
                </a>
            </Hero>
            <LayananSurat />
            <KetentuanSurat />
            <TempatDiDesa />
            <Pendidikan />
        </div>
    );
}

export default Layanan;