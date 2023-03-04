/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    container: {
      center: true,
    },
    extend: { colors: { 'tealLoops': '#01fef0' } },

  },
  plugins: [require("daisyui")],
}
