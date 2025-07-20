import Section from '../Section';
import MapView from './MapView';

const BatasDesa = () => {
    return (
        <Section title={"Batas Desa Sukolilo"} description={"Ketahui batas-batas wilayah Desa Sukolilo dengan jelas agar makin mengenal lingkungan sekitar Anda."}>
            <div className='inline-flex gap-9 align-center pt-15'>
                <img src="https://placehold.co/600x400" />

                <div className='bg-white shadow-lg rounded-2xl w-full'>
                    <div className='body-2-semibold p-12'>
                        <p className='text-left'>Batas Desa :</p>
                        <div className='grid justify-items-start px-10 pt-4 gap-x-30' style={{ gridTemplateColumns: 'repeat(2, 200px)', gridTemplateRows: 'repeat(2, 100px)' }}>
                            <div className='text-left'>Utara <br /> Desa Kemantren</div>
                            <div className='text-left'>Selatan <br /> Desa Kemantren </div>
                            <div className='text-left'>Timur <br /> Desa Kemantren </div>
                            <div className='text-left'>Barat <br /> Desa Kemantren </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-10 justify-center pb-15'>
                        <div className='bg-white shadow-lg border-l-5 border-[#2F9CFF] px-5 pt-6 pb-10 gap-1 flex flex-col items-start rounded-r-2xl pr-25'>
                            <h3 className=''>Luas Desa</h3>
                            <p className='desc'>337,8 Hektar</p>
                        </div>
                        <div className='bg-white shadow-lg border-l-5 border-[#2F9CFF] px-5 pt-6 pb-10 gap-1 flex flex-col items-start rounded-r-2xl pr-25'>
                            <h3 className=''>Jumlah Penduduk</h3>
                            <p className='desc'>18 Juta Orang</p>
                        </div>
                    </div>
                </div>

            </div>
        </Section >
    );
};

export default BatasDesa;

