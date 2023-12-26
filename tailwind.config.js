/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/components/**/*.{js,ts,jsx,tsx}',
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
