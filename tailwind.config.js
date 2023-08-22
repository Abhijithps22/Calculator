const tailwindConfig = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueDark: "#0CEBEB", // Use quotes around color value
      },
    },
  },
  plugins: [],
};

module.exports = tailwindConfig;
