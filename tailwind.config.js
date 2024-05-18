/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
//   plugins: [
//     // Iconify plugin
//     addDynamicIconSelectors(),
// ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        'black-navbar':'#191919',
        'border-navbar': '#C84B31',
        'black-footer': '#000000',
        'black-marvel': '#000000',
        'red-marvel': '#EE0000'
      },

      fontFamily: {
          'vogue' : ['Vogue', 'sans-serif'],
          'nexa' : ['Nexa', 'sans-serif'],
      },

      spacing: {
              // BIG SPACING
              '75' : '19rem',
              '76' : '20rem',
              '107': '25rem',
              '108': '27rem',
              '119': '27.5rem',
              '120': '29.2rem',
              '121': '30rem',
              '122': '31.5rem',
              '132': '33rem',
              '144': '36rem',
              '156': '39rem',
              '168': '42rem',
              '180': '45rem',
              '192': '52rem',
              '204': '59rem',
              '205': '62rem',
              '216': '66rem',
              '217': '68rem',
              '218': '72rem',
              '228': '75rem' ,

              // SMALL SPACING
              
              
      },
      borderRadius: {
        'marvel': '32px'
      },
    },
  },
  plugins: [],
};
