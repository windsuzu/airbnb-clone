import Footer from "../../components/footer";
import Header from "../../components/header";
import { useRouter } from "next/router";
import { format } from "date-fns";

const SearchPage = () => {
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
                <section className="flex-grow pt-14 px-12">
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
                </section>
            </main>
            <Footer />
        </>
    );
};

export default SearchPage;
