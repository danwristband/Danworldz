/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg1: '#17201B', 
        bg2: '#2E2E2E', // โค้ดสีแบบกำหนดเอง
      },
    },
  },
  plugins: [],
}

