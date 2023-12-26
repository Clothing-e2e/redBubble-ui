/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx,html}',
    './app/components/**/*.{js,ts,jsx,tsx}',
    './app/store/**/*.{js,ts,jsx,tsx}',
    './app/order/**/*.{js,ts,jsx,tsx}',
    './app/checkout/**/*.{js,ts,jsx,tsx}',
    './app/page.js',
    './app/layout.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
      },
      gridTemplateColumns: {
        order: '2fr 1fr',
      },
    },
  },
  plugins: [],
};
