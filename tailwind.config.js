/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'src/pages/**/*.{js,ts,jsx,tsx}',
    'src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'screen-xls': '1440px',
      },
      width: {
        300: '300px',
      },
      height: {
        400: '400px',
      },
      gridTemplateColumns: {
        'product-base': 'repeat(3, minmax(0, 300px))',
      },
    },
  },
  plugins: [],
}
