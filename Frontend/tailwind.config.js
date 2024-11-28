/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cosmetic-green': '#1fa741',
        'custom-blue-start': '#2641c2',
        'custom-blue-end': '#01BFFD',
      },
    },
  },
  plugins: [],
}