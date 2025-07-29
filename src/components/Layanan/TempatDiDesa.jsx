import Section from "../Section";
import CardTempat from "./CardTempat";

import { faMosque, faUserGraduate, faWarehouse } from "@fortawesome/free-solid-svg-icons";

const dataTempat = [
    {
        title: "4 Posyandu",
        jenis: "Kesehatan",
        description: "Pelayanan kesehatan di Desa Sukolilo menjadi salah satu perhatian utama dalam mendukung kesejahteraan masyarakat.",
        icon: faWarehouse,
    },
    {
        title: "4 Masjid",
        jenis: "Tempat Ibadah",
        description: "Keagamaan menjadi pilar penting dengan keberadaan tempat ibadah dan kegiatan keagamaan yang rutin",
        icon: faMosque,
    },
    {
        title: "21 Pendidikan",
        jenis: "Pendidikan",
        description: "Pendidikan menjadi pondasi penting dalam membangun generasi masa depan yang cerdas dan berdaya saing.",
        icon: faUserGraduate,
    },
];

const TempatDiDesa = () => {
    return (
        <Section
            title={"Tempat Tempat di Desa"}
            description={
                "Desa Sukolilo memiliki beragam lokasi penting yang menjadi pusat kegiatan masyarakat, pelayanan publik, dan potensi lokal. Mulai dari kantor desa, sekolah, tempat ibadah, fasilitas kesehatan, hingga lokasi wisata dan sentra UMKM, semuanya hadir untuk mendukung kehidupan warga dan memperkuat identitas desa."
            }
            bgColor={"white"}
        >
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 px-4 sm:px-8 lg:px-20 py-5">

                {dataTempat.map((item, index) => (
                    <CardTempat
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        jenis={item.jenis}
                        description={item.description}
                    />
                ))}
            </div>

        </Section >
    );
};

export default TempatDiDesa;
