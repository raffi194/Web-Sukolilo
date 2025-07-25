import Section from '../Section';
import MapView from './MapView';
import React from 'react';

const PembagianWilayah = () => {
    const pembagianWilayah = [
        { judul: "RT 1 - RT 9", isi: "Kampung Anyar" },
        { judul: "RT 10 - RT 15", isi: "Gandon Barat" },
        { judul: "RT 16 - RT 22", isi: "Gandon Timur" },
        { judul: "RT 23 - RT 30", isi: "Bendo" }
    ];

    return (
        <Section
            title="Pembagian Wilayah Desa Sukolilo"
            description="Desa Sukolilo terbagi dalam wilayah-wilayah yang tertata rapi. Temukan detailnya untuk mengenal desa lebih dekat"
            bgColor={"#FFFFFF"}
        >
            <div className="w-full flex justify-center mt-6 px-4">
                <img
                    src='src/assets/img/peta.png'
                    alt="Peta Desa Sukolilo"
                    className="w-full max-w-[1349px] h-auto rounded-xl shadow-md object-contain"
                />
            </div>

            <MapView />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4 sm:px-6 md:px-10'>
                {pembagianWilayah.map((wilayah, index) => (
                    <div
                        key={index}
                        className='bg-white shadow-lg border-l-4 border-[#2F9CFF] px-6 py-4 flex flex-col items-start rounded-r-xl hover:shadow-xl transition-shadow duration-300'
                    >
                        <h3 className='text-lg font-semibold mb-2'>{wilayah.judul}</h3>
                        <p className='text-gray-600'>{wilayah.isi}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default PembagianWilayah;
