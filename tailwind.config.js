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
        home: "url('/images/background/bg.jpg')",
        "home-dark": "url('/images/background/bg-dark.jpg')",
      },
      colors: {
        "gray-lite": "#44566c",
        "color-50": "#C17CEB",
        "color-100": "#FCF4FF",
        "color-200": "#D566FF",
        "color-300": "#FFF4F4",
        "color-400": "#FF6080",
        "color-500": "#F3FAFF",
        "color-600": "#269FFF",
        "color-700": "#FEFAF0",
        "color-800": "#DDA10C",
        "color-810": "#F8FBFB",
        "color-820": "#8774FF",
        "color-830": "#FF75D8",
        "color-840": "#FF6786",
        "color-910": "#A6A6A6",
        "color-920": "#1D1D1D",
        "color-930": "#FF6464",
        "color-940": "#9272D4",
        "color-950": "#5185D4",
        "color-960": "#CA56F2",
        "color-970": "#1C1C1C",
        "color-980": "#0D0D0D",
        "color-990": "#212425",
      },
      keyframes: {
        fade: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      animation: {
        fade: "fade 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
