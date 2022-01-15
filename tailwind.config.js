// const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#382D8B',
      secondary: '#8E24AA',
      mainText: '#000000',
      secondaryText: '#FFFFFF',
      primaryLight: '#b6adfc',
      labelText: '#7C7C7D',
      border: '#e7e9ed',
      ltBorder: '#d1d7dc',
      bodyBg: '#FFFFFF',
      formBg: '#f8f9fa',
      tertiaryBg: '#f1f1fc',
      hoverBg: 'rgba(77, 79, 83, 0.4)',
      headerBg: '#201f21', // #010b1f #241731 #14151d #201f21
      error: '#d32f2f',
      black: '#000',
      white: '#fff',
    },
    extend: {
      fontSize: {
        tiny: '.93rem',
      },
      width: {
        '61/100': '61%',
        '18/25': '72%',
      },
    },
  },
  plugins: [],
};
