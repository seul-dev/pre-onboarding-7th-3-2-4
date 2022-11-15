/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        black: "#262626",
        navy: "#041627",
        blue: "#468EF7",
        white1: "#ffffff",
        gray1: "#EFF2F5",
        gray2: "#828282",
        gray3: "#FAFAFA",
        gray4: "#9AA2A8",
        red: "#EC5B56"
      }
    }
  },
  plugins: []
};
