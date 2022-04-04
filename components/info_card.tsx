import Image from "next/image";
import { SearchContent } from "../interfaces";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

type Props = {
    searchInfo: SearchContent;
};

const InfoCard = ({ searchInfo }: Props) => {
    return (
        <div className="flex flex-col md:flex-row py-7 px-2 border-b cursor-pointer first:border-t hover:opacity-80 hover:shadow-lg transition ease-out duration-200">
            <div className="relative h-32 md:h-52 mx-4 md:w-80 flex-shrink-0 m-2 md:m-0">
                <Image
                    src={searchInfo.img}
                    layout="fill"
                    alt={searchInfo.title}
                    objectFit="cover"
                    className="rounded-lg md:rounded-2xl"
                />
            </div>
            <div className="flex flex-col flex-grow pl-5 pr-5 md:pr-0">
                <div className="flex justify-between">
                    <p className="text-gray-600">{searchInfo.location}</p>
                    <HeartIcon className="h-7 cursor-pointer" />
                </div>
                <h4 className="text-xl font-bold">{searchInfo.title}</h4>
                <div className="border-b w-10 pt-2" />
                <p className="pt-2 text-sm text-gray-500 flex-grow">
                    {searchInfo.description}
                </p>
                <div className="flex justify-between items-end pt-5">
                    <p className="flex items-center text-sm gap-1">
                        <StarIcon className="h-5 text-red-400" />
                        {searchInfo.star}
                    </p>

                    <div>
                        <p className="text-right text-lg lg:text-2xl font-semibold pb-2">
                            {searchInfo.price}
                        </p>
                        <p className="text-right font-light">
                            {searchInfo.total}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;
