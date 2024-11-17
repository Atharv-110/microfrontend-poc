module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 2.5s linear infinite", // Added slow spin animation
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
