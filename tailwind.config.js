module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        lightYallow: "#FFAB4C",
        darkBlue: "#142F43",
      },
      fontFamily: {
        // almarai: ["Almarai", "sans-serif"],
      },

      backgroundImage: (theme) => ({
        leafs: "url('../img/leafs.jpg')",
      }),
    },
  },
  plugins: [],
};
