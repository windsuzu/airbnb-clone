module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                "fade-in": {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                },
            },
            animation: {
                "fade-in": "fade-in 0.5s ease-in-out",
            },
        },
    },
    plugins: [require("tailwind-scrollbar-hide")],
};
