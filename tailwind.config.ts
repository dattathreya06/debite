/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        dark: {
          light: "#2a2a2a",
          DEFAULT: "#181818",
          dark: "#0a0a0a",
        },
        // primary: {
        //   light: "#e4346a", //#4A90E2
        //   DEFAULT: "#d4145a", //#1E5AA8
        //   dark: "#b01048", //#133E73
        // },
        // accent: {
        //   light: "#ab83fa", //#6FB1FC
        //   DEFAULT: "#9767f9", //#3D7EDB
        //   dark: "#7d45f7", //#265AA6
        // },
        primary: {
          light: "#3B82C4", // Modern bright blue (trustworthy but vibrant)
          DEFAULT: "#1A4D8F", // Corporate deep blue
          dark: "#0F2C4D", // Navy, great for headers/footers
        },
        accent: {
          light: "#5DA9E9", // Softer sky blue for gradients
          DEFAULT: "#246BCE", // Bold accent for buttons
          dark: "#174A96", // Muted professional tone
        },
      },
    },
  },
  plugins: [],
};
