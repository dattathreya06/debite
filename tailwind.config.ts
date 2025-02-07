/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      colors: {
        royal_blue_traditional: {
          DEFAULT: '#00296b',
          900: '#000815',
          800: '#00102b',
          700: '#001940',
          600: '#002156',
          500: '#00296b',
          400: '#0048bc',
          300: '#0d6aff',
          200: '#5e9cff',
          100: '#aecdff'
        },
        marian_blue: {
          DEFAULT: '#003f88',
          900: '#000d1c',
          800: '#001a37',
          700: '#002753',
          600: '#00336e',
          500: '#003f88',
          400: '#0063d4',
          300: '#2088ff',
          200: '#6ab0ff',
          100: '#b5d7ff'
        },
        polynesian_blue: {
          DEFAULT: '#00509d',
          900: '#001020',
          800: '#00213f',
          700: '#00315f',
          600: '#00417e',
          500: '#00509d',
          400: '#0076e4',
          300: '#2c99ff',
          200: '#72bbff',
          100: '#b9ddff'
        },
        mikado_yellow: {
          DEFAULT: '#fdc500',
          900: '#332800',
          800: '#665000',
          700: '#997800',
          600: '#cca000',
          500: '#fdc500',
          400: '#ffd333',
          300: '#ffde66',
          200: '#ffe999',
          100: '#fff4cc'
        },
        gold: {
          DEFAULT: '#ffd500',
          900: '#332b00',
          800: '#665500',
          700: '#998000',
          600: '#ccaa00',
          500: '#ffd500',
          400: '#ffdd33',
          300: '#ffe666',
          200: '#ffee99',
          100: '#fff6cc'
        }
      }
    }
  },
  plugins: [],
}