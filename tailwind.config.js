/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0d2144',
          dark:    '#081529',
          mid:     '#122040',
          light:   '#1a3a6b',
        },
        gold: {
          DEFAULT: '#c8a84b',
          light:   '#e0c36a',
          dark:    '#a8882e',
          pale:    '#fef3c7',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
      },
      boxShadow: {
        card:    '0 4px 24px rgba(13,33,68,0.10)',
        'card-lg': '0 12px 48px rgba(13,33,68,0.18)',
      },
    },
  },
  plugins: [],
};
