// /** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    maxWidth: {
      '1/2': '120rem',
    },
    extend: {
      zIndex: {
        7777: '7777',
      },
    },
  },
  plugins: [],
};
