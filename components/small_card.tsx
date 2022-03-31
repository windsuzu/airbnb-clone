import Image from "next/image";
import React from "react";
import { SmallCardContent } from "../interfaces";

type Props = {
    data: SmallCardContent;
};

const SmallCard = ({ data }: Props) => {
    return (
        <div className="flex space-x-4 rounded-xl items-center m-2 my-4 cursor-pointer hover:bg-gray-200 hover:scale-105 transition duration-150 ease-out">
            <div className="relative h-16 w-16">
                <Image
                    src={data.image}
                    alt={data.location}
                    layout="fill"
                    className="rounded-lg"
                />
            </div>
            <div className="flex flex-col justify-center">
                <p className="text-sm font-semibold">{data.location}</p>
                <p className="text-xs text-gray-600">{data.distance}</p>
            </div>
        </div>
    );
};

export default SmallCard;
