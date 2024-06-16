
// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   theme: {
//     extend: {
//       fontSize: {
//         'custom-h1': '2rem',
//         'custom-p': '1rem', 
//       },
//     },
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// };


module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#172554', // Custom background color
      },
      fontSize: {
        'custom-h1': '2rem', // Custom class for h1
        'custom-p': '1rem',  // Custom class for p
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
