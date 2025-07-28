import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const CardTempat = ({ icon, title, jenis, description }) => {
    return (
        <motion.div
            className="rounded-2xl bg-white p-6 shadow-md"
            style={{ boxShadow: "0 6px 10px rgba(0, 0, 0, 0.2)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.03 }}
        >
            <div className="flex flex-col items-start gap-4 text-left">
                <div className="flex flex-row items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg">
                        <FontAwesomeIcon icon={icon} />
                    </div>
                    <p className="text-[#0F78F7] text-2xl font-bold">
                        {title}
                    </p>
                </div>

                <p className="text-xl text-[#0F78F7] font-semibold">{jenis}</p>

                <p className="text-base text-[#191B27]">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default CardTempat;
