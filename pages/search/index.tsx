import { GetServerSideProps } from "next";
import Footer from "../../components/footer";
import Header from "../../components/header";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { SearchContent } from "../../interfaces";
import InfoCard from "../../components/info_card";
import Map from "../../components/map";
import { motion } from "framer-motion";

type Props = {
    searchResults: SearchContent[];
};

const SearchPage = ({ searchResults }: Props) => {
    const router = useRouter();
    let { location, startDate, endDate, guestNumber } = router.query;

    startDate = format(new Date(startDate as string), "dd MMMM yy");
    endDate = format(new Date(endDate as string), "dd MMMM yy");
    const dayRange = `${startDate} - ${endDate}`;
    const placeholder = `${location} | ${dayRange} | ${guestNumber} guests`;

    return (
        <>
            <Header transparent={null} placeholder={placeholder} />
            <main className="mt-36 md:mt-24 flex">
                <motion.section
                    className="flex-grow pt-14 px-4 md:px-6"
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <p className="text-xs">
                        20+ Stays for {guestNumber} guests
                    </p>
                    <h1 className="text-3xl font-semibold mt-2 mb-6">
                        Stays in {location}
                    </h1>
                    <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                        <p className="filter-button">
                            Cancellation Flexibility
                        </p>
                        <p className="filter-button">Type of Place</p>
                        <p className="filter-button">Price</p>
                        <p className="filter-button">Rooms and Beds</p>
                        <p className="filter-button">More Filters</p>
                    </div>

                    <div className="flex flex-col">
                        {searchResults.map((searchResult, idx) => (
                            <InfoCard key={idx} searchInfo={searchResult} />
                        ))}
                    </div>
                </motion.section>
                <motion.section
                    className="hidden lg:inline-flex min-w-[600px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                >
                    <Map
                        searchResults={searchResults}
                        startDate={startDate}
                        endDate={endDate}
                        guestNumber={guestNumber as string}
                    />
                </motion.section>
            </main>
            <Footer />
        </>
    );
};

export default SearchPage;

export const getServerSideProps: GetServerSideProps = async () => {
    const searchResults: SearchContent[] = await fetch(
        "https://test-e9746-default-rtdb.firebaseio.com/airbnb/search.json"
    ).then((res) => res.json());

    return { props: { searchResults } };
};
