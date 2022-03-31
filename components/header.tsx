import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
} from "@heroicons/react/solid";

const Header = () => (
    <header className="grid grid-cols-1 gap-y-4 md:grid-cols-3 sticky top-0 z-50 bg-white shadow-md p-5 md:px-10">
        {/* Left */}
        <div className="relative flex items-center h-10 ml-2 my-auto cursor-pointer">
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
                className="flex-grow outline-none text-xs md:text-sm text-gray-600 placeholder-gray-400 bg-transparent mx-2 md:box-border w-full py-2"
                type="text"
                placeholder="Start your journey"
            />
            <SearchIcon className="h-8 bg-red-400 py-2 px-2.5 rounded-full cursor-pointer inline-flex text-white " />
        </div>

        {/* Right */}
        <div className="hidden md:flex justify-start md:justify-end items-center space-x-3 text-gray-500">
            <p className="text-sm cursor-pointer">Become a host</p>
            <GlobeAltIcon className="h-6 w-6 cursor-pointer" />
            <div className="flex space-x-1 border-2 p-2 rounded-full border-red-300">
                <MenuIcon className="h-6 w-6 cursor-pointer" />
                <UserCircleIcon className="h-6 w-6 cursor-pointer" />
            </div>
        </div>
    </header>
);

export default Header;
