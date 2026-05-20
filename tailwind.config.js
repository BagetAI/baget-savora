/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFCE1",
        accent: "#FF006E",
      },
      boxShadow: {
        brutal: "4px 4px 0 0 #000000",
      },
      fontFamily: {
        mono: ["var(--font-space-mono)"],
        sans: ["var(--font-work-sans)"],
      },
    },
  },
  plugins: [],
};