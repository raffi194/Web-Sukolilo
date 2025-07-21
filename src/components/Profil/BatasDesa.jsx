import Section from '../Section';
import MapView from './MapView';

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
            <div className='inline-flex gap-9 align-center pt-15'>
                <img src="https://placehold.co/600x400" />

                <div className='bg-white shadow-lg rounded-2xl w-full'>
                    <div className='body-2-semibold p-12 pb-0'>
                        <p className='text-left'>Batas Desa :</p>
                        <div className='grid justify-items-start px-10 pt-4 gap-x-30' style={{ gridTemplateColumns: 'repeat(2, 200px)', gridTemplateRows: 'repeat(2, 100px)' }}>
                            <div className='text-left body-4-semibold'>Utara <br /> <p className='desc'>Desa Kemantren</p></div>
                            <div className='text-left body-4-semibold'>Selatan <br /> <p className='desc'>Desa Kemantren</p> </div>
                            <div className='text-left body-4-semibold'>Timur <br /> <p className='desc'>Desa Kemantren</p> </div>
                            <div className='text-left body-4-semibold'>Barat <br /> <p className='desc'>Desa Kemantren</p> </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-2 gap-20 px-10 pb-10'>
                        {pembagianWilayah.map((wilayah, index) => (
                            <div
                                key={index}
                                className='bg-white shadow-lg border-l-4 border-[#2F9CFF] px-6 py-4 flex flex-col items-start rounded-r-xl hover:shadow-xl transition-shadow'
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

