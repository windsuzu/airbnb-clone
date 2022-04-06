import Image from "next/image";
import React from "react";
import { LargeCardContent } from "../interfaces";
import { motion } from "framer-motion";

type Props = {
    data: LargeCardContent;
};

const LargeCard = ({ data }: Props) => {
    return (
        <motion.section
            className="relative py-16 overflow-auto"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeIn" }}
        >
            <div className="relative h-96">
                <Image
                    src={data.image}
                    alt={data.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl"
                />
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl mb-4 w-64">{data.title}</h3>
                <p>{data.description}</p>
                <button className="text-white text-sm bg-gray-900 rounded-lg mt-5 px-4 py-2 hover:scale-105 transition ease-out">
                    {data.buttonText}
                </button>
            </div>
        </motion.section>
    );
};

export default LargeCard;
