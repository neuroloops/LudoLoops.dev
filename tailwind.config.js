/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: { colors: { 'tealLoops': '#01fef0' } },

  },
  plugins: [require("daisyui")],
}
