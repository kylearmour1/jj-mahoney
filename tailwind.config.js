// module.exports = {
//   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
//   darkMode: false, // or 'media' or 'class'
//   theme: {
//     extend: {
//       fontSize: {
//         'custom-h1': '2rem', // Corrected custom class for h1
//         'custom-p': '1rem',  // Corrected custom class for p
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
