import Section from '../Section';
import React from 'react';

const BaganDesa = () => {
    return (
        <Section
            title={"Bagan Desa"}
            description={"Lihat susunan pemerintahan Desa Sukolilo yang bekerja bersama demi pelayanan terbaik bagi masyarakat."}
            bgColor={"#FFFFFF"}
        >
            <div className='mt-10 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4'>
                <img
                    src="src/assets/img/image 17.png"
                    alt="Bagan Desa"
                    className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
                />
                <img
                    src="src/assets/img/image 17.png"
                    alt="Bagan Desa"
                    className="w-full max-w-xs md:max-w-md lg:max-w-lg object-contain"
                />
            </div>
        </Section>
    );
};

export default BaganDesa;
