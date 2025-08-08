import Section from "../Section";

const Pendidikan = () => {
    const sekolahList = [
        "TK Sunan Kali Jaga Paud (Bendo)",
        "SDS Sunan Kali Jaga (Gedangan)",
        "SMP 123 Sunan Kali Jaga (RT 19)",
        "SMK Sunan Kali Jaga (RT 19)",
        "IAI (RT 20)",
        "SDN 1 SUKOLILO (RT 2)",
        "TK Muslimat NU (RT 10)",
        "MTS Ahyan (RT 02)",
        "MTS Ahyan (RT 02)",
        "MA Ahyan (RT 02)",
        "SMK Ahyan (RT 01)",
        "MTS Ar Rohmah (RT 28)",
        "MI Ar Rohmah (RT 28)",
        "TK. Paud SKJ (RT 17)",
        "SMPN 1 Jabung (RT 14)",
        "SMK Ahyan 2 (RT 10)",
        "MI Miftahul Huda (RT 10)",
        "SMP 1 Darul Itqom (RT 14)",
        "SMK Darul Itqom (RT 14)",
        "TK Darma Wanita Persatuan Sukolilo (RT 12)",
        "TK Alkhoirut (RT 28)"
    ];

    return (
        <div className="px-4 sm:px-6 lg:px-16 py-10 pb-20 bg-cover bg-center">
            <Section
                title={"Pendidikan di Desa Sukolilo"}
                description={
                    "Desa Sukolilo terus mendukung kemajuan pendidikan melalui keberadaan sekolah-sekolah formal, lembaga pendidikan nonformal, serta program literasi masyarakat."
                }
                rounded="rounded-3xl"
                bgImage="url('/src/assets/img/Berita Acara BG.png')"
            >
                <div className="columns-1 sm:columns-2 gap-8 text-base sm:text-lg md:text-xl pt-6 max-w-5xl mx-auto space-y-3 text-left">
                    {sekolahList.map((nama, i) => (
                        <div key={i} className="break-inside-avoid flex gap-2">
                            <span className="font-semibold">{i + 1}.</span>
                            <span>{nama}</span>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Pendidikan;
