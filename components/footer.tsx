const Footer = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-10 bg-gray-100 text-gray-800">
            <div className="space-y-4 text-sm">
                <h3 className="font-bold text-base">Support</h3>
                <p className="cursor-pointer">Help Center</p>
                <p className="cursor-pointer">Safety information</p>
                <p className="cursor-pointer">Cancellation options</p>
                <p className="cursor-pointer">
                    Supporting people with disabilities
                </p>
                <p className="cursor-pointer">Report a neighborhood concern</p>
            </div>

            <div className="space-y-4 text-sm">
                <h3 className="font-bold text-base">COMMUNITY</h3>
                <p className="cursor-pointer">
                    Airbnb.org: disaster relief housing
                </p>
                <p className="cursor-pointer">Support Afghan refugees</p>
                <p className="cursor-pointer">Combating discrimination</p>
            </div>

            <div className="space-y-4 text-sm">
                <h3 className="font-bold text-base">HOSTING</h3>
                <p className="cursor-pointer">Try hosting</p>
                <p className="cursor-pointer">AirCover: protection for Hosts</p>
                <p className="cursor-pointer">Explore hosting resources</p>
                <p className="cursor-pointer">Visit our community forum</p>
                <p className="cursor-pointer">How to host responsibly</p>
            </div>

            <div className="space-y-4 text-sm">
                <h3 className="font-bold text-base">ABOUT</h3>
                <p className="cursor-pointer">Newsroom</p>
                <p className="cursor-pointer">Learn about new features</p>
                <p className="cursor-pointer">Letter from our founders</p>
                <p className="cursor-pointer">Careers</p>
                <p className="cursor-pointer">Investors</p>
                <p className="cursor-pointer">Airbnb Luxe</p>
            </div>
        </section>
    );
};

export default Footer;
