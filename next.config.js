/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
    env: {
        PUBLIC_MAPBOX_TOKEN:
            "pk.eyJ1Ijoid2luZHN1enUiLCJhIjoiY2wxa2pwaWNuMDFoMDNjbzZ4YmF1OXAwYSJ9.4FnyNtsy5xNWKUo_FERstA",
    },
};

module.exports = nextConfig;
