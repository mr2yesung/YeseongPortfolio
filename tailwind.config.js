/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "992px",
        xl: "1280px",
      },
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      robotoSlab: ["Roboto Slab", "serif"],
    },
    fontSize: {
      xs: ".75rem",
      xtiny: ".8125rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.375rem",
      "3xl": "1.5rem",
      "4xl": "1.5625rem",
      "5xl": "1.625rem",
      "6xl": "1.75rem",
      "7xl": "2.5rem",
      "8xl": "6rem",
    },
    extend: {
      backgroundImage: {
        home: "url('src/assets/images/background/bg.jpg')",
        "home-dark": "url('src/assets/images/background/bg-dark.jpg')",
      },
      colors: {
        "gray-lite": "#44566c",
      },
    },
  },
  plugins: [],
};
