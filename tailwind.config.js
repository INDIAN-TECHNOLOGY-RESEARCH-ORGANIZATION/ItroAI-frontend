module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
    theme: {
        extend: {
            backgroundImage: {
                "custom-gradient":
                    "linear-gradient(135deg, #0a0b1e 0%, #1a1b3e 50%, #2d1b69 100%)",
            },
            fontFamily: {
                sans: ["Arial", "sans-serif"],
            },
        },
    },
    plugins: [],
};
