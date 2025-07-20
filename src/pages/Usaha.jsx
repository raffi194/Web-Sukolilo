import Hero from "../components/Hero";
import Section from "../components/Section";
import Button from "../components/Button";

const Usaha = () => {


    return (
        <div className='py-10 flex flex-col gap-10 background-color: var(--clr-primary-1)'>
            <Hero title1="Usaha Desa Sukolilo" description="Melayani dengan Hati bersama Membangun Masyarakat Sejahtera" />
            <Section title="Katalog Usaha Desa Sukolilo"
                description="Selamat datang di bagian Pembuatan Surat website Desa Krisik! Kami hadir untuk memudahkan Anda dalam setiap langkah pembuatan surat yang Anda butuhkan. Di sini, kami menyediakan berbagai layanan pembuatan surat yang dirancang untuk memenuhi kebutuhan administrasi warga desa.">

                <div className="flex flex-row justify-center items-center pt-5 gap-x-5">
                    <Button text="Elektronik" onClick={() => alert('Diklik!')} />
                </div>

            </Section>

        </div>
    );
};

export default Usaha;