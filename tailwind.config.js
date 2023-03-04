/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        llBlue: {
          500: '#020244',
          600: '#0c162d'
        },
        llTeal: {
          500: '#01fef0',
          600: '#42e8e0',
        },
        llWhite: '#f4f4f4',
        txt: {
          dark: '#202020',
          darkBtn: '#020244'
        }
      },
      boxShadow: {
        'card': '0px 6px 42px rgba(0, 0, 0, 0.08);',
      },

    },

  },
  plugins: [require("daisyui")],
}
