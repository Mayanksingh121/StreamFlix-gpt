/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".hide-scrollbar": {
          /* Hide scrollbar for IE, Edge and Firefox */
          "-ms-overflow-style": "none" /* IE and Edge */,
          "scrollbar-width": "none" /* Firefox */,
          /* Hide scrollbar for Chrome, Safari and Opera */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    },
  ],
};
