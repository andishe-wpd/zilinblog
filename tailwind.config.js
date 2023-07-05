/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#101828',
        primary: '#175CD3',
        secondary: '#344054',
        grey: '#EAECF0',
      },
    },
  },
  plugins: [],
}
