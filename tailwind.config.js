/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      colors: {
        paragraph: {
          '100': '#80878E',
          '200': '#35344E',
          '300': '#1C1C1C'
        },
        primary: {
          'DEFAULT': '#337ED9',
        },
        secondary: {
          '100': '#E4E7F0',
          '200': '#F9F8FC',
        },
        border: {
          'DEFAULT': '#D0DAE7',
        }
      },
      spacing: {
        13: '3.25rem'
      }
    },
  },
  plugins: [],
}

