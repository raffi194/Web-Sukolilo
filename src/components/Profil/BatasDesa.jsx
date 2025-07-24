import Section from '../Section';
// import MapView from './MapView'; // Keeping this commented out as per your original code

const BatasDesa = () => {
    const pembagianWilayah = [
        {
            judul: "Luas Desa",
            isi: "337,8 Hektar"
        },
        {
            judul: "Jumlah Penduduk",
            isi: "18 Juta Orang"
        },
    ];

    return (
        <Section title={"Batas Desa Sukolilo"} description={"Ketahui batas-batas wilayah Desa Sukolilo dengan jelas agar makin mengenal lingkungan sekitar Anda."}>
            <div className='flex flex-col lg:flex-row gap-6 lg:gap-9 items-center pt-8 lg:pt-15 mx-10'>
                <div className='w-full lg:w-auto lg:flex-shrink-0 flex items-center justify-center'>
                    <img
                        src="https://placehold.co/600x400"
                        alt="Peta Desa Sukolilo"
                        // Added animation classes
                        className='w-full max-w-md lg:max-w-none lg:w-[600px] h-auto rounded-lg animate-fadeInScale'
                        style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }} // Delay for staggered effect
                    />
                </div>

                <div
                    className='bg-white shadow-lg rounded-2xl w-full'
                    // Added animation class
                    style={{ animation: 'fadeInSlideUp 0.8s ease-out forwards', animationDelay: '0.4s' }}
                >
                    <div className='body-2-semibold p-6 sm:p-8 lg:p-12 pb-0'>
                        <p className='text-left mb-4'>Batas Desa :</p>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-6 lg:px-10 pt-4'>
                            {/* Adding hover effect to boundary boxes */}
                            <div className='text-left body-4-semibold p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-100 hover:scale-[1.02]'>
                                <span className='block font-semibold'>Utara</span>
                                <p className='desc mt-1'>Desa Kemantren</p>
                            </div>
                            <div className='text-left body-4-semibold p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-100 hover:scale-[1.02]'>
                                <span className='block font-semibold'>Selatan</span>
                                <p className='desc mt-1'>Desa Kemantren</p>
                            </div>
                            <div className='text-left body-4-semibold p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-100 hover:scale-[1.02]'>
                                <span className='block font-semibold'>Timur</span>
                                <p className='desc mt-1'>Desa Kemantren</p>
                            </div>
                            <div className='text-left body-4-semibold p-4 bg-gray-50 rounded-lg transition-all duration-300 hover:shadow-md hover:bg-gray-100 hover:scale-[1.02]'>
                                <span className='block font-semibold'>Barat</span>
                                <p className='desc mt-1'>Desa Kemantren</p>
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 px-6 sm:px-8 lg:px-10 pb-6 sm:pb-8 lg:pb-10 pt-6'>
                        {pembagianWilayah.map((wilayah, index) => (
                            <div
                                key={index}
                                // Added hover effects and an entrance animation for each card
                                className='bg-white shadow-lg border-l-4 border-[#2F9CFF] px-4 sm:px-6 py-3 sm:py-4 flex flex-col items-start rounded-r-xl transition-all duration-300 hover:shadow-xl hover:translate-y-[-2px] animate-fadeInSlideUp'
                                style={{ animationDelay: `${0.6 + index * 0.1}s`, animationFillMode: 'backwards' }}
                            >
                                <h3 className='desc mb-2'>{wilayah.judul}</h3>
                                <p className='body-2-semibold'>{wilayah.isi}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </Section >
    );
};

export default BatasDesa;