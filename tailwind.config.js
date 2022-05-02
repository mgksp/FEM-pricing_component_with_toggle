module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        mini: "0.9375rem",
        32: "2rem",
      },
      colors: {
        ltrGrayishBlue: "hsl(240, 78%, 98%)",
        ltGrayishBlue: "hsl(234, 14%, 74%)",
        grayishBlue: "hsl(233, 13%, 49%)",
        dkGrayishBlue: "hsl(232, 13%, 33%)",
        primaryGradient: {
          from: "hsl(236, 72%, 79%)",
          to: "hsl(237, 63%, 64%)",
        },
      },
    },
  },
  plugins: [],
};
