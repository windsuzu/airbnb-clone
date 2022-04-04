import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon,
    UserCircleIcon,
    UsersIcon,
} from "@heroicons/react/solid";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import Link from "next/link";

type Props = {
    transparent: boolean | null;
    placeholder: string | null;
};

const Header = ({ transparent, placeholder }: Props) => {
    const [isTrans, setTrans] = useState<boolean | null>(transparent);
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const [guestNumber, setGuestNumber] = useState(1);
    const [isSearchFocus, setFocus] = useState(false);
    const router = useRouter();

    const listenScrollEvent = useCallback(() => {
        if (isSearchFocus) {
            return;
        }
        if (!searchInput.length && isTrans !== null) {
            setTrans(window.scrollY === 0);
        }
    }, [searchInput, isTrans, isSearchFocus]);

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent);
        return () => {
            window.removeEventListener("scroll", listenScrollEvent);
        };
    }, [listenScrollEvent]);

    const searchBarFocusHandler = () => {
        setFocus(true);
        if (isTrans) setTrans(false);
    };

    const changeSearchInputHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setSearchInput(e.target.value);
    };

    const dateSelection = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    const dateRangeHandler = (ranges: RangeKeyDict) => {
        const startDate = ranges.selection.startDate || new Date();
        const endDate = ranges.selection.endDate || new Date();
        setStartDate(startDate);
        setEndDate(endDate);
    };

    const changeGuestNumberHandler = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setGuestNumber(+e.target.value);
    };

    const resetSearchHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearchInput("");
        if (isTrans) setTrans(window.scrollY === 0);
    };

    const searchHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setSearchInput("");
        if (isTrans) setTrans(window.scrollY === 0);

        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guestNumber,
            },
        });
    };

    return (
        <header
            className={`fixed w-full grid grid-cols-1 gap-y-4 md:grid-cols-3 top-0 z-50 p-5 md:px-10 transition ease-out ${
                isTrans ? "bg-transparent" : "bg-white shadow-md"
            }`}
        >
            {/* Left */}
            <Link href="/" passHref>
                <div
                    className={`relative flex items-center ml-2 my-auto transition-all ease-out ${
                        isTrans ? "h-12" : "h-10"
                    }`}
                    style={{ maxWidth: "12rem" }}
                >
                    <Image
                        src="/images/logo.png"
                        alt="Airbnb Logo"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="center"
                        className="cursor-pointer"
                    />
                </div>
            </Link>

            {/* SearchBar */}
            <div className="flex md:mt-0 items-center justify-between border-2 rounded-full py-2 px-4 shadow-sm">
                <input
                    className={`flex-grow outline-none text-xs md:text-sm text-gray-600 bg-transparent mx-2 md:box-border w-full py-2 ${
                        isTrans ? "placeholder-white" : "placeholder-gray-400"
                    }`}
                    type="text"
                    placeholder={placeholder || "Start your journey"}
                    onFocus={searchBarFocusHandler}
                    onBlur={(e) => setFocus(false)}
                    value={searchInput}
                    onChange={changeSearchInputHandler}
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
                <div
                    className={`flex space-x-1 border-2 p-2 rounded-full transition ease-out ${
                        isTrans ? "border-gray-400" : "border-red-300"
                    }`}
                >
                    <MenuIcon className="h-6 w-6 cursor-pointer" />
                    <UserCircleIcon className="h-6 w-6 cursor-pointer" />
                </div>
            </div>

            <AnimatePresence>
                {searchInput && (
                    <motion.div
                        className="flex flex-col col-span-3 mx-auto mt-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <DateRangePicker
                            ranges={[dateSelection]}
                            onChange={dateRangeHandler}
                            minDate={new Date()}
                            rangeColors={["#FD5B61"]}
                        />
                        <div className="flex items-center mb-4 px-4 pb-2 border-b">
                            <h2 className="flex-grow text-xl font-semibold">
                                Number of Guests
                            </h2>
                            <UsersIcon className="h-5" />
                            <input
                                type="number"
                                value={guestNumber}
                                min={1}
                                max={16}
                                onChange={changeGuestNumberHandler}
                                className="w-12 pl-2 ml-2 text-lg text-red-500 outline-none"
                            />
                        </div>
                        <div className="flex mt-3">
                            <button
                                className="flex-grow text-gray-500"
                                onClick={resetSearchHandler}
                            >
                                Cancel
                            </button>
                            <button
                                className="flex-grow text-red-500"
                                onClick={searchHandler}
                            >
                                Search
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
