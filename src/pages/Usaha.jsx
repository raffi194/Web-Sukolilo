import Hero from "../components/Hero";
import Section from "../components/Section";
import Button from "../components/Button";
import CardUsaha from "../components/Usaha/CardUsaha.jsx";

const Usaha = () => {

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
        <div className='py-10 flex flex-col gap-10 background-color: var(--clr-primary-1)'>
            <Hero title1="Usaha Desa Sukolilo" description="Melayani dengan Hati bersama Membangun Masyarakat Sejahtera" />
            <Section title="Katalog Usaha Desa Sukolilo"
                description="Selamat datang di bagian Pembuatan Surat website Desa Krisik! Kami hadir untuk memudahkan Anda dalam setiap langkah pembuatan surat yang Anda butuhkan. Di sini, kami menyediakan berbagai layanan pembuatan surat yang dirancang untuk memenuhi kebutuhan administrasi warga desa.">

                <div className="flex flex-row justify-center items-center pt-5 gap-x-5">
                    {categories.map((category) => (
                        <Button key={category.id} text={category.category} onClick={() => alert(`Kategori ${category.category} diklik!`)} />
                    ))}
                </div>

                <div className="py-15 flex flex-wrap justify-center items-start gap-15 mt-10">

                    <CardUsaha
                        image="src/assets/img/bengkel.png"
                        title="Angkasa Motorcycle Tube"
                        description="Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor."
                        address="JL. Pegangsaan Timur No.65 Jakarta"
                        linkTo="#"
                    />
                    <CardUsaha
                        image="src/assets/img/bengkel.png"
                        title="Angkasa Motorcycle Tube"
                        description="Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor."
                        address="JL. Pegangsaan Timur No.65 Jakarta"
                        linkTo="#"
                    />
                    <CardUsaha
                        image="src/assets/img/bengkel.png"
                        title="Angkasa Motorcycle Tube"
                        description="Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor."
                        address="JL. Pegangsaan Timur No.65 Jakarta"
                        linkTo="#"
                    />
                    <CardUsaha
                        image="src/assets/img/bengkel.png"
                        title="Angkasa Motorcycle Tube"
                        description="Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor."
                        address="JL. Pegangsaan Timur No.65 Jakarta"
                        linkTo="#"
                    />
                    <CardUsaha
                        image="src/assets/img/bengkel.png"
                        title="Angkasa Motorcycle Tube"
                        description="Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor."
                        address="JL. Pegangsaan Timur No.65 Jakarta"
                        linkTo="#"
                    />
                    <CardUsaha
                        image="src/assets/img/bengkel.png"
                        title="Angkasa Motorcycle Tube"
                        description="Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor."
                        address="JL. Pegangsaan Timur No.65 Jakarta"
                        linkTo="#"
                    />
                    <CardUsaha
                        image="src/assets/img/bengkel.png"
                        title="Angkasa Motorcycle Tube"
                        description="Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor."
                        address="JL. Pegangsaan Timur No.65 Jakarta"
                        linkTo="#"
                    />
                    <CardUsaha
                        image="src/assets/img/bengkel.png"
                        title="Angkasa Motorcycle Tube"
                        description="Melayani Tambal Ban, perbaikan mesin motor, isi gas roda motor."
                        address="JL. Pegangsaan Timur No.65 Jakarta"
                        linkTo="#"
                    />
                </div>

            </Section>

        </div>
    );
};

export default Usaha;