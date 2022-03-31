import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
} from "@heroicons/react/solid";
import { useEffect, useState } from "react";

const Header = () => {
    const [isTrans, setTrans] = useState(true);
    const listenScrollEvent = () => {
        setTrans(window.scrollY <= 70);
    };
    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, []);

    const searchBarFocusHandler = () => {
        setTrans(false);
    };
    const searchBarBlurHandler = () => {
        setTrans(true);
    };

    return (
        <header
            className={`fixed w-full grid grid-cols-1 gap-y-4 md:grid-cols-3 top-0 z-50 p-5 md:px-10 transition ease-out ${
                isTrans ? "bg-transparent" : "bg-white shadow-md"
            }`}
        >
            {/* Left */}
            <div
                className={`relative flex items-center ml-2 my-auto transition-all ease-out ${
                    isTrans ? "h-12" : "h-10"
                }`}
            >
                <Image
                    src="/images/logo.png"
                    alt="Airbnb Logo"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>

            {/* SearchBar */}
            <div className="flex md:mt-0 items-center justify-between border-2 rounded-full py-2 px-4 shadow-sm">
                <input
                    className={`flex-grow outline-none text-xs md:text-sm text-gray-600 bg-transparent mx-2 md:box-border w-full py-2 ${
                        isTrans ? "placeholder-white" : "placeholder-gray-400"
                    }`}
                    type="text"
                    placeholder="Start your journey"
                    onFocus={searchBarFocusHandler}
                    onBlur={searchBarBlurHandler}
                />
                <SearchIcon className="h-8 bg-red-400 py-2 px-2.5 rounded-full cursor-pointer inline-flex text-white " />
            </div>

            {/* Right */}
            <div className="hidden md:flex justify-start md:justify-end items-center space-x-3 text-gray-500">
                <p
                    className={`text-sm cursor-pointer ${
                        isTrans ? "text-gray-700" : ""
                    }`}
                >
                    Become a host
                </p>
                <GlobeAltIcon className="h-6 w-6 cursor-pointer" />
                <div className="flex space-x-1 border-2 p-2 rounded-full border-red-300">
                    <MenuIcon className="h-6 w-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 w-6 cursor-pointer" />
                </div>
            </div>
        </header>
    );
};

export default Header;
