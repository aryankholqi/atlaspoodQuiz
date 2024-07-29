/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "320px",
      "2xs": "430px",
      "3xs": "520px",
      sm: "640px",
      md: "768px",
      mdb: "880px",
      lg: "1024px",
      lgb: "1175px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1760px",
    },

    extend: {
      fontFamily: {
        novaBlack: ["Proximanova-Black"],
        novaMedium: ["Proximanova-Medium"],
        novaRegular: ["Proximanova-Regular"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "16px",
          "2xl": "80px",
          "3xl": "162px",
        },
      },
    },
  },
  plugins: [],
};
