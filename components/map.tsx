import MapGL, { Marker, Popup } from "react-map-gl";
import { SearchContent } from "../interfaces";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import { useMemo, useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import { HeartIcon } from "@heroicons/react/outline";
import { AnimatePresence, motion } from "framer-motion";

interface Location {
    latitude: number;
    longitude: number;
}

type Props = {
    searchResults: SearchContent[];
    startDate: string;
    endDate: string;
    guestNumber: string;
};

const Map = ({ searchResults, startDate, endDate, guestNumber }: Props) => {
    const locations = searchResults.map((result) => ({
        latitude: result.lat,
        longitude: result.long,
    }));

    const [selected, setSelected] = useState<SearchContent | null>(null);
    const center = getCenter(locations) as Location;

    const handleClick = (event: React.MouseEvent, result: SearchContent) => {
        event.stopPropagation();
        setSelected(result);
    };

    const handleClose = () => {
        setSelected(null);
    };

    const markers = useMemo(
        () =>
            searchResults.map((result) => (
                <Marker
                    key={result.img}
                    longitude={result.long}
                    latitude={result.lat}
                >
                    <p
                        className="bg-white border shadow-md px-2 py-1 text-sm rounded-full text-gray-800 font-semibold cursor-default"
                        onClick={(e) => handleClick(e, result)}
                    >
                        {result.price}
                    </p>
                </Marker>
            )),
        [searchResults]
    );

    return (
        <MapGL
            mapStyle="mapbox://styles/windsuzu/cl1kkypec001j14ljxyo50goa"
            style={{ width: "100%", height: "100%" }}
            mapboxAccessToken={process.env.PUBLIC_MAPBOX_TOKEN}
            initialViewState={{
                zoom: 11,
                latitude: center.latitude - 0.15,
                longitude: center.longitude,
            }}
            attributionControl={false}
            onClick={handleClose}
        >
            {markers}
            {selected && (
                <Popup
                    latitude={Number(selected.lat)}
                    longitude={selected.long}
                    closeButton={false}
                    closeOnClick={false}
                    className="cursor-pointer"
                    onClose={handleClose}
                >
                    <div className="relative h-32 w-full rounded-t-xl overflow-hidden z-10">
                        <Image
                            src={selected.img}
                            layout="fill"
                            alt=""
                            objectFit="cover"
                        />
                    </div>
                    <HeartIcon className="absolute right-3 top-3 h-7 z-50 text-white fill-gray-600 opacity-60" />
                    <div className="w-full px-3 pb-3">
                        <p className="flex items-center text-sm gap-1 py-2">
                            <StarIcon className="h-3 text-red-400" />
                            {selected.star}
                        </p>
                        <p className="text-base pl-2">{selected.title}</p>
                        <h4 className="text-lg font-semibold pl-2 py-1">
                            {selected.price}
                        </h4>
                        <p className="text-xs text-gray-800 p-2 border rounded-lg inline-block m-1">
                            {startDate} to {endDate} | {guestNumber}{" "}
                            {guestNumber === "1" ? "Guest" : "Guests"}
                        </p>
                    </div>
                </Popup>
            )}
        </MapGL>
    );
};

export default Map;
