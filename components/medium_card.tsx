import Image from "next/image";
import { MediumCardContent } from "../interfaces";

type Props = {
    data: MediumCardContent;
};

const MediumCard = ({ data }: Props) => {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative h-80 w-80">
                <Image
                    src={data.image}
                    alt={data.title}
                    layout="fill"
                    className="rounded-xl"
                />
            </div>
            <h3 className="text-2xl font-bold mt-2">{data.title}</h3>
        </div>
    );
};

export default MediumCard;
