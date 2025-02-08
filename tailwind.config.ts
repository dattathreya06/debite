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
        primary: {
          light: "#e4346a",
          DEFAULT: "#d4145a",
          dark: "#b01048",
        },
        accent: {
          light: "#ab83fa",
          DEFAULT: "#9767f9",
          dark: "#7d45f7",
        },
      },
    },
  },
  plugins: [],
};
