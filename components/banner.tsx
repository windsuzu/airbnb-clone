import Image from "next/image";
import { motion } from "framer-motion";

const Banner = () => {
    return (
        <motion.div
            className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[700px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeIn" }}
        >
            <Image
                src="/images/banner.jpg"
                layout="fill"
                alt="Leah Kelley - Pexels"
                objectFit="cover"
                objectPosition="center"
            />
            <div className="relative top-1/2 w-full text-center -translate-y-1/3">
                <p className="font-extrabold text-xl sm:text-3xl md:text-5xl text-white">
                    Not sure where to go? Perfect.
                </p>
                <button className="bg-white my-4 md:my-8 px-6 md:px-8 py-3 md:py-4 rounded-full text-lg font-semibold text-red-500 shadow-md hover:shadow-2xl hover:scale-105 transition duration-200">
                    I am flexible
                </button>
            </div>
        </motion.div>
    );
};

export default Banner;
