import Section from '../Section';
import React from 'react';
import Timeline from './Timeline';

const BaganDesa = () => {
    return (
        <Section title={"Bagan Desa"} description={"Lihat susunan pemerintahan Desa Sukolilo yang bekerja bersama demi pelayanan terbaik bagi masyarakat."} bgColor={"#FFFFFF"}>
            <div className='mt-10 flex justify-center gap-40 max-h-auto'>
                <img src="src/assets/img/image 17.png" alt="Bagan Desa" />
                <img src="src/assets/img/image 17.png" alt="Bagan Desa" />
            </div>
        </Section >
    );
};

export default BaganDesa;

